"use client"

import { useEffect, useState } from "react"
import { Button, ButtonProps } from "@mijn-ui/react-button"
import { MoonIcon, SunIcon } from "@/components/icons"
import { useTheme } from "next-themes"

/* -------------------------------------------------------------------------- */

const ThemeToggler = ({ ...props }: ButtonProps) => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return

  if (resolvedTheme === "dark") {
    return (
      <Button onClick={() => setTheme("light")} {...props}>
        <SunIcon />
      </Button>
    )
  }
  if (resolvedTheme === "light") {
    return (
      <Button onClick={() => setTheme("dark")} {...props}>
        <MoonIcon />
      </Button>
    )
  }
}

export default ThemeToggler
