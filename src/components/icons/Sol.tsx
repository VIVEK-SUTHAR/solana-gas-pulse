import * as React from "react"
import { memo, SVGProps } from "react"

const SOL = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 64 64"
    {...props}
  >
    <linearGradient
      id="a"
      x1={32}
      x2={32}
      y1={17.936}
      y2={43.068}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#6dc7ff" />
      <stop offset={1} stopColor="#e6abff" />
    </linearGradient>
    <path
      fill="url(#a)"
      d="M41.806 25H17.032l5.161-6h24.774l-5.161 6zM17.032 45h24.774l5.161-6H22.194l-5.162 6zm0-16 5.161 6h24.774l-5.161-6H17.032z"
    />
    <linearGradient
      id="b"
      x1={32}
      x2={32}
      y1={8.553}
      y2={55.331}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#1a6dff" />
      <stop offset={1} stopColor="#c822ff" />
    </linearGradient>
    <path
      fill="url(#b)"
      d="M32 58C17.663 58 6 46.337 6 32 6 17.664 17.663 6 32 6s26 11.664 26 26c0 14.337-11.663 26-26 26zm0-50C18.767 8 8 18.767 8 32s10.767 24 24 24 24-10.767 24-24S45.233 8 32 8z"
    />
  </svg>
)

export default memo(SOL)
