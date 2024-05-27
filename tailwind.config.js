/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      textShadow: {
        // Add your custom text shadow styles here
        't1': '2px 2px 4px rgba(0, 0, 0, 0.5)',
      },
      boxShadow: {
        // eslint-disable-next-line max-len
        's1': ' 4px 1px 3px 0px rgba(0, 0, 0, 0.10), -3px 4px 5px 0px rgba(0, 0, 0, 0.09), -6px 8px 6px 0px rgba(0, 0, 0, 0.05), -12px 14px 7px 0px rgba(0, 0, 0, 0.01), -18px 22px 8px 0px rgba(0, 0, 0, 0.00);',
    },
    height: {
      customh1: 'calc(100vh - 255px)',
      customh2: 'calc(100vh - 75px)',
      customh3: 'calc(100vh - 560px)'
    },
  },
  },
  plugins: [require("tw-elements/dist/plugin.cjs"),
  require('flowbite/plugin')
  ],
  darkMode: "class"
}

