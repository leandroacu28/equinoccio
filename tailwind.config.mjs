/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
		'node_modules/preline/dist/*.js',
	],
	theme: {
		extend: {},
	},
	plugins: [
		// require('@tailwindcss/forms'),
		require('preline/plugin'),
	],
}
