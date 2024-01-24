import "@/styles/globals.css"
import "@solana/wallet-adapter-react-ui/styles.css"

import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import SolanaProvider from "@/providers/SolanaProvider"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import Navbar from "@/components/Navbar"
import { ThemeProvider } from "@/components/theme-provider"

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
    creator: "@_rdev7",
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
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            // disableTransitionOnChange
          >
            <Navbar />
            {/* <ModeToggle /> */}
            {children}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 grid grid-cols-2 -space-x-52 opacity-20"
            >
              <div className="h-56 bg-gradient-to-br from-blue-700 to-purple-400 blur-[106px]"></div>
              <div className="h-32 bg-gradient-to-r from-cyan-400 to-indigo-600 blur-[106px]"></div>
            </div>
          </ThemeProvider>
        </SolanaProvider>
      </body>
    </html>
  )
}
