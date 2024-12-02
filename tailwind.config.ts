import { mijnUiPreset } from "@mijn-ui/react-theme"

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./mijn-ui/**/*.{js,ts,jsx,tsx}"],
  presets: [mijnUiPreset],
}
