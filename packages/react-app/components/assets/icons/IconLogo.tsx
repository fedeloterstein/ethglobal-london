import * as React from "react";
import { SVGProps } from "react";

export const IconLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    {...props}
  >
    <rect
      width={34}
      height={34}
      y={34}
      fill="#000"
      rx={8}
      transform="rotate(-90 0 34)"
    />
    <path
      fill="#fff"
      stroke="url(#a)"
      strokeWidth={1.2}
      d="M7.605 10.11v-.373A2.106 2.106 0 0 1 9.709 7.63l13.702-.024a2.106 2.106 0 0 1 2.112 2.101v.372a2.106 2.106 0 0 1-2.104 2.109l-13.702.024a2.106 2.106 0 0 1-2.112-2.102Z"
    />
    <path
      fill="#fff"
      stroke="url(#b)"
      strokeWidth={1.2}
      d="m7.615 24.263-.001-.337a2.137 2.137 0 0 1 2.135-2.14l13.632-.023a2.137 2.137 0 0 1 2.142 2.132v.337a2.138 2.138 0 0 1-2.134 2.14l-13.632.023a2.137 2.137 0 0 1-2.142-2.132Z"
    />
    <path
      fill="#fff"
      stroke="url(#c)"
      strokeWidth={1.2}
      d="M16.613 14.66a2.332 2.332 0 0 1 2.334 2.331 2.332 2.332 0 0 1-2.334 2.33 2.332 2.332 0 0 1-2.334-2.33 2.332 2.332 0 0 1 2.334-2.33Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={7.005}
        x2={26.123}
        y1={9.924}
        y2={9.891}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BD36CD" />
        <stop offset={0.495} stopColor="#76A6BE" />
        <stop offset={1} stopColor="#00CBFE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={7.014}
        x2={26.123}
        y1={24.096}
        y2={24.062}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BD36CD" />
        <stop offset={0.495} stopColor="#76A6BE" />
        <stop offset={1} stopColor="#00CBFE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={13.679}
        x2={19.547}
        y1={16.991}
        y2={16.991}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BD36CD" />
        <stop offset={0.495} stopColor="#76A6BE" />
        <stop offset={1} stopColor="#00CBFE" />
      </linearGradient>
    </defs>
  </svg>
);
