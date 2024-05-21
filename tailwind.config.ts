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
        portSans: ['"Port Lligat Sans", "sans-serif"'],
        qagetto: ["qagetto"],
        combo: ["Combo"],
        times: ['"Times New Roman"', "serif"],
        poppins: ["Poppins"],
        dancingScript: ["Dancing Script"],
        croissantOne: ["Croissant One"],
        alata: ["Alata"],
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
