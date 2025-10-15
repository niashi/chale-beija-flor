import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FEF7FF",
        orchid: "#7C3AED",
        plum: "#A78BFA",
        wood: "#8B5E3C",
        forest: "#166534",
      },
      fontFamily: {
        sans: ['"Quicksand"', "sans-serif"],
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.50rem",
        "4xl": "1.75rem",
        "5xl": "2rem",
      },
      boxShadow: {
        soft: "0 2px 12px rgba(0,0,0,0.05)",
      },
      keyframes: {
        // Define o keyframe da animação de respiração
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" }, // Estado inicial e final
          "50%": { transform: "scale(1.05)", opacity: "0.85" }, // Meio da animação (aumenta um pouco e fica levemente transparente)
        },
      },
      animation: {
        breathe: "breathe 2s ease-in-out infinite", // Nome, duração, timing-function, repetição
      },
    },
  },
  plugins: [],
} satisfies Config;
