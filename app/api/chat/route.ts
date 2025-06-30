import { NextRequest, NextResponse } from 'next/server';
import { fitnessChatbot } from '@/lib/chatbotService';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    // Get AI response using the chatbot service
    const response = fitnessChatbot.processMessage(message);

    return NextResponse.json({
      message: response.message,
      suggestions: response.suggestions,
      quickActions: response.quickActions,
      timestamp: new Date().toISOString(),
    });

  } catch (error: unknown) {
    console.error('Chat API Error:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    
    return NextResponse.json(
      { 
        error: 'Failed to process your message. Please try again.',
        details: errorMessage
      },
      { status: 500 }
    );
  }
} 