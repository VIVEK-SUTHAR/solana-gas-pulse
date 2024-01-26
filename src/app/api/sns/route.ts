const SOLANA_SNS_RPC_URL = process.env.SOLANA_SNS_RPC_URL!

export async function POST(request: Request) {
  try {
    const { domain } = await request.json()

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 1,
        jsonrpc: "2.0",
        method: "sns_resolveDomain",
        params: [domain],
      }),
    }
    const response = await fetch(SOLANA_SNS_RPC_URL, options)
    const txnJson = await response.json()
    console.log("txnJson", txnJson)

    return Response.json(txnJson.result)
  } catch (e) {
    return Response.json({ error: e })
  }
}
