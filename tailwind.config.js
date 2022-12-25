module.exports = {
	content: [
		"./components/**/*.{js,jsx}",
		"./layout/**/*.{js,jsx}",
		"./pages/**/*.{js,jsx}",
	],
	theme: {
		extend: {
			gridTemplateRows: {
				header: "auto 1fr",
			},

			colors: {
				red: {
					50: "#FFF2F4",
					100: "#FFE3E8",
					200: "#FFCCD5",
					300: "#FCA4B3",
					400: "#F77288",
					500: "#F04360",
					600: "#DB2544",
					700: "#BA1C36",
					800: "#991C30",
					900: "#801D2E",
				},
			},

			dropShadow: {
				'xl': '0px 8px 5px #BA1C36',
			},

			maxHeight: {
				'xl': '36rem',
			}
		},

		fontFamily: {
			logo: ['Kaushan Script', 'cursive'],
			sans: ['Montserrat', 'sans-serif'],
			fancy: ['Lobster', 'cursive'],
		},

		screens: {
			sm: '480px',
			md: '768px',
			lg: '1028px',
			xl: '1440px',
		}
	},

	plugins: [],
}
