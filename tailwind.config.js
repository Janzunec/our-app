module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				...require('daisyui/colors'),
				navbg: '#1c1c1c',
				mainbg: '#212121',
				primary: '#00FFFF',
				secondary: '#A287F4',
				ternary: '#0A4DC9'
			},
			stroke: ['hover', 'focus'],
			width: {
				'1/8': '12.5%'
			},
			margin: {
				about: '400%',
				skills: '500%',
				projects: '600%',
				contact: '700%'
			},
			fontFamily: {
				main: ['Nova Square', 'Arial'],
				src: ['Source Code Pro', 'monospace'],
				jtm: ['JetBrains Mono', 'monospace'],
				lba: ['La Belle Aurore', 'cursive'],
				lob: ['Lobster', 'cursive']
			},
			fontSize: {
				xs: '.75rem',
				sm: '.875rem',
				tiny: '.875rem',
				base: '1rem',
				lg: '1.125rem',
				xl: '1.25rem',
				'2xl': '1.5rem',
				'3xl': '1.875rem',
				'4xl': '2.25rem',
				'5xl': '3rem',
				'6xl': '5.5rem',
				'7xl': '6.5rem',
				'8xl': '7rem',
				'9xl': '9rem'
			},
			transitionTimingFunction: {
				'stretch-out': 'cubic-bezier(0, .54, 1, 1.87)'
			},
			translate: {
				nav: '-400%'
			}
		},
		stroke: (theme) => ({
			purple: theme('strokeColor')
		})
	},
	variants: {
		extend: {}
	},
	plugins: [require('daisyui')]
};
