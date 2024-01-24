"use client"

import React from "react"
import { APP_DESCRIPTION, APP_NAME } from "@/constants"
import { useWallet } from "@solana/wallet-adapter-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Container from "@/components/container"

export default function Home() {
  const { wallet } = useWallet()
  return (
    <Container>
      <div className="flex h-[calc(100vh-88px)] items-center justify-center">
        <div className="mx-auto text-center lg:w-2/3">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white md:text-6xl xl:text-7xl">
            {APP_NAME}{" "}
          </h1>
          <p className="mt-8 text-gray-700 dark:text-gray-300">
            {APP_DESCRIPTION}
          </p>
          <div className="mt-16 flex justify-center gap-x-6 gap-y-4">
            <Input
              type="text"
              placeholder={
                wallet
                  ? `${wallet.adapter.publicKey?.toString()}`
                  : `Enter your wallet address`
              }
              className="w-2/3"
            />
            <Button className="w-fit">Search</Button>
          </div>
        </div>
      </div>
    </Container>
  )
}
