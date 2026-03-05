import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { chatWithAI } from '@/lib/openai'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { chatbotId, message, history } = body

    if (!chatbotId || !message) {
      return NextResponse.json(
        { error: 'Chatbot ID and message are required' },
        { status: 400 }
      )
    }

    // Get chatbot configuration
    const chatbot = await prisma.chatbot.findUnique({
      where: { id: chatbotId },
    })

    if (!chatbot) {
      return NextResponse.json(
        { error: 'Chatbot not found' },
        { status: 404 }
      )
    }

    // Build messages array with system prompt
    const messages = [
      { role: 'system' as const, content: chatbot.persona },
      ...(history || []).map((msg: { role: string; content: string }) => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content,
      })),
      { role: 'user' as const, content: message },
    ]

    // Get AI response
    const aiResponse = await chatWithAI(
      messages,
      chatbot.model,
      chatbot.temperature,
      chatbot.maxTokens
    )

    // Save messages to database (optional - in production with real auth)
    // await prisma.message.createMany({
    //   data: [
    //     { role: 'user', content: message, chatbotId, userId: session.user.id },
    //     { role: 'assistant', content: aiResponse, chatbotId, userId: session.user.id },
    //   ],
    // })

    return NextResponse.json({
      response: aiResponse,
      chatbot: {
        id: chatbot.id,
        name: chatbot.name,
      },
    })
  } catch (error) {
    console.error('Chat error:', error)
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    )
  }
}
