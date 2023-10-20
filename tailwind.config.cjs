/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	safelist: [
		{
			pattern: /bg-(orange|green|purple|black|neutral)-(50|100|200|300|400|500|600|700|800|900)/,
		},
		{ pattern: /cards-(.*)/ },
		{ pattern: /bg-(sustainability|open_source|interdisciplinarity|crypto|cybersecurity)/ },
		'bg-white',
		'bg-primary',
		'bg-accent',
		'bg-saccent',
		'bg-taccent',
		'bg-baccent',
	],
	theme: {
		extend: {
			colors: {
				green: {
					50: 'var(--primary-colorsgreen-circular50)',
					100: 'var(--primary-colorsgreen-circular100)',
					200: 'var(--primary-colorsgreen-circular200)',
					300: 'var(--primary-colorsgreen-circular300)',
					400: 'var(--primary-colorsgreen-circular400)',
					500: 'var(--primary-colorsgreen-circular500)',
					600: 'var(--primary-colorsgreen-circular600)',
					700: 'var(--primary-colorsgreen-circular700)',
					800: 'var(--primary-colorsgreen-circular800)',
					900: 'var(--primary-colorsgreen-circular900)',
				},
				orange: {
					100: 'var(--primary-colorsorange-opensource10)',
					200: 'var(--primary-colorsorange-opensource20)',
					300: 'var(--primary-colorsorange-opensource30)',
					400: 'var(--primary-colorsorange-opensource40)',
					50: 'var(--primary-colorsorange-opensource5)',
					500: 'var(--primary-colorsorange-opensource50)',
					600: 'var(--primary-colorsorange-opensource60)',
					700: 'var(--primary-colorsorange-opensource70)',
					800: 'var(--primary-colorsorange-opensource80)',
					900: 'var(--primary-colorsorange-opensource90)',
				},
				purple: {
					100: 'var(--primary-colorspurple-cybers100)',
					200: 'var(--primary-colorspurple-cybers200)',
					300: 'var(--primary-colorspurple-cybers300)',
					400: 'var(--primary-colorspurple-cybers400)',
					50: 'var(--primary-colorspurple-cybers50)',
					500: 'var(--primary-colorspurple-cybers500)',
					600: 'var(--primary-colorspurple-cybers600)',
					700: 'var(--primary-colorspurple-cybers700)',
					800: 'var(--primary-colorspurple-cybers800)',
					900: 'var(--primary-colorspurple-cybers900)',
				},
				black: {
					50: 'var(--variant95)',
					100: 'var(--variant90)',
					200: 'var(--variant80)',
					300: 'var(--variant70)',
					400: 'var(--variant60)',
					500: 'var(--variant50)',
					600: 'var(--variant40)',
					700: 'var(--variant30)',
					800: 'var(--variant20)',
					900: 'var(--variant10)',
					950: 'var(--variant5)',
				},
				neutral: {
					50: 'var(--neutral-50)',
					100: 'var(--neutral-100)',
					200: 'var(--neutral-200)',
					300: 'var(--neutral-300)',
					400: 'var(--neutral-400)',
					500: 'var(--neutral-500)',
					600: 'var(--neutral-600)',
					700: 'var(--neutral-700)',
					800: 'var(--neutral-800)',
					900: 'var(--neutral-900)',
					950: 'var(--neutral-950)',
				},

				// primary: pallete('primary'),
				accent: 'var(--accent-color)',
				taccent: 'var(--text-accent-color)',
				background: 'var(--bg-color)',
				saccent: 'var(--secondary-accent-color)',
				baccent: 'var(--bg-accent-color)',
				sustainability: '#69C9BF',
				open_source: '#D77733',
				interdisciplinarity: '#fff',
				crypto: '#000000',
				cybersecurity: '#8980f5',
				// primary: {
				// 	DEFAULT: '#F4CC9C' #FFEEDD,
				// 	light: '#FEFBF6',
				// 	800: '#F6D6B0',
				// 	600: '#F8E0C4',
				// 	400: '#FBEBD7',
				// 	200: '#FDF5EB',
				// 	100: '#FEFAF5',
				// 	50: '#FEFCFA',
				// },
			},
			fontFamily: {
				'text-desktop-base': 'var(--text-desktop-base-font-family)',
				'text-desktop-base-highlight': 'var(--text-desktop-base-highlight-font-family)',
				'text-desktop-large': 'var(--text-desktop-large-font-family)',
				'text-desktop-medium': 'var(--text-desktop-medium-font-family)',
				'text-mobile-base': 'var(--text-mobile-base-font-family)',
				'text-mobile-base-highlight': 'var(--text-mobile-base-highlight-font-family)',
				'text-mobile-large': 'var(--text-mobile-large-font-family)',
				'text-mobile-medium': 'var(--text-mobile-medium-font-family)',
				display: ['Syne', 'sans'],
				sans: ['Basis Grotesque Arabic Pro', 'sans-serif', 'sans'],
				mono: ['JetBrains Mono', 'monospace'],
			},
			boxShadow: {
				'cards-focused-green': 'var(--cards-focused-green)',
				'cards-focused-orange': 'var(--cards-focused-orange)',
				'cards-focused-purple': 'var(--cards-focused-purple)',
				'cards-simple-green': 'var(--cards-simple-green)',
				'cards-simple-orange': 'var(--cards-simple-orange)',
				'cards-simple-purple': 'var(--cards-simple-purple)',
				simple: 'var(--simple)',
			},
			fontWeight: {
				highlight: 700,
			},
			fontSize: {
				base: '18px',
				lg: '20px',
				xl: ['22px', '130%'],
				'2xl': ['', '130%'],

				mega: [
					'7.65rem',
					{
						lineHeight: '13.625rem',
					},
				],
			},
			// letterSpacing: {
			// 	normal: '-0.2rem',
			// },
			typography: {
				DEFAULT: {
					css: {
						em: { fontFamily: 'Syne', fontStyle: 'italic' },
					},
				},
			},
			borderRadius: {
				'3xl': '60px',
				'4xl': '120px',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
	darkMode: 'class',
};
