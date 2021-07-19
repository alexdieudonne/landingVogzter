import * as React from "react"

function Down(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={77}
      height={78}
      viewBox="0 0 77 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#prefix__filter0_d)">
        <path
          d="M17 33.25l19.915 12.081a3 3 0 003.137-.015L59.5 33.25"
          stroke="#fff"
          strokeWidth={7}
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d"
          x={0.007}
          y={0.847}
          width={76.467}
          height={76.467}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={7} />
          <feColorMatrix values="0 0 0 0 0.298958 0 0 0 0 0.328391 0 0 0 0 0.875 0 0 0 1 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

export default Down