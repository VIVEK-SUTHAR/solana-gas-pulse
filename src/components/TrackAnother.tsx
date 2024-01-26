import React from "react"
import { useRouter } from "next/navigation"

import { Button } from "./ui/button"

function TrackAnother() {
  const router = useRouter()
  return (
    <Button
      variant={"outline"}
      className="w-full"
      onClick={() => router.back()}
    >
      Track another addresss 👀
    </Button>
  )
}

export default TrackAnother
