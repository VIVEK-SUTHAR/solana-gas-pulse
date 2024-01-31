"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { SOL_DOMAIN_POSTFIX } from "@/constants"
import Events from "@/constants/events"
import event from "@/utils/event"
import isValidSolanaAddress from "@/utils/validateAddress"
import { useWallet } from "@solana/wallet-adapter-react"
import { toast } from "sonner"

import { Button } from "./ui/button"
import { Input } from "./ui/input"

function WalletAddressInput() {
  const { wallet } = useWallet()
  const router = useRouter()
  const [solAddres, setSolAddres] = useState(
    wallet?.adapter.publicKey?.toString() || null
  )
  useEffect(() => {
    if (wallet?.adapter.connected) {
      setSolAddres(wallet?.adapter.publicKey?.toString() || null)
      void event(Events.WalletConnected)
    }
    wallet?.adapter.on("disconnect", () => {
      setSolAddres(null)
    })
    return () => {
      wallet?.adapter.removeListener("disconnect", () => {
        setSolAddres(null)
      })
    }
  }, [wallet?.adapter.connected])

  const goToAddressPage = () => {
    if (solAddres === null || solAddres === "") {
      return
    }
    if (solAddres.endsWith(SOL_DOMAIN_POSTFIX)) {
      router.push(`/address/${solAddres}`)
      return
    }

    if (!isValidSolanaAddress(solAddres)) {
      toast.error("Invalid Solana address", {
        style: {
          borderColor: "red",
        },
      })
      return
    }

    router.push(`/address/${solAddres}`)
  }

  const placeHolderText = wallet?.adapter.connected
    ? `${wallet.adapter.publicKey?.toString()}`
    : `Enter your wallet address or .sol domain`
  return (
    <div className="mt-16 flex justify-center gap-x-6 gap-y-4">
      <Input
        type="text"
        placeholder={placeHolderText}
        className="w-2/3"
        value={solAddres ?? ""}
        onChange={(e) => {
          e.preventDefault()
          setSolAddres(e.target.value)
        }}
      />
      <Button
        variant={"outline"}
        className="w-fit disabled:bg-gray-400"
        disabled={solAddres === null || solAddres === ""}
        onClick={goToAddressPage}
      >
        Search
      </Button>
    </div>
  )
}

export default WalletAddressInput
