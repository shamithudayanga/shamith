import type { Metadata } from 'next'
import { Space_Grotesk, Outfit } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Shamith Udayanga | Portfolio',
  description: 'Full Stack Software Developer & Ethical Hacker Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${spaceGrotesk.variable} font-outfit antialiased`}>
        {children}
      </body>
    </html>
  )
}
