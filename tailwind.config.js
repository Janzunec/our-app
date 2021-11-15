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
				secondary: '#793EF9',
				ternary: '#0A4DC9',
				html: '#FF5722',
				css: '#0D73B7',
				js: '#F7DF1E',
				php: '#787CB4'
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
				dc: ['Dancing Script', 'cursive'],
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
				'6xl': '5rem',
				'7xl': '6.5rem',
				'8xl': '7rem',
				'9xl': '9rem'
			},
			transitionTimingFunction: {
				'stretch-out': 'cubic-bezier(0, .54, 1, 1.87)'
			},
			translate: {
				nav: '-400%'
			},
			animation: {
				'spin-slow': 'spin 3s linear infinite',
				'spin-slowY': 'rotateY-slow 4s linear infinite'
			},
			dropShadow: {
				'3xl': '0 0 20px 20px white'
			}
		},
		keyframes: {
			'rotateY-slow': {
				'0%': {
					'-webkit-transform': 'rotateY(0deg)',
					'-moz-transform': 'rotateY(0deg)',
					'-ms-transform': 'rotateY(0deg)',
					'-o-transform': 'rotateY(0deg)',
					transform: 'rotateY(0deg)'
				},
				'100%': {
					'-webkit-transform': 'rotateY(360deg)',
					'-moz-transform': 'rotateY(360deg)',
					'-ms-transform': 'rotateY(360deg)',
					'-o-transform': 'rotateY(360deg)',
					transform: 'rotateY(360deg)'
				}
			}
		},
		screens: {
			tablet: '640px',
			// => @media (min-width: 640px) { ... }

			laptop: '1280px',
			// => @media (min-width: 1280px) { ... }

			desktop: '1500px'
			// => @media (min-width: 1500px) { ... }
		}
	},
	variants: {
		extend: {
			animation: ['hover', 'group-hover'],
			scale: ['active', 'group-hover'],
			translate: ['active', 'group-hover']
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#570df8',
					'primary-focus': '#4506cb',
					'primary-content': '#212121',
					secondary: '#f000b8',
					'secondary-focus': '#bd0091',
					'secondary-content': '#212121',
					accent: '#00ffff',
					'accent-focus': '#00ffff',
					'accent-content': '#212121',
					neutral: '#212121',
					'neutral-focus': '#2a2e37',
					'neutral-content': '#212121',
					'base-100': '#212121',
					'base-200': '#212121',
					'base-300': '#212121',
					'base-content': '#0ff',
					info: '#2094f3',
					success: '#009485',
					warning: '#ff9900',
					error: '#ff5724'
				}
			}
		]
	}
};
