import React from "react"
import { ConfirmedSignatureInfo, TransactionResponse } from "@solana/web3.js"

function useTransactionAPI() {
  const commonHeaders = {
    "Content-Type": "application/json",
  }

  const getTransaction = React.useCallback(
    async (txSignature: string, abortController: AbortController) => {
      try {
        const transaction = await fetch("/api/transaction", {
          method: "POST",
          headers: commonHeaders,
          body: JSON.stringify({
            signature: txSignature,
          }),
          signal: abortController.signal,
          cache: "force-cache",
          next: {
            revalidate: 3600,
          },
        })

        if (!transaction.ok) {
          throw new Error(
            `Failed to fetch transaction. Status: ${transaction.status}`
          )
        }
        const jsonTransaction: TransactionResponse = await transaction.json()
        return jsonTransaction
      } catch (error) {
        console.error("Error fetching transaction:", error)
        throw new Error("Failed to fetch transaction.")
      }
    },
    []
  )

  const getRecentTransactions = React.useCallback(
    async (address: string, abortController: AbortController) => {
      try {
        const signatures = await fetch("/api/recentTxns", {
          method: "POST",
          headers: commonHeaders,
          body: JSON.stringify({
            solAddress: address,
          }),
          cache: "force-cache",
          next: {
            revalidate: 3600,
          },
          signal: abortController.signal,
        })
        const jsonSignatures: Array<ConfirmedSignatureInfo> =
          await signatures.json()
        return jsonSignatures
      } catch (error) {
        console.error("Error fetching transactions:", error)
        throw new Error("Failed to fetch transactioa")
      }
    },
    []
  )

  return { getTransaction, getRecentTransactions }
}

export default useTransactionAPI
