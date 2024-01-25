"use client"

import { FC, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useWallet } from "@solana/wallet-adapter-react"

import useTotalSpentOnGas from "@/hooks/useTotalSpentOnGas"

import GasDetails from "./DetailsCard"
import DetailsSkleton from "./DetailsSkleton"

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
  if (status === "loading") {
    return <DetailsSkleton />
  }
  if (status === "error") {
    return <DetailsSkleton />
  }
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
