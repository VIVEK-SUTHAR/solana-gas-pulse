"use client"

import { FC, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useWallet } from "@solana/wallet-adapter-react"

import useTotalSpentOnGas from "@/hooks/useTotalSpentOnGas"

import GasDetails from "./Cards/DetailsCard"
import DetailsError from "./DetailsError"
import DetailsSkleton from "./DetailsSkleton"

export type CustomError = {
  title: string
  message: string
}
const CustomErrors = {
  NoTxns: {
    title: "No Transactions Found 😔 ",
    message: "Looks like this address has no transactions yet.",
  },
  UnknownError: {
    title: "Failed to track address 🥲",
    message: "Looks like my code is not smart enough to track the address.",
  },
  InvalidDomain: {
    title: "Invalid Domain 🥲",
    message: "Looks like you entered an invalid domain.",
  },
}
type Props = {
  address: string
}
const Transactions: FC<Props> = ({ address }) => {
  const { wallet } = useWallet()
  const { gasDetails, status } = useTotalSpentOnGas(address)
  const router = useRouter()
  useEffect(() => {
    wallet?.adapter.addListener("disconnect", () => {
      router.push("/")
    })
  }, [wallet?.adapter?.disconnect, router])
  if (status === "loading") return <DetailsSkleton />
  if (status === "no-txns") return <DetailsError error={CustomErrors.NoTxns} />
  if (status === "unknown-error")
    return <DetailsError error={CustomErrors.UnknownError} />
  if (status === "invalid-domain")
    return <DetailsError error={CustomErrors.InvalidDomain} />
  if (status === "done") {
    return (
      <GasDetails
        totalGasSpent={gasDetails.totalGasSpent}
        totalTransactions={gasDetails.totalTransactions}
      />
    )
  }
}

export default Transactions
