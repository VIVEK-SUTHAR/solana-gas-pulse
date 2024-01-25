const SOLANA_RPC_URL = process.env.SOLANA_RPC_URL!

export async function POST(request: Request) {
  try {
    const { signature } = await request.json()

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 1,
        jsonrpc: "2.0",
        method: "getTransaction",
        params: [signature, { maxSupportedTransactionVersion: 0 }],
      }),
    }
    const rawTxnInfo = await fetch(SOLANA_RPC_URL, options)
    const txnJson = await rawTxnInfo.json()
    return Response.json(txnJson.result)
  } catch (e) {
    return Response.json({ error: e })
  }
}
