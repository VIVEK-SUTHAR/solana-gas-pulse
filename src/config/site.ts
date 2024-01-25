import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "GasPulse - Solana Gas Tracker",
  author: "Vivek S",
  description: "Track how much gas you've spent on Solana in last 24 hours",
  keywords: [
    "solana",
    "solana gas tracker",
    "solana blockchain gas",
    "solana gas tracker wallet",
  ],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://devvivek.tech",
  },
  links: {
    github: "https://github.com/VIVEK-SUTHAR/next-entree",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
