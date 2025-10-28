import type { Metadata } from 'next'
import { Quicksand, Mulish } from 'next/font/google'
import './globals.css'
import ClientBody from './ClientBody'
import { ThemeProvider } from './components/ThemeProvider'
// import { ThemeProvider } from './components/ThemeProvider'

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
})

const mulish = Mulish({
  subsets: ['latin'],
  variable: '--font-mulish',
})

export const metadata: Metadata = {
  title: 'Frontend Developer Portfolio | Interactive & Animated',
  description: 'A modern, interactive portfolio showcasing frontend development skills with smooth animations and engaging user experience.',
  keywords: 'frontend developer, portfolio, react, nextjs, animations, interactive design',
  authors: [{ name: 'Frontend Developer' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${quicksand.variable} ${mulish.variable}`} suppressHydrationWarning>
      <ClientBody>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </ClientBody>
    </html>
  )
}
