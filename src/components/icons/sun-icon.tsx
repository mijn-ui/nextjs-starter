import { IconSvgProps } from "./type"

export function SunIcon(props: IconSvgProps) {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth={2}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={12} cy={12} r={5} />
      <path d="M12 1L12 3" />
      <path d="M12 21L12 23" />
      <path d="M4.22 4.22L5.64 5.64" />
      <path d="M18.36 18.36L19.78 19.78" />
      <path d="M1 12L3 12" />
      <path d="M21 12L23 12" />
      <path d="M4.22 19.78L5.64 18.36" />
      <path d="M18.36 5.64L19.78 4.22" />
    </svg>
  )
}
