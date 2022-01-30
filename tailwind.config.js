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
				secondary: '#6a22f8',
				ternary: '#0A4DC9',
				html: '#FF5722',
				css: '#0D73B7',
				js: '#F7DF1E',
				php: '#787CB4',
				spotify: '#1DB954',
				darkblue: '#0d1426',
				react: '#61DBFB',
			},
			stroke: ['hover', 'focus'],
			width: {
				'1/8': '12.5%',
			},
			height: {
				navbar: '6.5vh',
			},
			margin: {
				aboutLg: '400%',
				skillsLg: '500%',
				projectsLg: '600%',
				contactLg: '700%',
				aboutSm: '200%',
				skillsSm: '300%',
				projectsSm: '400%',
				contactSm: '500%',
			},
			fontFamily: {
				dc: ['Dancing Script', 'cursive'],
				main: ['Nova Square', 'Arial'],
				src: ['Source Code Pro', 'monospace'],
				jtm: ['JetBrains Mono', 'monospace'],
				lba: ['La Belle Aurore', 'cursive'],
				lob: ['Lobster', 'cursive'],
				pac: ['Pacifico', 'cursive'],
				shi: ['Shippori Antique B1', 'sans-serif'],
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
				'4xl': '2.5rem',
				'5xl': '3.6rem',
				'6xl': '5rem',
				'7xl': '6.5rem',
				'8xl': '7rem',
				'9xl': '9rem',
			},
			transitionTimingFunction: {
				'stretch-out': 'cubic-bezier(0, .54, 1, 1.87)',
			},
			translate: {
				navLg: '-400%',
				navSm: '-200%',
			},
			animation: {
				'spin-slow': 'spin 3s linear infinite',
				'spin-slowY': 'rotateY-slow 4s linear infinite',
				'fade-in': 'fade-in 1s linear',
				'slide-left': 'slide-left 500ms ease-out',
			},
			boxShadow: {
				'3xl': '0 0 25px 3px white',
				inner: 'inset 0 0 13px 1px black',
			},
			inset: {
				navtop: '93.5vh',
			},
		},
		keyframes: {
			'rotateY-slow': {
				'0%': {
					'-webkit-transform': 'rotateY(0deg)',
					'-moz-transform': 'rotateY(0deg)',
					'-ms-transform': 'rotateY(0deg)',
					'-o-transform': 'rotateY(0deg)',
					transform: 'rotateY(0deg)',
				},
				'100%': {
					'-webkit-transform': 'rotateY(360deg)',
					'-moz-transform': 'rotateY(360deg)',
					'-ms-transform': 'rotateY(360deg)',
					'-o-transform': 'rotateY(360deg)',
					transform: 'rotateY(360deg)',
				},
			},
			'fade-in': {
				'0%': {
					opacity: '0',
					transform: 'rotateX(-10deg);',
				},
				'100%': {
					opacity: '100',
					transform: 'rotateX(0);',
				},
			},
			'slide-left': {
				'0%': {
					opacity: '0',
					transform: 'translateX(3rem)',
				},
				'100%': {
					opacity: '100',
					transform: 'translateX(0)',
				},
			},
			underline: {},
		},
		screens: {
			tablet: '640px',
			// => @media (min-width: 640px) { ... }

			laptop: '1280px',
			// => @media (min-width: 1280px) { ... }

			desktop: '1800px',
			// => @media (min-width: 1500px) { ... }
		},
		maxWidth: {
			activityTable: '330px',
		},
	},
	variants: {
		extend: {
			animation: ['hover', 'group-hover'],
			scale: ['active', 'group-hover'],
			translate: ['active', 'group-hover'],
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#6a22f8',
					'primary-focus': '#4506cb',
					'primary-content': '#212121',
					secondary: '#f000b8',
					'secondary-focus': '#bd0091',
					'secondary-content': '#212121',
					accent: '#00ffff',
					'accent-focus': '#00ffff',
					'accent-content': '#212121',
					neutral: '#000',
					'neutral-focus': '#2a2e37',
					'neutral-content': '#212121',
					'base-100': '#212121',
					'base-200': '#212121',
					'base-300': '#212121',
					'base-content': '#0ff',
					info: '#2094f3',
					success: '#009485',
					warning: '#ff9900',
					error: '#ff5724',
				},
			},
		],
	},
};
