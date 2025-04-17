import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          main: 'var(--primary-main)',
          contrastText: 'var(--primary-contrastText)',
        },
        secondary: {
          main: 'var(--secondary-main)',
          contrastText: 'var(--secondary-contrastText)',
        }
      },
    },
  },
  plugins: [],
};
export default config;
