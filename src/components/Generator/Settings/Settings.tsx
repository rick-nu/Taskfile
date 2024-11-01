'use client';

import { ReactElement } from 'react';

import styles from './settings.module.css';
import TextInput from "@/components/Form/Text";
import RadioInput from "@/components/Form/Radio";

const Settings = (): ReactElement => {
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
		</div>
	)
}

export default Settings;
