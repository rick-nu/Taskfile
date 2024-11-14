'use client';

import { ReactElement, useState } from 'react';

import styles from './copy.module.css';

type CopyProps = {
	onCopy: () => void;
};

const CopyToClipboard = ({ onCopy }: CopyProps): ReactElement => {
	const [isCopied, setCopied] = useState(false);

	const onClick = (): void => {
		setCopied(true);
		onCopy();

		setTimeout(() => setCopied(false), 1000);
	};

	return (
		<button type="button" className={`${styles.button} ${isCopied && styles.copied}`} onClick={onClick}>
			{isCopied ? 'copied!' : 'copy'}
		</button>
	);
};

export default CopyToClipboard;
