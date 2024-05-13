import withMT from '@material-tailwind/react/utils/withMT';

const colors = require('tailwindcss/colors');
const {
	default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

export default withMT({
	content: [
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}',
		'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
		'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
	],

	theme: {
		colors: {
			primary: 'blue',
			secondary: 'red',
			'text-base': 'white',
		},
		extend: {
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' },
				},
			},
			animation: {
				'marquee-infinite': 'marquee 50s linear infinite',
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

	plugins: [],
});
