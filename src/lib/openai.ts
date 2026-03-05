import OpenAI from 'openai'

function getOpenAI() {
  const key = process.env.OPENAI_API_KEY
  if (!key) {
    throw new Error('OPENAI_API_KEY is not set')
  }
  return new OpenAI({ apiKey: key })
}

export async function chatWithAI(
  messages: { role: 'user' | 'assistant' | 'system'; content: string }[],
  model: string = 'gpt-4o-mini',
  temperature: number = 0.7,
  maxTokens: number = 2048
): Promise<string> {
  try {
    const openai = getOpenAI()
    const completion = await openai.chat.completions.create({
      model,
      messages,
      temperature,
      max_tokens: maxTokens,
    })

    return completion.choices[0]?.message?.content || 'No response generated'
  } catch (error) {
    console.error('OpenAI API Error:', error)
    throw new Error('Failed to generate AI response')
  }
}

export async function countTokens(text: string): Promise<number> {
  try {
    const openai = getOpenAI()
    const response = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: text,
    })
    return response.data[0]?.embedding?.length || 0
  } catch {
    return Math.ceil(text.length / 4)
  }
}
