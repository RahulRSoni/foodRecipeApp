import withMT from '@material-tailwind/react/utils/withMT';

const colors = require('tailwindcss/colors');
const {
	default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

function addVariablesForColors({ addBase, theme }) {
	// Flatten the color palette from the theme configuration
	let allColors = flattenColorPalette(theme('colors'));

	// Convert the flattened color palette into CSS variable declarations
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
	);

	// Add the CSS variables to the :root selector
	addBase({
		':root': newVars,
	});
}

export default withMT({
	content: [
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}',
		'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
		'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
	],

	theme: {
		colors: colors,
		extend: {
			animation: {
				scroll:
					'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
			},
			keyframes: {
				scroll: {
					to: {
						transform: 'translate(calc(-100% - 0.5rem))',
					},
				},
			},
		},
		screens: {
			sm: '540px',
			md: '720px',
			'md-max': { max: '720px' },
			lg: '960px',
			xl: '1140px',
			'2xl': '1320px',
		},
	},

	plugins: [addVariablesForColors],
});
