import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

interface UserBiodata {
  name?: string;
  age?: number;
  gender?: string;
  height?: number;
  weight?: number;
  fitnessGoal?: string;
  experienceLevel?: string;
  medicalConditions?: string;
}

export async function POST(request: NextRequest) {
  try {
    const { message, userBiodata, conversationHistory } = await request.json();

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Create a comprehensive system prompt for fitness assistance
    const systemPrompt = `You are FitBot, an expert AI fitness assistant for FitZone, a premium fitness and wellness center. You have access to comprehensive fitness, nutrition, and wellness knowledge.

FITZONE INFORMATION:
- Premium fitness center with 15,000+ members
- Services: Group classes, personal training, nutrition consultation, wellness programs
- Classes: HIIT Blast, Vinyasa Yoga, Powerlifting, Spin Classes, CrossFit, Zumba, Meditation & Stretch
- Trainers: Alex Rodriguez (Strength), Sarah Johnson (Yoga), Mike Thompson (HIIT), Emma Davis (Dance), James Wilson (Personal Training), Lisa Chen (Nutrition)
- Membership: Basic ($29), Pro ($59), Elite ($99) - all include 7-day free trial
- Hours: Mon-Fri 5AM-11PM, Sat 6AM-10PM, Sun 7AM-9PM (24/7 for Pro/Elite)
- Contact: (555) 123-4567, info@fitzone.com, 123 Fitness Street

USER PROFILE:
${userBiodata ? JSON.stringify(userBiodata, null, 2) : 'No profile data available'}

CONVERSATION HISTORY:
${conversationHistory ? conversationHistory.slice(-6).map((msg: any) => `${msg.type}: ${msg.content}`).join('\n') : 'No previous conversation'}

INSTRUCTIONS:
1. Always be encouraging, professional, and motivational
2. Provide specific, actionable fitness and nutrition advice
3. Use the user's profile data to personalize recommendations
4. Include FitZone services naturally when relevant
5. For workout plans, be specific with sets, reps, and progression
6. For nutrition, provide macro targets and meal timing
7. Calculate BMI, calorie needs, and other metrics when requested
8. Suggest appropriate FitZone classes and trainers based on goals
9. Use emojis appropriately but don't overuse them
10. Keep responses concise but informative (max 300 words)
11. If asked about booking or scheduling, direct to contact information
12. Always prioritize user safety - recommend consulting professionals for medical concerns
13. FORMAT RESPONSES WITH MARKDOWN: Use **bold** for emphasis, bullet points for lists, and proper structure
14. Use ### for headings, **bold** for important terms, and - for bullet points

CURRENT USER MESSAGE: "${message}"

Respond as FitBot with helpful, personalized fitness guidance:`;

    const result = await model.generateContent(systemPrompt);
    const response = await result.response;
    const botMessage = response.text();

    return NextResponse.json({ 
      message: botMessage,
      success: true 
    });

  } catch (error) {
    console.error('Gemini API Error:', error);
    
    // Fallback response if API fails
    const fallbackMessage = "I'm having trouble connecting right now, but I'm still here to help! " +
      "I can assist with workout plans, nutrition advice, class information, and booking sessions. " +
      "For immediate assistance, call us at (555) 123-4567 or visit our contact page.";

    return NextResponse.json({ 
      message: fallbackMessage,
      success: false,
      error: 'API temporarily unavailable'
    });
  }
} 