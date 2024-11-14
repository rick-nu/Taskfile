type TemplateVariables = {
	[variable: string]: string;
};

/**
 *
 * @param file should be an imported bash (.sh) file
 * @param variables an object with all variables that you want to replace
 * @example
 * import myAddonSection from './my-addon-section.sh';
 *
 * // Replaces `[[foo]]` with `bar` in the template
 * loadTemplate(myAddonSection, {foo: 'bar'});
 */
const loadTemplate = (file: string, variables?: TemplateVariables): string => {
	// Replace all variables in the template
	if (variables) {
		for (const [variable, value] of Object.entries(variables)) {
			file = file.replaceAll('[[' + variable + ']]', value);
		}
	}

	// Get rid of excessive enters because if template imports
	file = file.replaceAll('\n\n\n', '\n\n');

	return file;
};

export default loadTemplate;
