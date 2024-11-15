import React, { ReactElement } from 'react';

import { RegisterOptions, useFormContext } from 'react-hook-form';

import styles from './radio.module.css';
import FormError from '@/components/Form/Error';

export type RadioOption = {
	label: string;
	value: string | undefined | number;
};

type Props = {
	name: string;
	title: string;
	options?: RegisterOptions;
	choices: RadioOption[];
	flat?: boolean;
};

const RadioInput = ({ name, title, options, choices, flat = false }: Props): ReactElement => {
	const { register } = useFormContext();

	return (
		<div>
			<span className={styles.title}>{title}</span>
			<div className={`${styles.options} ${flat && styles.flat}`}>
				{choices.map((radio) => (
					<label key={radio.value}>
						<div className={styles.option}>
							<input {...register(name, options)} name={name} value={radio.value} type="radio" />
							<span>{radio.label}</span>
						</div>
					</label>
				))}
			</div>
			<FormError name={name} />
		</div>
	);
};

export default RadioInput;
