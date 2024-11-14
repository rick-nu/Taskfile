export const renderFragment = (fragmentParts: string[], fallback?: string, isCommand: boolean = false): string => {
	if (fragmentParts.length > 0) {
		return fragmentParts.join(isCommand ? '\n\t' : '\n\n');
	}

	return fallback ?? '';
};

export default renderFragment;
