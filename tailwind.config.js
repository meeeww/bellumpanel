/* eslint-disable no-undef */
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#14506a",
            },
            danger: {
              DEFAULT: "#E40013",
            },
            focus: "#00B3FF",
          },
        },
        light: {
          colors: {
            primary: {
              DEFAULT: "#14506a",
            },
            danger: {
              DEFAULT: "#E40013",
            },
            focus: "#00B3FF",
          },
        },
      },
    }),
  ],
};
