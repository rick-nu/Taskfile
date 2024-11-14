import { ReactElement, ReactNode } from 'react';

import styles from './window.module.css';

type WindowProps = {
	children: ReactNode;
	className?: string;
	dark?: boolean;
};

const Window = ({ children, className = '', dark = false }: WindowProps): ReactElement => (
	<div className={`${styles.window} ${className}`}>
		<div className={styles.topBar}>
			<div />
			<div />
			<div />
		</div>
		<div className={`${styles.content} ${dark && styles.dark}`}>{children}</div>
	</div>
);

export default Window;
