"use client"

import React from "react"
import shortenAddress from "@/utils/shortenAddress"
import { useWallet } from "@solana/wallet-adapter-react"
import { useWalletModal } from "@solana/wallet-adapter-react-ui"
import { FiLogOut } from "react-icons/fi"
import { IoIosArrowDown } from "react-icons/io"

import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

export default function ConnectButton() {
  const { connected, publicKey, disconnect } = useWallet()
  const { setVisible } = useWalletModal()

  return (
    <>
      {connected ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button>
              {shortenAddress(publicKey?.toString()!) || ""}
              <IoIosArrowDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-52 p-2">
            <DropdownMenuItem
              className="cursor-pointer gap-2 p-3 font-medium"
              onClick={disconnect}
            >
              <FiLogOut />
              Disconnect
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button
          onClick={() => {
            setVisible(true)
          }}
        >
          Connect wallet
        </Button>
      )}
    </>
  )
}
