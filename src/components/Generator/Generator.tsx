import { ReactElement } from 'react';
import Window from '@/components/Window';

import styles from './generator.module.css';

const Generator = (): ReactElement => (
	<div className={styles.container}>
		<Window className={styles.settingsWindow}>controls</Window>
		<Window className={styles.outputWindow} dark>GeneratedFile</Window>
	</div>
)

export default Generator;
