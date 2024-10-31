'use client';

import { ReactElement } from 'react';
import Window from '@/components/Window';

import styles from './generator.module.css';
import { FormProvider, useForm } from 'react-hook-form';
import Settings from './Settings';
import GeneratedTaskfile from './GeneredTaskfile';

const Generator = (): ReactElement => {
	const form = useForm();

	return (
		<FormProvider {...form}>
			<div className={styles.container}>
				<Window className={styles.settingsWindow}><Settings /></Window>
				<Window className={styles.outputWindow} dark><GeneratedTaskfile /></Window>
			</div>
		</FormProvider>
	)
}

export default Generator;
