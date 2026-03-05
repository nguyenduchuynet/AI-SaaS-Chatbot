import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatBotPro - Build AI Chatbots That Convert",
  description: "Create custom AI chatbots trained on your data. Embed them on your website to automate support, generate leads, and boost conversions 24/7.",
  keywords: ["AI chatbot", "chatbot builder", "customer support", "AI assistant", " automation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased bg-slate-950`}>
        {children}
      </body>
    </html>
  );
}
