/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "sans-serif"],
			},
			backgroundImage: () => ({
				hero: "url('../img/hero.png')",
			}),
		},
	},
	plugins: [],
};
