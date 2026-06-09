/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101114",
        paper: "#f5f1e8",
        moss: "#6a8f6c",
        forest: "#2f5d4e",
        clay: "#c79b7d",
        sand: "#e8dcc8",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(16, 17, 20, 0.12)",
        panel: "0 16px 40px rgba(16, 17, 20, 0.1)",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["'Inter'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        texture:
          "radial-gradient(circle at 1px 1px, rgba(16,17,20,0.12) 1px, transparent 0)",
      },
      animation: {
        drift: "drift 16s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 24s linear infinite",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(0, -12px, 0) scale(1.03)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
