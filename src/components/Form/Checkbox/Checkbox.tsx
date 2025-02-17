import React, { ReactElement, ReactNode } from 'react';

import { RegisterOptions, useFormContext } from 'react-hook-form';

import styles from './checkbox.module.css';
import FormError from '@/components/Form/Error';

type Props = {
	name: string;
	children: ReactNode;
	options?: RegisterOptions;
};

const CheckboxInput = ({ name, children, options }: Props): ReactElement => {
	const { register } = useFormContext();

	return (
		<>
			<label className={styles.checkbox}>
				<input {...register(name, options)} name={name} type="checkbox" />
				<span className={styles.label}>{children}</span>
			</label>
			<FormError name={name} />
		</>
	);
};

export default CheckboxInput;
