import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'A1 Removals Adelaide | Trusted Local Removalists',
  description:
    'Adelaide\'s trusted packing and moving experts. Insured, licensed and local. Residential, office and interstate moves. Get a free quote today.',
  generator: 'v0.app',
  keywords: [
    'Adelaide movers',
    'Adelaide removalists',
    'packing and moving Adelaide',
    'furniture removal Adelaide',
    'interstate movers South Australia',
  ],
  icons: {
    icon: '/logo.png',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'A1 Removals Adelaide | Trusted Local Removalists',
    description:
      'Insured, licensed and local. Residential, office and interstate moves across Adelaide. Get a free quote today.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1f2a44',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light bg-background ${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
