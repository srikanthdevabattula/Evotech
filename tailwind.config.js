/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
    
    },
		fontFamily: {
			'Inria-Serif': 'Inria Serif',
			'poppins': 'poppins',
			'Jockey-One':'Jockey One',
			'Jost':'Jost',
			'Inknut-Antiqua':'Inknut Antiqua',
			'Ruslan-Display':'Ruslan Display',
			'Roboto':'Roboto',
			'lato':'lato',
      'SansSerif':'Sans Serif',
	  'Staatliches':'Staatliches',
	  'rubik':'rubik',
	  'Barlow':'barlow'
		  },
		 
		screens: {
			
			

			
			'lg': {'max': '1439px'},
	  
			'md': {'max': '1023px'},
			
	  
			'sm': {'max': '767px'},
			'esm':{'max':'374px'},
			'xl':{'min':'1440px'},
      '2xl':{'min':'2100px'}

			
		  }
	},
	plugins: [
		// require('tailwind-scrollbar-hide'),
		// Other plugins
	  ],
};
