export const renderUtilities = (utilities: string[]): string => {
	if (utilities.length > 0) {
		return `

# =========================================================
# Utilities
# =========================================================

${utilities.join('\n\n')}`;
	}

	return '';
};
