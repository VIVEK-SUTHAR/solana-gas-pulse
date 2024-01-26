"use client"

import { useRouter } from "next/navigation"
import { APP_NAME } from "@/constants"

import ConnectButton from "./ConnectButton"
import Container from "./container"
import { ModeToggle } from "./mode-toggle"

export default function Navbar() {
  const router = useRouter()

  return (
    <Container>
      <div className="flex items-center justify-between rounded-full py-6">
        <div
          className="w-auto cursor-pointer text-lg font-semibold"
          onClick={() => router.push("/")}
        >
          {APP_NAME}
        </div>
        <div className="w-auto">
          <div className="flex flex-wrap items-center space-x-2">
            <div className={`w-auto ${!true ? "hidden" : "block"} lg:block`}>
              <ConnectButton />
            </div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </Container>
  )
}
