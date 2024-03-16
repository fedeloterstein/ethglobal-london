import * as React from "react"
import { SVGProps } from "react"
export const ContractIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={27}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M23.625 7.875v11.25c0 3.375-1.688 5.625-5.625 5.625H9c-3.938 0-5.625-2.25-5.625-5.625V7.875C3.375 4.5 5.063 2.25 9 2.25h9c3.938 0 5.625 2.25 5.625 5.625Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M16.313 5.063v2.25a2.257 2.257 0 0 0 2.25 2.25h2.25M9 14.625h4.5m-4.5 4.5h9"
    />
  </svg>
)

