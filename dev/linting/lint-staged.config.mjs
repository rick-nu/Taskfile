/* eslint-disable @typescript-eslint/explicit-function-return-type */
const config = {
	// ==============================
	// Frontend specific
	// ==============================
	'*.{ts,tsx}': [
		// tsc runs for all files instead of only the edited ones
		() => './node_modules/.bin/tsc --noEmit --project . --pretty',
	],

	// ==============================
	// Global files
	// ==============================
	'*.{json,css,md,html}': ['prettier --write --ignore-path dev/.prettierignore'],
};

export default config;
