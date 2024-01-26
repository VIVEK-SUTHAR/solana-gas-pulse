const SOLANA_RPC_URL = process.env.SOLANA_RPC_URL!

export async function POST(request: Request) {
  try {
    const { solAddress } = await request.json()

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 1,
        jsonrpc: "2.0",
        method: "getSignaturesForAddress",
        params: [solAddress],
      }),
    }
    const allTxns = await fetch(SOLANA_RPC_URL, options)

    const txnsJson = await allTxns.json()

    return Response.json(txnsJson.result)
  } catch (e) {
    console.log(e, "error")
  }
}
