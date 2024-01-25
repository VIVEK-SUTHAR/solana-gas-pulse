import { PublicKey } from "@solana/web3.js"

function isValidSolanaAddress(address: string) {
  try {
    if (typeof address !== "string") {
      return false
    }
    const pubKey = new PublicKey(address)
    const isOnCurve = PublicKey.isOnCurve(pubKey.toBuffer())
    return isOnCurve
  } catch (error) {
    return false
  }
}
export default isValidSolanaAddress
