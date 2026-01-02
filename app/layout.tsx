import type React from "react"
import type { Metadata } from "next"
import { Instrument_Sans, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const instrumentSans = Instrument_Sans({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// Updated metadata for Cogensec CAASF
export const metadata: Metadata = {
  title: "CAASF | Cogensec AI Agent Security Framework",
  description:
    "The world's first comprehensive security framework for autonomous AI agents. Protect your AI systems with enterprise-grade security.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${instrumentSans.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
