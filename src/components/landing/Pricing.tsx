'use client'

import { Check } from 'lucide-react'
import { useState } from 'react'

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Perfect for testing and small projects',
    features: [
      '1 chatbot',
      '500 messages/month',
      'Basic customization',
      'Community support',
      'Web widget embed',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For growing businesses',
    features: [
      '5 chatbots',
      'Unlimited messages',
      'Advanced customization',
      'Priority support',
      'Analytics dashboard',
      'Human handoff',
      'Custom domain',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: [
      'Unlimited chatbots',
      'Unlimited messages',
      'White-label solution',
      'Dedicated support',
      'SLA guarantee',
      'SSO integration',
      'Custom AI models',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(true)

  return (
    <section id="pricing" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>

          <div className="flex items-center justify-center gap-4">
            <span className={!annual ? 'text-white' : 'text-slate-400'}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative w-14 h-7 bg-slate-800 rounded-full transition-colors"
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-indigo-500 rounded-full transition-transform ${
                  annual ? 'left-1' : 'left-8'
                }`}
              />
            </button>
            <span className={annual ? 'text-white' : 'text-slate-400'}>
              Annual <span className="text-indigo-400 text-sm">(-20%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative p-8 rounded-2xl border ${
                plan.popular
                  ? 'bg-slate-900 border-indigo-500'
                  : 'bg-slate-900/50 border-slate-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-500 text-white text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.period && (
                  <span className="text-slate-400">{plan.period}</span>
                )}
              </div>
              <p className="text-slate-400 mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    : 'bg-slate-800 hover:bg-slate-700 text-white'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
