import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ADmyBRAND AI Suite - AI-Powered Marketing Platform',
  description: 'Transform your marketing with AI-powered tools. Create, optimize, and scale your brand with our comprehensive AI marketing suite.',
  keywords: 'AI marketing, brand management, marketing automation, AI tools, digital marketing',
  authors: [{ name: 'ADmyBRAND AI Suite' }],
  openGraph: {
    title: 'ADmyBRAND AI Suite - AI-Powered Marketing Platform',
    description: 'Transform your marketing with AI-powered tools. Create, optimize, and scale your brand with our comprehensive AI marketing suite.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADmyBRAND AI Suite - AI-Powered Marketing Platform',
    description: 'Transform your marketing with AI-powered tools. Create, optimize, and scale your brand with our comprehensive AI marketing suite.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
} 