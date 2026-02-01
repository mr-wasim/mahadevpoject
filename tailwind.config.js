/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
  darkMode: 'class',
  theme: {
    extend: {
      rotate: {
        30: "-30deg",
        20: "-20deg",
        15: "-15deg",
      },
      colors: {
        // Preserve Tailwind default colors
        gray: colors.gray,
        gray2: "#374151",
        blue: colors.blue,
        red: colors.red,
        green: colors.green,
        yellow: colors.yellow,
        slate: colors.slate,
        indigo: colors.indigo,
        violet: colors.violet,
        'light-bg': '#ededed',
        'dark-bg': '#121212',
        'dark-border': '#4da8da',

        // Custom colors
        error: "#EA1C24",
        white: "#fff",
        black: "#000000",
        offwhite: "#969696",
        footerbg: "#444444",
        footerbg2: "#444444",
        pink: "#FAA9BA",
        offwhite2: "#DBDADA",
        loadercolor: "#fff",
        lightblue: "#72BBEF",
        gold: "#fbbf24",
        stack: "#2B2E35",
        myindigo: "#4f45e5",
        navBackground: "#333333",

        // HSL-based CSS variable theme colors
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      boxShadow: {
        inner: "inset 0 -5px 15px 1px hsla(0,0%,100%,.2)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "nav-change": "1330px",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      backgroundImage: {
        "stripes-white":
          "repeating-linear-gradient(45deg, #ffffff33, #ffffff33 1px, transparent 1px, transparent 10px)",
        "gradient-red": "linear-gradient(to bottom right, #dc2626, #991b1b)",
        "gradient-green":
          "linear-gradient(to bottom right, #16a34a, #15803d)",
        "gradient-amber":
          "linear-gradient(to bottom right, #f59e0b, #d97706)",
        "gradient-purple":
          "linear-gradient(to bottom right, #9333ea, #7e22ce)",
        "gradient-blue":
          "linear-gradient(to bottom right, #2563eb, #1e3a8a)",
        "gradient-teal":
          "linear-gradient(to bottom right, #14b8a6, #0f766e)",
        "aura-blue-gradient":
          "linear-gradient(to top, #2E4B5E 0%, #243A48 82%)",
      },
    },
  },
  plugins: [],
  important: true
};