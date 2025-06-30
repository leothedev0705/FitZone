import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const { message, userBiodata } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'Gemini API key not configured' },
        { status: 500 }
      );
    }

    // Create the AI model
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Create a comprehensive system prompt for the fitness assistant
    const systemPrompt = `You are FitBot, an enthusiastic and knowledgeable AI fitness assistant for FitZone gym. You provide personalized, motivational, and scientifically-backed fitness and nutrition advice.

PERSONALITY:
- Energetic, motivational, and supportive
- Use fitness emojis and engaging language
- Be conversational but professional
- Show genuine interest in the user's progress
- Celebrate achievements and encourage through challenges

YOUR EXPERTISE:
- Personalized workout plans and exercise techniques
- Nutrition guidance and meal planning
- Health calculations (BMI, calories, macros)
- Injury prevention and recovery
- Mental health and motivation
- FitZone gym services and facilities

FITZONE SERVICES TO PROMOTE:
- Membership plans (Basic $29, Pro $59, Elite $99)
- Personal training sessions
- Group fitness classes (HIIT, Yoga, Powerlifting, Spin, CrossFit, Zumba)
- Nutrition consultations
- 24/7 gym access
- Recovery room and facilities

USER PROFILE: ${userBiodata ? JSON.stringify(userBiodata, null, 2) : 'Not provided yet'}

GUIDELINES:
- Always consider the user's experience level, goals, and any limitations
- Provide specific, actionable advice
- Include safety warnings when appropriate
- Suggest FitZone services when relevant
- Ask follow-up questions to better help the user
- Keep responses engaging and motivational
- Use markdown formatting for better readability
- Include relevant emojis to make responses more engaging

RESPONSE FORMAT:
- Use headers, bullet points, and emojis for easy reading
- Provide 2-3 suggestion questions at the end
- Keep responses comprehensive but not overwhelming

Remember: You're here to help people achieve their fitness goals while promoting FitZone's amazing facilities and services!`;

    // Combine system prompt with user message
    const fullPrompt = `${systemPrompt}\n\nUser Message: ${message}`;

    // Generate response from Gemini
    const result = await model.generateContent(fullPrompt);
    const response = result.response;
    const aiMessage = response.text();

    // Generate follow-up suggestions based on the conversation
    const suggestionsPrompt = `Based on this fitness conversation, suggest 3 short, relevant follow-up questions the user might want to ask. Format as a simple array of strings. Keep each suggestion under 6 words.

Conversation context: ${message}
AI Response: ${aiMessage}

Return only the array in this format: ["suggestion 1", "suggestion 2", "suggestion 3"]`;

    const suggestionsResult = await model.generateContent(suggestionsPrompt);
    let suggestions: string[] = [];
    
    try {
      const suggestionsText = suggestionsResult.response.text();
      // Try to parse suggestions, fallback to default if parsing fails
      suggestions = JSON.parse(suggestionsText);
    } catch {
      suggestions = ['Tell me more', 'Create a plan', 'What about nutrition?'];
    }

    return NextResponse.json({
      message: aiMessage,
      suggestions: suggestions,
      timestamp: new Date().toISOString(),
    });

  } catch (error: unknown) {
    console.error('Chat API Error:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    
    // Fallback to a helpful error message
    return NextResponse.json({
      message: "I'm having trouble connecting to my AI brain right now! 🤖💭\n\nBut don't worry - I'm still here to help! Try asking me about:\n\n🏋️ **Workout plans**\n🍎 **Nutrition advice**\n📅 **Class schedules**\n💳 **Membership options**\n\nOr contact our amazing trainers directly for personalized help!",
      suggestions: ['View trainers', 'Check class schedule', 'Membership plans'],
      error: process.env.NODE_ENV === 'development' ? errorMessage : undefined,
      timestamp: new Date().toISOString(),
    }, { status: 200 }); // Return 200 with fallback message instead of error
  }
} 