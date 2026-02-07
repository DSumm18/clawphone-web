import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'ClawPhone: Talk to Your OpenClaw Bot Safely',
  description: 'Voice chat with 20+ character voices. Every OpenClaw skill gets a safety score before you install. Get ClawPhone for secure AI conversations.',
  openGraph: {
    title: 'ClawPhone: Talk to Your OpenClaw Bot Safely',
    description: 'Voice chat with 20+ character voices. Every OpenClaw skill gets a safety score before you install.',
    url: 'https://clawphone.com',
    siteName: 'ClawPhone',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClawPhone: Talk to Your OpenClaw Bot Safely',
    description: 'Voice chat with 20+ character voices. Every OpenClaw skill gets a safety score before you install.',
    images: ['/og-image.png'],
  },
}

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ClawPhone",
    "operatingSystem": "iOS, Android",
    "applicationCategory": "UtilitiesApplication",
    "offers": {
      "@type": "Offer",
      "price": "4.99",
      "priceCurrency": "GBP"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Schoolgle Ltd",
    "url": "https://clawphone.com",
    "logo": "https://clawphone.com/logo.png"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ClawPhone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ClawPhone is a mobile application for iOS and Android designed for the OpenClaw AI ecosystem. It enables users to engage in voice, text, and image chat with OpenClaw bots using over 20 distinct character voices. Uniquely, ClawPhone includes an integrated security engine that automatically scans every OpenClaw skill for vulnerabilities and assigns a safety score prior to installation, ensuring user privacy and data security."
        }
      },
      {
        "@type": "Question",
        "name": "Is ClawPhone free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, ClawPhone offers a free tier that includes web scanning for OpenClaw skills, 2 character voices, and 10 messages per day. Pro is £4.99/month for the full mobile app experience."
        }
      }
    ]
  }
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
