/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable quotes */
// const plugin = require("tailwindcss/plugin");

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
