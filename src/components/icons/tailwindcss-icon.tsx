import { IconSvgProps } from "./type"

export function TailwindCssIcon(props: IconSvgProps) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
      className="size-full"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 4.86c-3.174 0-5.157 1.587-5.95 4.76 1.19-1.587 2.578-2.182 4.165-1.785.905.226 1.552.883 2.268 1.61C13.651 10.63 15 12 17.95 12c3.173 0 5.156-1.587 5.95-4.76-1.19 1.587-2.579 2.182-4.165 1.785-.906-.226-1.552-.883-2.27-1.61C16.3 6.23 14.95 4.86 12 4.86zM6.05 12C2.876 12 .893 13.587.1 16.76c1.19-1.587 2.578-2.182 4.165-1.785.905.226 1.552.883 2.269 1.61C7.7 17.77 9.05 19.14 12 19.14c3.173 0 5.156-1.587 5.95-4.76-1.19 1.587-2.579 2.182-4.165 1.785-.906-.226-1.552-.883-2.27-1.61C10.35 13.37 9 12 6.05 12z"
        stroke="none"
      />
    </svg>
  )
}
