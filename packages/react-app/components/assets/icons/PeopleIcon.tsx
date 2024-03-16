import * as React from "react"
import { SVGProps } from "react"

export const PeopleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M13 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM16 18v-3a5.972 5.972 0 0 0-.75-2.906A3.007 3.007 0 0 1 19 15v3h-3ZM4.75 12.094A5.973 5.973 0 0 0 4 15v3H1v-3a3 3 0 0 1 3.75-2.906Z"
    />
    <rect width={8} height={7} x={6} y={11} fill="#fff" rx={3} />
  </svg>
)

