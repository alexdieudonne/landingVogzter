import * as React from "react"

function CurbArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={775}
      height={575}
      viewBox="0 0 775 575"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#prefix__filter0_d)">
        <path
          d="M34.5 2.5C-28 129.5 6.293 629.669 219.495 518.696 485.997 379.981 388.496-37.571 575.498 66.466 762.499 170.502 807.5 483 737.5 565.5"
          stroke="#fff"
          strokeWidth={4}
        />
      </g>
      <g filter="url(#prefix__filter1_d)">
        <path
          d="M16 4.5L35.5 2 43 14.5"
          stroke="#fff"
          strokeWidth={4}
          strokeLinejoin="round"
        />
      </g>
      <path
        d="M756.606 561.978l-19.29 3.793L729 553.799"
        stroke="#fff"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="prefix__filter0_d"
          x={0.546}
          y={1.617}
          width={774.187}
          height={573.177}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter
          id="prefix__filter1_d"
          x={11.746}
          y={0}
          width={36.969}
          height={23.529}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

export default CurbArrow
