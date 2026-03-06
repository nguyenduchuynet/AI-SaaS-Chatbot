'use client'

import Link from 'next/link'
import { Sparkles, Zap, Shield, Users, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />

      {/* Navigation Bar */}
      <header className="relative z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold">C</span>
              </div>
              <span className="text-xl font-bold text-white">ChatBotPro</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#features" className="text-slate-300 hover:text-white text-sm">Features</Link>
              <Link href="#pricing" className="text-slate-300 hover:text-white text-sm">Pricing</Link>
              <Link href="/dashboard" className="text-slate-300 hover:text-white text-sm">Dashboard</Link>
              <Link href="/dashboard/create" className="text-slate-300 hover:text-white text-sm">Create Bot</Link>
              <Link href="/dashboard/chat/demo" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg">
                Try Demo
              </Link>
            </nav>
            <button className="md:hidden p-2 text-slate-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 py-4 space-y-3">
            <Link href="/dashboard" className="block text-slate-300 hover:text-white">Dashboard</Link>
            <Link href="/dashboard/create" className="block text-slate-300 hover:text-white">Create Bot</Link>
            <Link href="/dashboard/chat/demo" className="block px-4 py-2 bg-indigo-600 text-white text-center rounded-lg">Try Demo</Link>
          </div>
        )}
      </header>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-32 sm:pb-40">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Powered by GPT-4 & Claude</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
            Build AI Chatbots
            <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              That Convert Visitors
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Create custom AI chatbots trained on your data. Embed them on your website
            to automate support, generate leads, and boost conversions 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105">
              Go to Dashboard
              <Zap className="w-5 h-5" />
            </Link>
            <Link href="/dashboard/chat/demo" className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-700 transition-all duration-200">
              Try Demo Chat
            </Link>
          </div>
        </div>

        <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {[
            { icon: Zap, title: 'Lightning Fast', desc: 'Response times under 500ms with optimized caching' },
            { icon: Shield, title: 'Enterprise Security', desc: 'SOC 2 compliant, GDPR ready, end-to-end encryption' },
            { icon: Users, title: 'Human Handoff', desc: 'Seamless transfer to human agents when needed' },
          ].map((feature, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
              <feature.icon className="w-10 h-10 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
