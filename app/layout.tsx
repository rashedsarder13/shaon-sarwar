import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Orbitron } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// <CHANGE> Modern futuristic fonts for the portfolio
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
})

export const metadata: Metadata = {
  title: "Shaon Sarwar - Digital Marketing Specialist",
  description:
    "Expert in Google Ads, Facebook Ads, and SEO strategies. Drive qualified traffic and increase conversions.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${orbitron.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
