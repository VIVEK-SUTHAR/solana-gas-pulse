import React from "react"
import { Twitter } from "lucide-react"

import { Button } from "./ui/button"

const TweetText = `Wanna know how much gas you have spent on Solana? Check out this tool by @theviveksuthar \n https://gaspulse.devvivek.tech/`

function ShareButton() {
  return (
    <Button variant={"outline"} className="w-full">
      <Twitter className="mr-2 h-4 w-4" />
      <a
        href={`https://twitter.com/intent/tweet?text= + ${encodeURIComponent(TweetText)}`}
        target="_blank"
      >
        Share with friend
      </a>
    </Button>
  )
}

export default React.memo(ShareButton)
