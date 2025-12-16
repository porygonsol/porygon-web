import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Porygon Welcome',
  description: 'We build websites that turn visitors into paying customers. Strategic design, SEO, and development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" />
        <script async src="https://app.cal.com/embed/embed.js"></script>
      </head>
      <body className="bg-black text-[#d7df23]" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '1rem' }}>
        {children}
      </body>
    </html>
  )
}
