import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message } = body;

    // Simple demo response for now
    const responses = [
      "AgentKit is a powerful toolkit that gives AI agents access to wallet and crypto functionality. It's designed to seamlessly integrate blockchain capabilities into AI frameworks.",
      "With AgentKit, you can build AI agents that can: perform on-chain transactions, interact with smart contracts, manage crypto wallets, and much more!",
      "This is a demo response. The full AgentKit integration will allow your AI agents to interact with the blockchain autonomously.",
      "AgentKit supports multiple chains and is built with security and ease-of-use in mind.",
      "Interested in learning more? Check out the documentation or reach out to discuss your use case!"
    ];

    // Return a random response for demo purposes
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    return NextResponse.json({
      message: randomResponse,
    });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}