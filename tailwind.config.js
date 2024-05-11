import withMT from '@material-tailwind/react/utils/withMT';

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
				'spin-slow-30': 'spin 30s linear infinite',
				'spin-slow-25': 'spin 25s linear infinite',
				'spin-slow-10': 'spin 10s linear infinite',
				'marquee-infinite': 'marquee 25s linear infinite',
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
