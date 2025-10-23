/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        txtColorYellow: '#e1af2d',
        txtColorBlue: '#012482',
        txtColorWhite: '#f9f9f9',
        hoverYellow: '#e1af2d',
        bgColorBlue: '#01287c',
        bgColorWhite: '#e5e5e5',
        bgColorDark: '#e9eaec',
      },
      fontFamily: {
        'monica': ['monica-ext-font_YIBBBFG', 'sans-serif'],
        'PermanentMarker': ['Permanent Marker', 'cursive'],
        "Flier": ['Open Sauce One', 'sans-serif'],
      },
    },
  plugins: [],
}
}