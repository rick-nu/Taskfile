'use client';

import { ReactElement } from 'react';
import Window from '@/components/Window';

import styles from './generator.module.css';
import { useForm } from 'react-hook-form';
import Settings from './Settings';
import GeneratedTaskfile from './GeneredTaskfile';
import Form from '@/components/Form';
import { Font } from './GeneredTaskfile/buildHeader';

export type GeneratorSettings = {
	project: string;
	font: Font;
	runtime: 'local' | 'docker-compose' | 'docker-compose-dev';
}

const Generator = (): ReactElement => {
	const form = useForm<GeneratorSettings>({
		mode: 'onChange',
		defaultValues: {
			project: 'Taskfile',
			font: 'Shadow',
			runtime: 'local',
		},
	});

	return (
		<Form form={form} onSubmit={form.handleSubmit(() => {})}>
			<div className={styles.container}>
				<Window className={styles.settingsWindow}><Settings /></Window>
				<Window className={styles.outputWindow} dark><GeneratedTaskfile /></Window>
			</div>
		</Form>
	);
};

export default Generator;
