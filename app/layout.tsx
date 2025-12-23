import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Porygon',
  description: 'We build websites that turn visitors into paying customers. Strategic design, SEO, and development.',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Porygon',
    description: 'We build websites that turn visitors into paying customers. Strategic design, SEO, and development.',
    url: 'https://porygonsol.com',
    siteName: 'Porygon',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: 'Porygon - Web Development Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Porygon',
    description: 'We build websites that turn visitors into paying customers. Strategic design, SEO, and development.',
    images: ['/icon.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" />
        <script async src="https://app.cal.com/embed/embed.js"></script>
      </head>
      <body className="bg-black text-[#d7df23]" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '1rem' }}>
        {children}
      </body>
    </html>
  )
}
