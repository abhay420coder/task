/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'mobileLand': '576px', // mobile landscape
				// => @media (min-width: 576px) { ... }
		  
				'tabletPot': '768px',
				// => @media (min-width: 768px) { ... }
		  
				'tabletLand': '992px',
				// => @media (min-width: 992px) { ... }

				'laptop': '1200px',
				// => @media (min-width: 120px) { ... }
		  
				'monitor': '1400px',
				// => @media (min-width: 1400px) { ... }
			  },
		},
	},
	plugins: [],
}
