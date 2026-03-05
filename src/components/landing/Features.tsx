'use client'

import { Bot, MessageSquare, BarChart3, Globe, Code, Workflow } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: 'Custom AI Training',
    description: 'Train your chatbot on your website, documents, or custom data sources in minutes.',
  },
  {
    icon: MessageSquare,
    title: 'Natural Conversations',
    description: 'Advanced NLP enables human-like responses with context awareness.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Track conversations, user satisfaction, and conversion metrics in real-time.',
  },
  {
    icon: Globe,
    title: 'Multi-language',
    description: 'Support for 50+ languages with automatic translation capabilities.',
  },
  {
    icon: Code,
    title: 'Easy Integration',
    description: 'Copy-paste embed code or use our API for custom implementations.',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Connect to CRM, helpdesk, and 5000+ apps with Zapier integration.',
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Everything You Need to Build
            <span className="text-indigo-400"> AI Chatbots</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Powerful features to create, deploy, and scale your AI assistants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                <feature.icon className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
