import type { Metadata } from 'next'
import { Inter, Playfair_Display, Great_Vibes } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { LanguageProvider } from '@/context/LanguageContext'
import { SiteFooter } from '@/components/SiteFooter'

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
  title: 'Allouani - Parfums pour Algériens',
  description:
    'Decouvrez notre collection exclusive de parfums de luxe et fragrances authentiques a Bouzareah. Parfums originaux, eaux de parfum haut de gamme et fragrances rares.',
  keywords:
    'parfum, parfums de luxe, fragrances authentiques, eau de parfum, parfum original, Bouzareah, parfumerie, fragrances rares, parfums importes',
  authors: [{ name: 'Allouani' }],
  creator: 'Allouani',
  publisher: 'Allouani',
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
    title: 'Allouani - Parfums pour Algériens',
    description:
      'Decouvrez notre collection exclusive de parfums de luxe et fragrances authentiques a Bouzareah. Parfums originaux, eaux de parfum haut de gamme et fragrances rares.',
    url: 'https://brahim-perfum.com',
    siteName: 'Allouani',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Allouani - Parfums pour Algériens',
      },
    ],
    locale: 'fr_DZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Allouani - Parfums pour Algériens',
    description:
      'Decouvrez notre collection exclusive de parfums de luxe et fragrances authentiques a Bouzareah. Parfums originaux, eaux de parfum haut de gamme et fragrances rares.',
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
        className={`${inter.className} bg-gradient-elegant min-h-screen text-slate-900`}
      >
        <LanguageProvider>
          <Navbar />
          <main className="pt-28 md:pt-32 pb-20">{children}</main>
          <SiteFooter />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  )
}
