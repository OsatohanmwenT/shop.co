import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		screens: {
			xs: "475px",
			wide: "1440px"
		},
		fontSize: {
			'3xl': ['28px', '50px'],
			'4xl': ['48px', '58px'],
			'8xl': ['96px', '106px']
		},
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		fontFamily: {
			"work-sans": ["var(--font-work-sans)"],
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
