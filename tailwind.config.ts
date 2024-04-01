import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        audimat: ["Audimat"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        ldblack: "#191919",
        ldgrey: "#282828",
        ldcardgrey: "#E6E6E6",
        ldlightgray: "#939598",
        ldblue: '#3DD6F5',
        lddblue: '#405BFF',
        ldred: '#FF386B',
        ldpurple: '#A34FDE',
        ldyellow: '#EBFF38',
        ldgray: '#282828',
        ldgraytext: '#BCBEC0',
        ldhl: '#EBFF38',
        ldinput: '#212121',
        ldinputback: '#282828',
        ldtsgray: '#D1D3D4',
        ldbackground: '#191919',
        ldsiteblue: '#405BFF',
        ldsitehover: '#7084FF',
      },
    },
  },
  plugins: [],
};
export default config;
