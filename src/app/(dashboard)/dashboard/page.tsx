'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Bot, Plus, MessageSquare, BarChart3, Settings, LogOut, Copy, Check } from 'lucide-react'

// Mock data for demo
const mockChatbots = [
  {
    id: '1',
    name: 'Customer Support Bot',
    description: 'Handles customer inquiries and support tickets',
    messages: 1247,
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    name: 'Sales Assistant',
    description: 'Qualifies leads and schedules demos',
    messages: 892,
    createdAt: '2024-02-01',
  },
]

export default function DashboardPage() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyEmbedCode = (id: string) => {
    navigator.clipboard.writeText(`<script>window.ChatBotPro.init('${id}')</script>`)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold">C</span>
              </div>
              <span className="text-xl font-bold text-white">ChatBotPro</span>
            </Link>
            <div className="flex items-center gap-4">
              <button className="text-slate-400 hover:text-white transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <button className="text-slate-400 hover:text-white transition-colors">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                <Bot className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Total Chatbots</p>
                <p className="text-2xl font-bold text-white">{mockChatbots.length}</p>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Total Messages</p>
                <p className="text-2xl font-bold text-white">
                  {mockChatbots.reduce((acc, bot) => acc + bot.messages, 0).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">This Month</p>
                <p className="text-2xl font-bold text-white">+24%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Create New Button */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Your Chatbots</h2>
          <Link
            href="/dashboard/create"
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors"
          >
            <Plus className="w-5 h-5" />
            Create New
          </Link>
        </div>

        {/* Chatbots List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockChatbots.map((bot) => (
            <div
              key={bot.id}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{bot.name}</h3>
                    <p className="text-sm text-slate-400">{bot.description}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <div className="flex items-center gap-4 text-sm text-slate-400">
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-4 h-4" />
                    {bot.messages.toLocaleString()} messages
                  </span>
                  <span>Created {bot.createdAt}</span>
                </div>
                <button
                  onClick={() => copyEmbedCode(bot.id)}
                  className="flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  {copied === bot.id ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy Embed
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}

          {/* Empty state / Create new card */}
          <Link
            href="/dashboard/create"
            className="p-6 rounded-2xl border-2 border-dashed border-slate-800 hover:border-indigo-500/50 transition-colors flex flex-col items-center justify-center min-h-[200px] group"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-800 group-hover:bg-indigo-500/10 flex items-center justify-center mb-4 transition-colors">
              <Plus className="w-6 h-6 text-slate-400 group-hover:text-indigo-400 transition-colors" />
            </div>
            <p className="text-slate-400 group-hover:text-white transition-colors">
              Create a new chatbot
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
