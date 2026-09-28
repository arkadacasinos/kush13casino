import type { Metadata, Viewport } from 'next'
import './globals.css'

const KZ13_ORIGIN = 'https://kush13casino.vercel.app'

const KZ13_TITLE =
  'Kush Casino официальный сайт — Куш Казино онлайн: играть, рабочее зеркало входа.'

const KZ13_DESCRIPTION =
  'Kush Casino официальный сайт: куш казино онлайн без лишних переходов. Как зайти, где взять kush casino зеркало, рабочее ли куш казино зеркало, как начать играть и что проверить до своей первой ставки.'

const KZ13_KEYS = [
  'kush casino',
  'kush casino официальный сайт',
  'kush casino официальный',
  'куш казино официальный сайт',
  'куш казино официальный',
  'куш казино',
  'kush casino зеркало',
  'kush casino играть',
  'куш казино зеркало рабочее',
  'куш казино играть',
  'куш казино онлайн',
  'куш казино зеркало',
  'kush kazino',
]

export const metadata: Metadata = {
  metadataBase: new URL(KZ13_ORIGIN),
  title: KZ13_TITLE,
  description: KZ13_DESCRIPTION,
  keywords: KZ13_KEYS,
  authors: [{ name: 'Kush Casino' }],
  creator: 'Kush Casino',
  publisher: 'Kush Casino',
  category: 'games',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': '-1',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: '/',
    siteName: 'Kush Casino',
    title: KZ13_TITLE,
    description: KZ13_DESCRIPTION,
    images: [
      {
        url: '/art/kz13-hero.png',
        width: 1024,
        height: 1024,
        alt: 'Kush Casino: фишки и карты на зелёном сукне',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: KZ13_TITLE,
    description: KZ13_DESCRIPTION,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0c2f27',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="kz13-root">
      <head>
        <meta name="yandex-verification" content="727bf9b625cf715e" />
        {/* Слот для дополнительных пользовательских тегов: вставляйте свои meta/link сюда */}
        <meta name="author" content="Kush Casino" />
        <meta name="classification" content="online casino overview" />
        <meta name="coverage" content="Worldwide" />
      </head>
      <body className="kz13-body">{children}</body>
    </html>
  )
}
