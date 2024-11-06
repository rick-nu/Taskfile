/* eslint-disable @typescript-eslint/explicit-function-return-type */

const prettier =
	'prettier --config dev/linting/.prettierrc.json --ignore-path dev/linting/.prettierignore --write --list-different';

const config = {
	// ==============================
	// Frontend specific
	// ==============================
	'*.{ts,tsx}': [
		// tsc runs for all files instead of only the edited ones
		() => 'tsc --noEmit --project . --pretty',
		'eslint --config dev/linting/eslint.config.mjs',
		prettier,
	],

	// ==============================
	// Global files
	// ==============================
	'*.{json,css,md,html}': [prettier],
};

export default config;
