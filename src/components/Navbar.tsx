"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { APP_NAME } from "@/constants"

import ConnectButton from "./ConnectButton"
import Container from "./container"
import { ModeToggle } from "./mode-toggle"
// import { HiOutlineMenuAlt4 } from "react-icons/hi";
// import { MdOutlineClose } from "react-icons/md";
// import ConnectButton from "./ConnectButton";
// import Container from "./ui/container";
// import { useWallet } from "@solana/wallet-adapter-react";
import { Button } from "./ui/button"

export default function Navbar() {
  const [isOpened, setIsOpened] = useState<boolean>(false)
  //   const { connected, disconnect } = useWallet();
  const router = useRouter()

  async function handleDisconnect() {
    // await disconnect();
    setIsOpened(false)
  }

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

            <div
              className={`w-auto ${true ? "hidden" : "block"} lg:hidden`}
              onClick={() => setIsOpened(true)}
            >
              {/* <HiOutlineMenuAlt4 className="h-6 w-6 cursor-pointer" /> */}
            </div>
          </div>
        </div>
      </div>
      <div
        className={` ${
          isOpened ? "block" : "hidden"
        } navbar-menu fixed bottom-0 left-0 top-0 z-50 w-full sm:max-w-xs`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
        <nav className="relative z-10 h-full overflow-y-auto bg-gray-800 px-9 pt-8">
          <div className="flex h-full flex-wrap justify-between">
            <div className="w-full">
              <div className="-m-2 flex items-center justify-between">
                <div className="w-auto p-2">
                  <a className="inline-block" href="#">
                    <img
                      src="https://shuffle.dev/zanrly-assets/logos/zanrly-logo-white.svg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-auto p-2" onClick={() => setIsOpened(false)}>
                  {/* <MdOutlineClose className="h-6 w-6 cursor-pointer" /> */}
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col justify-end pb-8">
              <ModeToggle />
              <Button
                className="w-full rounded-full bg-blue-600 px-4 py-6 text-center font-bold text-white hover:bg-blue-700"
                onClick={handleDisconnect}
              >
                Disconnect
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </Container>
  )
}
