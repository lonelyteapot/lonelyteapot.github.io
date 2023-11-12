/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#29c785",
        canvas: "#1f1f1f",
        card: "#282828",

        // "primary-color": "#29c785",
        // "secondary-color": "#29c785",
        // "background-color": "#222222",
        // "background-color-opaque": "#222222ee",
        // "canvas-color": "#222222",
        // "color-on-primary": "#232729",
        // "color-on-secondary": "#ffffff",
        // "color-on-background": "#ffffff",
        // "color-on-canvas": "#ffffff",
      },
      screens: {
        hbp: "480px",
      },
      fontFamily: {
        primary: ["Montserrat", ...defaultTheme.fontFamily.sans],
        secondary: ["Work Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
