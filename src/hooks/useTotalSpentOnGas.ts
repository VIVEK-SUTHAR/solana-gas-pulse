import React, { useState } from "react"
import isWithin24Hours from "@/utils/isWithin24Hours"

import useTransactionAPI from "./useTransaction"

const initialDetailsState = {
  totalGasSpent: 0,
  totalTransactions: 0,
}
function useTotalSpentOnGas(address: string) {
  const [status, setStatus] = useState("loading")
  const [gasDetails, setGasDetails] = useState(initialDetailsState)

  const { getTransaction, getRecentTransactions } = useTransactionAPI()

  React.useEffect(() => {
    const singleTxnAbortController = new AbortController()
    const recentTxnsAbortController = new AbortController()

    const getTotalGasSpent = async (signatureArray: Array<string>) => {
      let totalGasSpent = 0

      for (const signature of signatureArray) {
        const transactionDetails = await getTransaction(
          signature,
          singleTxnAbortController
        )
        if (
          transactionDetails &&
          transactionDetails.meta &&
          transactionDetails.meta.fee
        ) {
          totalGasSpent += transactionDetails.meta.fee
        }
      }
      return totalGasSpent
    }

    const calculateGasInLast24Hours = async () => {
      try {
        const recentTransactions = await getRecentTransactions(
          address,
          recentTxnsAbortController
        )

        if (!recentTransactions) return

        if (recentTransactions && recentTransactions.length === 0) {
          setGasDetails((p) => ({ ...p, totalTransactions: 0 }))
          setStatus("done")
          return
        }

        const last24HoursTxns = recentTransactions.filter((txn) =>
          isWithin24Hours(txn.blockTime ?? 0)
        )
        if (last24HoursTxns.length === 0) {
          setGasDetails((p) => ({ ...p, totalTransactions: 0 }))
          setStatus("done")
          return
        }
        setGasDetails((p) => ({
          ...p,
          totalTransactions: last24HoursTxns.length,
        }))

        const totalFee = await getTotalGasSpent(
          last24HoursTxns.map((txn) => txn.signature)
        )

        setGasDetails((p) => ({ ...p, totalGasSpent: totalFee }))

        setStatus("done")
      } catch (error) {
        setStatus("error")
      }
    }
    calculateGasInLast24Hours()

    return () => {
      singleTxnAbortController.abort()
      recentTxnsAbortController.abort()
    }
  }, [])

  return { status, gasDetails }
}

export default useTotalSpentOnGas
