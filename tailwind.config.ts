import { mijnUiPreset } from "@mijn-ui/react-theme"

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@mijn-ui/**/dist/*.js",
  ],
  presets: [mijnUiPreset],
}
