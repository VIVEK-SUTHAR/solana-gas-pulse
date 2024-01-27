import { SOL_DOMAIN_POSTFIX } from "@/constants"
import isWithin24Hours from "@/utils/isWithin24Hours"
import React, { useState } from "react"

import useSnsDomainResolver from "./useSnsDomainResolver"
import useTransactionAPI from "./useTransaction"

const initialDetailsState = {
  totalGasSpent: 0,
  totalTransactions: 0,
}
type Status =
  | "loading"
  | "done"
  | "unknown-error"
  | "no-txns"
  | "invalid-domain"

function useTotalSpentOnGas(inputAddress: string) {
  const [status, setStatus] = useState<Status>("loading")
  const [gasDetails, setGasDetails] = useState(initialDetailsState)

  const { getTransaction, getRecentTransactions } = useTransactionAPI()
  const { resolveAddressFromDomain } = useSnsDomainResolver()

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

    const calculateGasInLast24Hours = async (
      solAddress: string,
      isSolDomain: boolean = false
    ) => {
      try {
        if (isSolDomain) {
          const resolvedAddress = await resolveAddressFromDomain(solAddress)
          if (resolvedAddress === null) {
            setStatus("invalid-domain")
            return
          }
          if (resolvedAddress) {
            solAddress = resolvedAddress
          }
        }

        const recentTransactions = await getRecentTransactions(
          solAddress,
          recentTxnsAbortController
        )

        if (!recentTransactions) {
          setStatus("unknown-error")
          return
        }

        if (recentTransactions && recentTransactions.length === 0) {
          setGasDetails((p) => ({ ...p, totalTransactions: 0 }))
          setStatus("no-txns")
          return
        }

        const last24HoursTxns = recentTransactions.filter((txn) =>
          isWithin24Hours(txn.blockTime ?? 0)
        )
        if (last24HoursTxns.length === 0) {
          setGasDetails((p) => ({ ...p, totalTransactions: 0 }))
          setStatus("no-txns")
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
        setStatus("unknown-error")
      }
    }

    if (inputAddress.endsWith(SOL_DOMAIN_POSTFIX)) {
      calculateGasInLast24Hours(inputAddress, true)
    } else {
      calculateGasInLast24Hours(inputAddress, false)
    }

    return () => {
      singleTxnAbortController.abort()
      recentTxnsAbortController.abort()
    }
  }, [])

  return { status, gasDetails }
}

export default useTotalSpentOnGas
