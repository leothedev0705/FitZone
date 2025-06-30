interface UserProfile {
  name?: string;
  age?: number;
  gender?: 'male' | 'female' | 'other';
  height?: number; // cm
  weight?: number; // kg
  fitnessGoal?: 'weight-loss' | 'muscle-gain' | 'endurance' | 'general-fitness';
  experienceLevel?: 'beginner' | 'intermediate' | 'advanced';
  medicalConditions?: string[];
  currentActivity?: 'sedentary' | 'lightly-active' | 'moderately-active' | 'very-active';
  availableDays?: number; // days per week
}

interface ChatResponse {
  message: string;
  suggestions?: string[];
  quickActions?: { label: string; action: string }[];
}

export class FitnessChatbotService {
  private userProfile: UserProfile = {};

  // Calculate BMI
  private calculateBMI(height: number, weight: number): number {
    return weight / ((height / 100) ** 2);
  }

  // Calculate BMR (Basal Metabolic Rate)
  private calculateBMR(profile: UserProfile): number {
    if (!profile.weight || !profile.height || !profile.age || !profile.gender) return 0;
    
    if (profile.gender === 'male') {
      return 88.362 + (13.397 * profile.weight) + (4.799 * profile.height) - (5.677 * profile.age);
    } else {
      return 447.593 + (9.247 * profile.weight) + (3.098 * profile.height) - (4.330 * profile.age);
    }
  }

  // Calculate daily calorie needs
  private calculateDailyCalories(profile: UserProfile): number {
    const bmr = this.calculateBMR(profile);
    const activityMultipliers = {
      'sedentary': 1.2,
      'lightly-active': 1.375,
      'moderately-active': 1.55,
      'very-active': 1.725
    };
    
    const multiplier = activityMultipliers[profile.currentActivity || 'moderately-active'];
    return Math.round(bmr * multiplier);
  }

  // Get personalized workout recommendations
  private getWorkoutRecommendations(profile: UserProfile): string {
    const { fitnessGoal, experienceLevel, availableDays } = profile;
    let recommendations = '';

    switch (fitnessGoal) {
      case 'weight-loss':
        recommendations += "🔥 **Weight Loss Program:**\n";
        recommendations += "• HIIT training 3-4x/week\n";
        recommendations += "• Strength training 2-3x/week\n";
        recommendations += "• Cardio 30-45 minutes\n";
        recommendations += "• Focus on compound movements\n\n";
        break;
      
      case 'muscle-gain':
        recommendations += "💪 **Muscle Building Program:**\n";
        recommendations += "• Strength training 4-5x/week\n";
        recommendations += "• Progressive overload principle\n";
        recommendations += "• 8-12 reps, 3-4 sets\n";
        recommendations += "• Rest 48-72 hours between muscle groups\n\n";
        break;
      
      case 'endurance':
        recommendations += "🏃‍♂️ **Endurance Training:**\n";
        recommendations += "• Cardio 4-5x/week\n";
        recommendations += "• Mix steady-state and interval training\n";
        recommendations += "• Gradually increase duration\n";
        recommendations += "• Include 1-2 strength sessions\n\n";
        break;
      
      default:
        recommendations += "🎯 **General Fitness Program:**\n";
        recommendations += "• Balanced cardio and strength\n";
        recommendations += "• 3-4 workouts per week\n";
        recommendations += "• Full-body exercises\n";
        recommendations += "• Include flexibility training\n\n";
    }

    // Adjust for experience level
    if (experienceLevel === 'beginner') {
      recommendations += "**Beginner Tips:**\n";
      recommendations += "• Start with bodyweight exercises\n";
      recommendations += "• Focus on form over intensity\n";
      recommendations += "• Gradually increase difficulty\n";
      recommendations += "• Consider personal training sessions\n";
    } else if (experienceLevel === 'advanced') {
      recommendations += "**Advanced Techniques:**\n";
      recommendations += "• Periodization training\n";
      recommendations += "• Advanced lifting techniques\n";
      recommendations += "• Sport-specific training\n";
      recommendations += "• Competition preparation\n";
    }

    return recommendations;
  }

