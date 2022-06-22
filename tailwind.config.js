/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Manrope"],
			serif: ["Manrope"],
			display: ["Manrope"],
			body: ["Manrope"],
		},
		extend: {
			screens: {
				"2xl": "1440px",
			},
		},
	},
	plugins: [],
}
