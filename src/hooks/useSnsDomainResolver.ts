import React from "react"

function useSnsDomainResolver() {
  const resolveAddressFromDomain = async (domainToResolve: string) => {
    const resolvedAddress = await fetch("/api/sns", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        domain: domainToResolve,
      }),
    })
    const jsonData = await resolvedAddress.json()
    return jsonData
  }

  return { resolveAddressFromDomain }
}

export default useSnsDomainResolver