  // Get nutrition recommendations
  private getNutritionRecommendations(profile: UserProfile): string {
    const dailyCalories = this.calculateDailyCalories(profile);
    const bmi = profile.height && profile.weight ? this.calculateBMI(profile.height, profile.weight) : 0;
    
    let nutrition = "🍎 **Personalized Nutrition Plan:**\n\n";
    
    if (dailyCalories > 0) {
      nutrition += `**Daily Calorie Target:** ${dailyCalories} calories\n\n`;
    }

    switch (profile.fitnessGoal) {
      case 'weight-loss':
        nutrition += "**Weight Loss Nutrition:**\n";
        nutrition += "• Create a 300-500 calorie deficit\n";
        nutrition += "• Protein: 1.6-2.2g per kg body weight\n";
        nutrition += "• Healthy fats: 20-30% of calories\n";
        nutrition += "• Complex carbs: Focus on timing\n";
        nutrition += "• Hydration: 3-4 liters water daily\n\n";
        break;
      
      case 'muscle-gain':
        nutrition += "**Muscle Building Nutrition:**\n";
        nutrition += "• Calorie surplus of 300-500 calories\n";
        nutrition += "• Protein: 2.0-2.5g per kg body weight\n";
        nutrition += "• Carbs: 4-6g per kg body weight\n";
        nutrition += "• Post-workout: Protein + carbs within 30 mins\n";
        nutrition += "• Frequent meals: 4-6 meals per day\n\n";
        break;
      
      case 'endurance':
        nutrition += "**Endurance Nutrition:**\n";
        nutrition += "• Carbs: 5-7g per kg body weight\n";
        nutrition += "• Protein: 1.2-1.4g per kg body weight\n";
        nutrition += "• Pre-workout: Carbs 1-2 hours before\n";
        nutrition += "• During: Sports drinks for sessions >60 mins\n";
        nutrition += "• Recovery: 3:1 carb to protein ratio\n\n";
        break;
      
      default:
        nutrition += "**Balanced Nutrition:**\n";
        nutrition += "• Protein: 1.2-1.6g per kg body weight\n";
        nutrition += "• Carbs: 3-5g per kg body weight\n";
        nutrition += "• Healthy fats: 25-30% of calories\n";
        nutrition += "• 5-7 servings fruits/vegetables daily\n";
        nutrition += "• Adequate hydration throughout day\n\n";
    }

    if (bmi > 0) {
      if (bmi < 18.5) {
        nutrition += "⚠️ **BMI Alert:** You're underweight. Consider increasing caloric intake with nutrient-dense foods.\n";
      } else if (bmi > 25) {
        nutrition += "⚠️ **BMI Alert:** Focus on creating a sustainable caloric deficit for healthy weight management.\n";
      }
    }

    return nutrition;
  }

