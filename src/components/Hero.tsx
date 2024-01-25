import React from "react"
import { APP_DESCRIPTION, APP_NAME } from "@/constants"

import Container from "./container"
import WalletAddressInput from "./WalletAddressInput"

function Hero() {
  return (
    <Container>
      <div className="flex h-[calc(100vh-88px)] items-center justify-center">
        <div className="mx-auto text-center lg:w-2/3">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white md:text-6xl xl:text-7xl">
            {APP_NAME}{" "}
          </h1>
          <p className="mt-8 text-gray-700 dark:text-gray-300">
            {APP_DESCRIPTION}
          </p>
          <WalletAddressInput />
        </div>
      </div>
    </Container>
  )
}

export default Hero
