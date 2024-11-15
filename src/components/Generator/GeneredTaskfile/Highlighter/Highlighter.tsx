import { ReactElement } from 'react';

import { styles } from './styles';
import { lineRenderers } from './lineRenderers';

export const highlighter = (code: string): ReactElement[] => {
	const normalizedCode = code.endsWith('\n') ? code : code + '\n';
	const lines = normalizedCode.split('\n').slice(0, -1);

	return lines.map((line, index) => {
		const renderer = lineRenderers.find((r) => r.test(line));

		if (renderer) {
			return renderer.render(line, index);
		}

		return (
			<div key={index} style={styles.colors.white}>
				{line}
			</div>
		);
	});
};
