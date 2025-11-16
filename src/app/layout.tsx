import type { Metadata } from 'next'
import { Inter, Playfair_Display, Great_Vibes } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { LanguageProvider } from '@/context/LanguageContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-great-vibes',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Site',
  description: 'Clean starter layout.',
  keywords: 'site, landing',
  authors: [{ name: 'Site' }],
  creator: 'Site',
  publisher: 'Site',
  icons: {
    icon: '/WINTERDZ.png',
    shortcut: '/WINTERDZ.png',
    apple: '/WINTERDZ.png',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://brahim-perfum.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Site',
    description: 'Clean starter layout.',
    url: 'https://brahim-perfum.com',
    siteName: 'Site',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Site',
      },
    ],
    locale: 'fr_DZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Site',
    description: 'Clean starter layout.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} ${greatVibes.variable}`}>
      <body
        className={`${inter.className} bg-dark-crimson-radial min-h-screen text-slate-100`}
      >
        <LanguageProvider>
          <Navbar />
          <main className="pt-28 md:pt-32 pb-20">{children}</main>
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  )
}
