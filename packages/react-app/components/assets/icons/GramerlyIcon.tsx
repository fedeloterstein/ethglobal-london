import * as React from "react"
import { SVGProps } from "react"

export const GramerlyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M19.61 4.96c-3.91-3.91-10.26-3.91-14.17 0-3.98 3.98-3.91 10.47.2 14.37 3.8 3.59 9.96 3.59 13.76 0 4.12-3.9 4.19-10.39.21-14.37Zm-2.73 11.69c-1.2 1.14-2.78 1.71-4.36 1.71-1.58 0-3.16-.57-4.36-1.71a.755.755 0 0 1-.03-1.06c.29-.3.76-.31 1.06-.03 1.83 1.73 4.82 1.74 6.66 0 .3-.28.78-.27 1.06.03.29.3.27.77-.03 1.06Z"
    />
  </svg>
)

