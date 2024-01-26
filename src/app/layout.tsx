import "@/styles/globals.css"
import "@solana/wallet-adapter-react-ui/styles.css"

import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import SolanaProvider from "@/providers/SolanaProvider"
import { ThemeProvider } from "@/providers/ThemeProvider"
import { Analytics } from "@vercel/analytics/react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"
import BgGradinet from "@/components/BgGradinet"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url.base),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url.author,
    },
  ],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url.base,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@theviveksuthar",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen overflow-hidden bg-background antialiased",
          inter.className
        )}
      >
        <SolanaProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            {children}
            <Analytics />
            <Footer />
            <BgGradinet />
            <Toaster />
          </ThemeProvider>
        </SolanaProvider>
      </body>
    </html>
  )
}
