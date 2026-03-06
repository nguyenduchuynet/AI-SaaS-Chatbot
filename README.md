# 🤖 ChatBotPro - AI Chatbot Builder SaaS

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma" alt="Prisma">
  <img src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai" alt="OpenAI">
  <img src="https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe" alt="Stripe">
</p>

> 🔥 **Production-ready AI Chatbot Builder** — Build, customize, and deploy AI chatbots for your website in minutes.

## ✨ Features

### 🚀 Core Features
- **Custom AI Training** — Train chatbots on your website, documents, or custom data
- **Natural Conversations** — Advanced NLP with context awareness
- **Easy Embed** — Copy-paste widget code to any website
- **Real-time Analytics** — Track conversations, satisfaction, and conversions

### 💳 Payments & Subscriptions
- **Stripe Integration** — Secure payment processing
- **Subscription Plans** — Free, Pro, and Enterprise tiers
- **Usage Tracking** — Monitor message limits and usage

### 🔐 Authentication
- **Multiple Providers** — Google & GitHub OAuth
- **JWT Sessions** — Secure token-based authentication
- **User Management** — Dashboard for managing multiple chatbots

### 🎨 Modern Tech Stack
- **Next.js 14** — App Router, Server Actions
- **TypeScript** — Full type safety
- **Prisma ORM** — Type-safe database access
- **Tailwind CSS** — Beautiful, responsive UI
- **Framer Motion** — Smooth animations

## 📸 Preview

<div align="center">
  <img src="/images/landing.png" alt="Landing Page" width="100%">
</div>

<div align="center">
  <img src="/images/dashboard.png" alt="Dashboard" width="100%">
</div>

<div align="center">
  <img src="/images/chat.png" alt="Chat Interface" width="100%">
</div>

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- OpenAI API Key
- Stripe Account (for payments)
- Google & GitHub OAuth Apps (optional)

### Installation

```bash
# Clone the repository
git clone https://github.com/nguyenduchuynet/AI-SaaS-Chatbot.git
cd AI-SaaS-Chatbot

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with your API keys

# Initialize database
npx prisma migrate dev

# Run development server
npm run dev
```

### Environment Variables

Create a `.env` file:

```env
# Database
DATABASE_URL="file:./dev.db"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-super-secret-key"

# OAuth (optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GITHUB_ID="your-github-id"
GITHUB_SECRET="your-github-secret"

# OpenAI
OPENAI_API_KEY="sk-your-openai-key"

# Stripe (optional)
STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_PRICE_ID_PRO="price_..."
```

## 📁 Project Structure

```
├── prisma/
│   └── schema.prisma        # Database schema
├── src/
│   ├── app/
│   │   ├── dashboard/     # Protected dashboard routes
│   │   │   ├── chat/     # Chat interface
│   │   │   └── create/   # Chatbot creator
│   │   ├── api/          # API endpoints
│   │   ├── page.tsx      # Landing page
│   │   └── layout.tsx    # Root layout
│   ├── components/
│   │   └── landing/     # Landing page components
│   └── lib/
│       ├── auth.ts       # NextAuth config
│       ├── prisma.ts     # Prisma client
│       ├── openai.ts     # OpenAI client
│       └── utils.ts      # Utility functions
├── public/
│   └── images/           # Preview images
├── .env.example
├── package.json
└── README.md
```

## 🔌 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/[...nextauth]` | GET/POST | Authentication |
| `/api/chatbots` | GET | List chatbots |
| `/api/chatbots` | POST | Create chatbot |
| `/api/chat` | POST | Send message to AI |
| `/api/stripe/checkout` | POST | Create checkout session |
| `/api/stripe/webhook` | POST | Stripe webhook |

## 💰 Pricing Plans

| Feature | Starter (Free) | Pro ($29/mo) | Enterprise |
|---------|----------------|--------------|------------|
| Chatbots | 1 | 5 | Unlimited |
| Messages | 500/mo | Unlimited | Unlimited |
| Customization | Basic | Advanced | Full |
| Analytics | ❌ | ✅ | ✅ |
| Support | Community | Priority | Dedicated |
| White-label | ❌ | ❌ | ✅ |

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contributing

Contributions are welcome! Please read our [contributing guidelines](CONTRIBUTING.md) first.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) — React framework
- [OpenAI](https://openai.com) — AI capabilities
- [Stripe](https://stripe.com) — Payment infrastructure
- [Tailwind CSS](https://tailwindcss.com) — Styling

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/nguyenduchuynet">Huy Nguyen</a>
</p>
