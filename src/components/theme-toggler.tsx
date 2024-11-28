"use client"

import { useEffect, useState } from "react"
import { Button, ButtonProps } from "@mijn-ui/react-button"
import { useTheme } from "next-themes"
import { FiMoon, FiSun } from "react-icons/fi"

/* -------------------------------------------------------------------------- */

const ThemeToggler = ({ ...props }: ButtonProps) => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return

  if (resolvedTheme === "dark") {
    return (
      <Button onClick={() => setTheme("light")} {...props}>
        <FiSun />
      </Button>
    )
  }
  if (resolvedTheme === "light") {
    return (
      <Button onClick={() => setTheme("dark")} {...props}>
        <FiMoon />
      </Button>
    )
  }
}

export default ThemeToggler
