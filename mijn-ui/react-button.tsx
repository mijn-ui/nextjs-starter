import * as React from "react"
import { UnstyledProps, applyUnstyled } from "@mijn-ui/react-utilities/shared"
import { LoaderCircleIcon } from "@mijn-ui/shared-icons"
import { Slot, Slottable } from "@radix-ui/react-slot"
import { type VariantProps, cva } from "class-variance-authority"

const buttonStyles = cva(
  [
    "inline-flex items-center justify-center gap-1 text-sm transition-colors duration-200 ease-in-out active:brightness-90 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75",
  ],
  {
    variants: {
      color: {
        primary: "",
        secondary: "",
        accent: "",
        muted: "",
        danger: "",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
      size: {
        sm: "h-9 px-3",
        md: "h-10 px-3",
        lg: "h-11 px-8",
        icon: "size-10",
      },
      variant: {
        filled: "",
        outline: "border border-current",
        text: "",
      },
    },
    compoundVariants: [
      {
        color: "primary",
        variant: "outline",
        className:
          "border-primary text-primary hover:bg-primary hover:text-primary-text border",
      },
      {
        color: "secondary",
        variant: "outline",
        className:
          "border-secondary text-secondary-text dark:text-secondary hover:bg-secondary dark:hover:text-secondary-text border",
      },
      {
        color: "accent",
        variant: "outline",
        className:
          "border-main-border text-accent-text hover:bg-accent hover:text-accent-text border",
      },
      {
        color: "muted",
        variant: "outline",
        className:
          "border-muted text-muted-text hover:bg-muted hover:text-muted-text border",
      },
      {
        color: "danger",
        variant: "outline",
        className:
          "border-danger text-danger hover:bg-danger hover:text-danger-filled-text border",
      },

      {
        color: "primary",
        variant: "text",
        className: "text-primary hover:bg-primary hover:text-primary-text",
      },
      {
        color: "secondary",
        variant: "text",
        className:
          "text-secondary-text dark:text-secondary hover:bg-secondary dark:hover:text-secondary-text",
      },
      {
        color: "danger",
        variant: "text",
        className: "text-danger hover:bg-danger hover:text-danger-filled-text",
      },
      {
        color: "accent",
        variant: "text",
        className: "text-accent-text hover:bg-accent",
      },
      {
        color: "muted",
        variant: "text",
        className: "text-muted-text hover:bg-muted",
      },

      {
        color: "primary",
        variant: "filled",
        className: "bg-primary text-primary-text hover:bg-primary/90",
      },
      {
        color: "secondary",
        variant: "filled",
        className: "bg-secondary text-secondary-text hover:bg-secondary/90",
      },
      {
        color: "danger",
        variant: "filled",
        className: "bg-danger text-danger-filled-text hover:bg-danger/80",
      },
      {
        color: "accent",
        variant: "filled",
        className: "bg-accent text-accent-text hover:bg-accent/80",
      },
      {
        color: "muted",
        variant: "filled",
        className: "bg-muted text-muted-text hover:bg-muted/80",
      },
    ],
    defaultVariants: {
      variant: "filled",
      color: "primary",
      radius: "md",
      size: "md",
    },
  },
)

export type ButtonProps = React.ComponentPropsWithRef<"button"> &
  VariantProps<typeof buttonStyles> & {
    asChild?: boolean
    loading?: boolean
  } & UnstyledProps

const Button = ({
  unstyled,
  className,
  color,
  variant,
  size,
  radius,
  loading,
  disabled,
  asChild = false,
  children,
  ...props
}: ButtonProps) => {
  const Component = asChild ? Slot : "button"

  return (
    <Component
      className={applyUnstyled(
        unstyled,
        buttonStyles({ color, variant, size, radius }),
        className,
      )}
      disabled={loading || disabled}
      {...props}
    >
      {loading && (
        <LoaderCircleIcon
          className={applyUnstyled(
            unstyled,
            "mr-2 h-5 w-5 animate-spin text-current",
          )}
        />
      )}
      <Slottable>{loading ? "Loading..." : children}</Slottable>
    </Component>
  )
}

export { Button, buttonStyles }
