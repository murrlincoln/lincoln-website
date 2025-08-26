import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages } = body;

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({
        content: 'OpenAI API key is not configured. Please add OPENAI_API_KEY to your .env file.',
        error: 'Missing API key'
      }, { status: 500 });
    }

    // Prepare messages with system prompt
    const systemMessage = {
      role: 'system',
      content: `You are a helpful AI assistant with AgentKit capabilities for blockchain interactions on Base Sepolia. 
      You can help users with: checking crypto prices, deploying NFT contracts, transferring ETH, checking wallet balances, and more blockchain operations.
      Always be helpful and respond to user queries directly.`
    };

    const messagesForAPI = [systemMessage, ...messages];

    console.log('Sending request to OpenAI API...');
    
    // Direct OpenAI API call
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: messagesForAPI,
        temperature: 0.7,
        max_tokens: 500
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('OpenAI API error:', errorData);
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('OpenAI response received');
    
    const content = data.choices[0]?.message?.content || "I'm ready to help with your blockchain needs!";
    
    return NextResponse.json({
      content,
      usage: {
        promptTokens: data.usage?.prompt_tokens,
        completionTokens: data.usage?.completion_tokens,
        totalTokens: data.usage?.total_tokens
      }
    });
    
  } catch (error) {
    console.error('API route error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return NextResponse.json({
      content: `Sorry, I encountered an error: ${errorMessage}. Please try again.`,
      error: errorMessage
    }, { status: 500 });
  }
}