  // Process user message and generate response
  public processMessage(message: string, userProfile?: UserProfile): ChatResponse {
    if (userProfile) {
      this.userProfile = { ...this.userProfile, ...userProfile };
    }

    const lowerMessage = message.toLowerCase();

    // Fitness advice queries
    if (lowerMessage.includes('workout') || lowerMessage.includes('exercise')) {
      return {
        message: this.getWorkoutRecommendations(this.userProfile),
        suggestions: ['Tell me about nutrition', 'Book a trainer session', 'Show me class schedules'],
        quickActions: [
          { label: 'View Classes', action: 'navigate-classes' },
          { label: 'Book Trainer', action: 'navigate-trainers' }
        ]
      };
    }

    if (lowerMessage.includes('nutrition') || lowerMessage.includes('diet') || lowerMessage.includes('food')) {
      return {
        message: this.getNutritionRecommendations(this.userProfile),
        suggestions: ['Create meal plan', 'Calculate my calories', 'Supplement advice'],
        quickActions: [
          { label: 'Nutrition Page', action: 'navigate-nutrition' },
          { label: 'Book Consultation', action: 'navigate-contact' }
        ]
      };
    }

    // Health calculations
    if (lowerMessage.includes('bmi') || lowerMessage.includes('body mass')) {
      if (this.userProfile.height && this.userProfile.weight) {
        const bmi = this.calculateBMI(this.userProfile.height, this.userProfile.weight);
        let category = '';
        if (bmi < 18.5) category = 'Underweight';
        else if (bmi < 25) category = 'Normal weight';
        else if (bmi < 30) category = 'Overweight';
        else category = 'Obese';

        return {
          message: `📊 **Your BMI Analysis:**\n\nBMI: ${bmi.toFixed(1)}\nCategory: ${category}\n\nBMI is just one indicator of health. Muscle mass, bone density, and overall body composition are also important factors to consider.`,
          suggestions: ['Get nutrition advice', 'Create workout plan', 'Book assessment'],
        };
      } else {
        return {
          message: "To calculate your BMI, I need your height and weight. Please share your profile information first by saying 'personal profile'.",
          suggestions: ['Share my profile', 'Learn about BMI', 'General fitness tips'],
        };
      }
    }

    if (lowerMessage.includes('calories') || lowerMessage.includes('calorie')) {
      if (this.userProfile.weight && this.userProfile.height && this.userProfile.age && this.userProfile.gender) {
        const calories = this.calculateDailyCalories(this.userProfile);
        return {
          message: `🔥 **Your Daily Calorie Needs:**\n\nEstimated: ${calories} calories/day\n\nThis is based on your current stats and activity level. Adjust based on your specific goals:\n• Weight loss: -300-500 calories\n• Muscle gain: +300-500 calories\n• Maintenance: Stay at this level`,
          suggestions: ['Create meal plan', 'Workout recommendations', 'Track my progress'],
        };
      } else {
        return {
          message: "To calculate your daily calorie needs, I need your complete profile (age, gender, height, weight, activity level). Please share your information by saying 'personal profile'.",
          suggestions: ['Share my profile', 'General nutrition tips', 'Learn about calories'],
        };
      }
    }

    // Default responses for common queries
    const responses: { [key: string]: ChatResponse } = {
      'classes': {
        message: "🏋️‍♂️ **Our Fitness Classes:**\n\n• **HIIT Blast** - High-intensity interval training\n• **Vinyasa Yoga** - Flow-based yoga practice\n• **Powerlifting** - Strength and technique focus\n• **Spin Classes** - High-energy cycling\n• **CrossFit** - Functional fitness\n• **Zumba** - Dance-based cardio\n\nAll classes are included with Pro and Elite memberships!",
        suggestions: ['Book a class', 'See schedule', 'Meet instructors'],
        quickActions: [
          { label: 'Class Schedule', action: 'navigate-classes' },
          { label: 'Book Session', action: 'navigate-contact' }
        ]
      },
      'trainers': {
        message: "👨‍💼 **Meet Our Expert Trainers:**\n\n• **Alex Rodriguez** - Strength & Powerlifting Coach\n• **Sarah Johnson** - Yoga & Wellness Specialist\n• **Mike Thompson** - HIIT & CrossFit Expert\n• **Emma Davis** - Dance & Cardio Instructor\n• **James Wilson** - Personal Training Director\n• **Lisa Chen** - Nutrition Specialist\n\nAll trainers are certified professionals with years of experience!",
        suggestions: ['Book personal training', 'See trainer schedules', 'Training packages'],
        quickActions: [
          { label: 'Meet Trainers', action: 'navigate-trainers' },
          { label: 'Book Session', action: 'navigate-contact' }
        ]
      },
      'membership': {
        message: "💳 **Membership Plans:**\n\n**Basic - $29/month**\n• Gym floor access\n• Basic equipment\n• Locker rooms\n\n**Pro - $59/month** ⭐ Most Popular\n• Everything in Basic\n• Unlimited group classes\n• 24/7 access\n• Nutrition tracking\n\n**Elite - $99/month**\n• Everything in Pro\n• Unlimited personal training\n• Nutrition consultations\n• Recovery room access\n\nAll plans include a 7-day FREE trial!",
        suggestions: ['Start free trial', 'Compare plans', 'Family discounts'],
        quickActions: [
          { label: 'View Plans', action: 'navigate-membership' },
          { label: 'Start Trial', action: 'navigate-contact' }
        ]
      },
    };

    // Check for keyword matches
    for (const [keyword, response] of Object.entries(responses)) {
      if (lowerMessage.includes(keyword)) {
        return response;
      }
    }

    // Default response
    return {
      message: "I'm here to help with all your fitness needs! I can assist with:\n\n🏋️ Workout plans & exercise advice\n🍎 Nutrition & meal planning\n📊 Health calculations (BMI, calories)\n💳 Membership information\n📅 Class schedules & booking\n👨‍💼 Personal trainer matching\n\nWhat would you like to know more about?",
      suggestions: ['Create workout plan', 'Nutrition advice', 'Calculate my BMI', 'View membership plans'],
      quickActions: [
        { label: 'Personal Profile', action: 'collect-biodata' },
        { label: 'Book Consultation', action: 'navigate-contact' }
      ]
    };
  }

  // Generate fitness tips based on user profile
  public getPersonalizedTips(profile: UserProfile): string[] {
    const tips: string[] = [];

    if (profile.experienceLevel === 'beginner') {
      tips.push("💡 Start with bodyweight exercises to build foundation strength");
      tips.push("💡 Focus on learning proper form before increasing intensity");
      tips.push("💡 Allow adequate rest between workouts (24-48 hours)");
    }

    if (profile.fitnessGoal === 'weight-loss') {
      tips.push("💡 Combine cardio with strength training for optimal fat loss");
      tips.push("💡 Stay in a moderate calorie deficit (300-500 calories)");
      tips.push("💡 Prioritize protein to maintain muscle during weight loss");
    }

    if (profile.fitnessGoal === 'muscle-gain') {
      tips.push("💡 Progressive overload is key - gradually increase weights");
      tips.push("💡 Eat in a slight calorie surplus with adequate protein");
      tips.push("💡 Focus on compound movements like squats and deadlifts");
    }

    // General tips
    tips.push("💡 Stay hydrated - aim for 8-10 glasses of water daily");
    tips.push("💡 Get 7-9 hours of quality sleep for recovery");
    tips.push("💡 Consistency beats perfection - aim for sustainable habits");

    return tips.slice(0, 3); // Return 3 random tips
  }
}

export const fitnessChatbot = new FitnessChatbotService(); 