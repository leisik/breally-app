'use client'
import './globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <head>
          <title>breally</title>
          <meta name="description" content="Recruitment task for Adchitects" />
        </head>
        <body
          className={`${inter.variable} font-inter antialiased tracking-wide`}
        >
          <div className="flex flex-col min-h-screen overflow-hidden bg-backgroundPrimary">
            {children}
          </div>
          <ReactQueryDevtools initialIsOpen={false} />
        </body>
      </QueryClientProvider>
    </html>
  )
}
