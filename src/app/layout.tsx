import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'ClawPhone: Talk to Your OpenClaw Bot Safely',
  description: 'Voice, text, and images with 20+ character voices — plus every OpenClaw skill gets a safety score before you install it.',
  openGraph: {
    title: 'ClawPhone: Talk to Your OpenClaw Bot Safely',
    description: 'The voice-first OpenClaw app with built-in skill safety scores.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
