import React, { Fragment, ReactElement, ReactNode } from 'react';

import { RegisterOptions, useFormContext } from 'react-hook-form';

import styles from './checkbox.module.css';
import FormError from "@/components/Form/Error";

type Props = {
	name: string;
	children: ReactNode;
	options?: RegisterOptions;
};

const RadioInput = ({ name, children, options }: Props): ReactElement => {
	const { register } = useFormContext();

	return (
		<>
			<label className={styles.checkbox}>
				<input
					{...register(name, options)}
					name={name}
					type="checkbox"
				/>
				<span>{children}</span>
			</label>
			<FormError name={name} />
		</>
	);
};

export default RadioInput;
