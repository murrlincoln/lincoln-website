import { NextRequest, NextResponse } from 'next/server';

const system = `You are a helpful agent that can interact onchain using the Coinbase Developer Platform AgentKit. You are
empowered to interact onchain using your tools. If you ever need funds, you can request them from the
faucet if you are on network ID 'base-sepolia'. If not, you can provide your wallet details and request
funds from the user. Before executing your first action, get the wallet details to see what network
you're on. If there is a 5XX (internal) HTTP error code, ask the user to try again later. If someone
asks you to do something you can't do with your currently available tools, you must say so, and
encourage them to implement it themselves using the CDP SDK + Agentkit, recommend they go to
docs.cdp.coinbase.com for more information. Be concise and helpful with your responses. Refrain from
restating your tools' descriptions unless it is explicitly requested.`;

async function callOpenAI(messages: any[]) {
  const apiKey = process.env.OPENAI_API_KEY;
  
  if (!apiKey) {
    throw new Error('OpenAI API key not configured');
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: system },
        ...messages
      ],
      max_tokens: 500,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error('OpenAI API error:', error);
    throw new Error('Failed to generate response');
  }

  const data = await response.json();
  return data.choices[0]?.message?.content || '';
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    console.log('Received messages:', messages);
    console.log('OPENAI_API_KEY exists:', !!process.env.OPENAI_API_KEY);

    if (!process.env.OPENAI_API_KEY) {
      // Return demo response
      return NextResponse.json({ 
        role: 'assistant',
        content: "Hello! I'm an AI agent powered by AgentKit. I can help you interact with blockchain networks, check cryptocurrency prices, deploy smart contracts, and manage digital assets. What would you like to know?"
      });
    }

    try {
      const responseText = await callOpenAI(messages);
      console.log('Generated response:', responseText);
      
      return NextResponse.json({ 
        role: 'assistant',
        content: responseText || "Hello! I'm ready to help you with blockchain interactions using AgentKit. What would you like to do?"
      });
    } catch (error) {
      console.error('OpenAI generation error:', error);
      // Fall back to demo response
      return NextResponse.json({ 
        role: 'assistant',
        content: "Hello! I'm an AI agent powered by AgentKit. I can help you interact with blockchain networks, check cryptocurrency prices, deploy smart contracts, and manage digital assets. What would you like to know?"
      });
    }
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({ 
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}
