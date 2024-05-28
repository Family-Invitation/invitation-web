import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        cormorantGaramond: ["Cormorant Garamond"],
        josefinSans: ["Josefin Sans"],
        portSans: ["Port Lligat Sans", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        combo: ["Combo", "sans-serif"],
        times: ["Times New Roman", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        dancingScript: ["Dancing Script", "sans-serif"],
        croissantOne: ["Croissant One", "sans-serif"],
        alata: ["Alata", "sans-serif"],
        crimsonPro: ["Crimson Pro", "sans-serif"],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        hearBeat: {
          "0%": { transform: "scale(1) rotate(0deg)" },
          "50%": { transform: "scale(1.2) rotate(4deg)" },
          "100%": { transform: "scale(1) rotate(0deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 5s ease-in-out infinite",
        heartBeat: "hearBeat 5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
