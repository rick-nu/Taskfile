'use client';

import { ReactElement } from 'react';
import Window from '@/components/Window';

import styles from './generator.module.scss';
import { useForm } from 'react-hook-form';
import Settings from './Settings';
import GeneratedTaskfile from './GeneredTaskfile';
import Form from '@/components/Form';
import { Font } from './GeneredTaskfile/buildHeader';

export type GeneratorSettings = {
	project: string;
	font: Font;
	runtime: 'local' | 'docker-compose';
	developmentProxy: boolean;
	checkoutGitRequest: 'none' | 'github' | 'gitlab';
	configureGitHooks: boolean;
	fileUtilities: boolean;
	appUtilities: boolean;
};

const Generator = (): ReactElement => {
	const form = useForm<GeneratorSettings>({
		mode: 'onChange',
		defaultValues: {
			project: 'Taskfile',
			font: 'Shadow',
			runtime: 'local',
			checkoutGitRequest: 'none',
		},
	});

	return (
		<Form className={styles.container} form={form} onSubmit={form.handleSubmit(() => {})}>
			<Window className={styles.settingsWindow}>
				<Settings />
			</Window>
			<Window className={styles.outputWindow} dark>
				<GeneratedTaskfile />
			</Window>
		</Form>
	);
};

export default Generator;
