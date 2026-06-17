import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    screens: {
      'tablet': '810px',
      'desktop': '1200px',
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      /* Theme Colors - Editorial lavender + aubergine + coral accent */
      main: {
        '00': "#F5EBFE",  // lavender wash
        '01': "#EADCFB",  // lavender tint
        '02': "#4C1D6B",  // aubergine (primary)
      },
      coral: {
        DEFAULT: "#FF5C39",
        '01': "#FFE4DC",
      },

      /* Neutral Colors - paper + ink editorial palette */
      neutral: {
        '00': "#FBF7FE",  // Paper (warm lavender white)
        '01': "#F6F1FB",
        '02': "#F0EAF6",
        '03': "#E6DEEE",
        '04': "#D8CDE2",
        '05': "#BFB3CC",
        '06': "#A395B0",
        '07': "#8B7E97",
        '08': "#6F6478",
        '09': "#564C5E",
        '10': "#3E3645",
        '11': "#1F1A26",
        '12': "#13111C",  // Ink
      },
      /* Success & Rating Colors */
      success: "#22C55E",
      star: "#FF5C39",
      /* Semantic Colors */
      transparent: 'transparent',
      current: 'currentColor',
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
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
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
    },
    extend: {
      fontFamily: {
        'syne': ['Syne', 'sans-serif'],
        'jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
        'manrope': ['Syne', 'sans-serif'],
        'geist': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
        keyframes: {
          "accordion-down": {
            from: {
              height: "0",
            },
            to: {
              height: "var(--radix-accordion-content-height)",
            },
          },
          "accordion-up": {
            from: {
              height: "var(--radix-accordion-content-height)",
            },
            to: {
              height: "0",
            },
          },
          "ticker": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-33.333%)" },
          },
          "ticker-reverse": {
            "0%": { transform: "translateX(-33.333%)" },
            "100%": { transform: "translateX(0)" },
          },
          "appear": {
            "0%": { opacity: "0", transform: "translateY(20px)" },
            "100%": { opacity: "1", transform: "translateY(0)" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
          "ticker": "ticker 14.5s linear infinite",
          "ticker-reverse": "ticker-reverse 14.5s linear infinite",
          "appear": "appear 0.6s ease-in-out forwards",
          "appear-delayed": "appear 0.8s ease-in-out 0.5s forwards",
        },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
