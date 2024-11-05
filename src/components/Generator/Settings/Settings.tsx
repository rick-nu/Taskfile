'use client';

import { ReactElement } from 'react';

import styles from './settings.module.css';
import TextInput from "@/components/Form/Text";
import RadioInput from "@/components/Form/Radio";
import { useFormContext } from 'react-hook-form';
import { GeneratorSettings } from '@/components/Generator';
import Checkbox from '@/components/Form/Checkbox';

const Settings = (): ReactElement => {
	const form = useFormContext<GeneratorSettings>();
	const settings = form.watch();

	return (
		<div className={styles.container}>
			<TextInput
				title="Project name"
				name="project"
				options={{maxLength: {value: 14, message: 'Project name should not be too long'}}}
			/>
			<RadioInput
				name="font"
				title="Title font"
				choices={[
					{
						label: 'Rubi',
						value: 'Rubi',
					},
					{
						label: 'ANSI Shadow',
						value: 'Shadow',
					},
					{
						label: 'USA flag',
						value: 'USA',
					},
				]}
			/>
			<RadioInput
				name="runtime"
				title="How do you run your project?"
				choices={[
					{
						label: 'Local commands',
						value: 'local',
					},
					{
						label: 'Docker compose',
						value: 'docker-compose',
					},
				]}
			/>
			{settings.runtime === 'docker-compose' && (
				<Checkbox name="developmentProxy">
					Include the docker{' '}
					<a href="https://github.com/Enrise/DevelopmentProxy/" target="_blank">development proxy</a>{' '}
					for local domains instead of ports
				</Checkbox>
			)}
		</div>
	)
}

export default Settings;
