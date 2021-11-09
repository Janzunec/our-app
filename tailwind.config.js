module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				...require('daisyui/colors'),
				navbg: '#000',
				mainbg: '#414141',
				fontcolor: '#12E6C8',
				strokeColor: '#A287F4'
			},
			stroke: ['hover', 'focus']
		},
		stroke: (theme) => ({
			purple: theme('strokeColor')
		}),
		fontFamily: {
			anu: ['Anurati']
		}
	},
	variants: {
		extend: {}
	},
	plugins: [require('daisyui')]
};
