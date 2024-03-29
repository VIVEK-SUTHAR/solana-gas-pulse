"use client"

import Image from "next/image"
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
          className="flex w-auto cursor-pointer items-center text-lg font-semibold"
          onClick={() => router.push("/")}
        >
          <Image
            src={"/logo.png"}
            alt="logo"
            height={48}
            width={48}
            className="hidden lg:block "
          />
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
