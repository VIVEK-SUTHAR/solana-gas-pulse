"use client"

import { FC, useState } from "react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js"

import Sol from "../icons/Sol"
import { Switch } from "../ui/switch"

type GasFeesProps = {
  totalGasSpent: number
}
enum FeesUnit {
  SOL = "Sol",
  Lamports = "Lamports",
}
const GasFee: FC<GasFeesProps> = ({ totalGasSpent }) => {
  const [feesUnit, setFeesUnit] = useState<FeesUnit>(FeesUnit.Lamports)

  const onCheckedChange = () => {
    if (feesUnit === FeesUnit.Lamports) {
      setFeesUnit(FeesUnit.SOL)
    } else {
      setFeesUnit(FeesUnit.Lamports)
    }
  }

  return (
    <div className="xs:space-x-2 flex items-center space-x-4 rounded-md border p-4">
      <Sol height={28} width={28} />
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium leading-none">
          {feesUnit === FeesUnit.Lamports
            ? totalGasSpent
            : totalGasSpent / LAMPORTS_PER_SOL}{" "}
          {feesUnit}
        </p>
        <p className="xs:text-xs text-sm text-muted-foreground">
          Gas spent in last 24 hours
        </p>
      </div>
      <Switch onCheckedChange={onCheckedChange} />
    </div>
  )
}

export default GasFee
