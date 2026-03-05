import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/chatbots - Get all chatbots for user
export async function GET() {
  try {
    // In production, get user from session
    // const session = await getServerSession(authOptions)

    const chatbots = await prisma.chatbot.findMany({
      where: {
        // userId: session.user.id,
        userId: 'demo-user-id', // Demo
      },
      orderBy: { createdAt: 'desc' },
      include: {
        _count: {
          select: { messages: true },
        },
      },
    })

    return NextResponse.json(chatbots)
  } catch (error) {
    console.error('Error fetching chatbots:', error)
    return NextResponse.json(
      { error: 'Failed to fetch chatbots' },
      { status: 500 }
    )
  }
}

// POST /api/chatbots - Create new chatbot
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, description, persona, model, temperature, maxTokens } = body

    // Validate required fields
    if (!name || !persona) {
      return NextResponse.json(
        { error: 'Name and persona are required' },
        { status: 400 }
      )
    }

    // In production, get user from session
    // const session = await getServerSession(authOptions)
    const userId = 'demo-user-id' // Demo

    const chatbot = await prisma.chatbot.create({
      data: {
        name,
        description: description || '',
        persona,
        model: model || 'gpt-4o-mini',
        temperature: temperature || 0.7,
        maxTokens: maxTokens || 2048,
        userId,
      },
    })

    return NextResponse.json(chatbot, { status: 201 })
  } catch (error) {
    console.error('Error creating chatbot:', error)
    return NextResponse.json(
      { error: 'Failed to create chatbot' },
      { status: 500 }
    )
  }
}
