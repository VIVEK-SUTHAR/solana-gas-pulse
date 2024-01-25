import React from "react"

function BgGradinet() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 grid grid-cols-2 -space-x-52 opacity-20"
    >
      <div className="h-56 bg-gradient-to-br from-blue-700 to-purple-400 blur-[100px]"></div>
      <div className="h-32 bg-gradient-to-r from-[#14F195] to-[#9945FF] blur-[100px]"></div>
    </div>
  )
}

export default BgGradinet
