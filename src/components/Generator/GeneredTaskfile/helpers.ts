export const renderAddonFragment = (addonFragment: string[], fallback?: string): string => {
	if (addonFragment.length > 0) {
		return addonFragment.join("\n\n");
	}

	return fallback ?? '';
}

export const renderUtilities = (utilities: string[]): string => {
	if (utilities.length > 0) {
		return `

# =========================================================
# Utilities
# =========================================================

${utilities.join("\n\n")}`;
	}

	return '';
}
