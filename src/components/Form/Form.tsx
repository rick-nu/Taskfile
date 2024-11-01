'use client';

import { FormHTMLAttributes, ReactElement, ReactNode } from 'react';
import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form';

import styles from './form.module.css';

const Form = <
	TFieldValues extends FieldValues,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	TContext = any,
	TTransformedValues extends FieldValues | undefined = undefined,
>({
	form,
	children,
	...rest
}: {
	form: UseFormReturn<TFieldValues, TContext, TTransformedValues>;
	children: ReactNode;
} & FormHTMLAttributes<HTMLFormElement>): ReactElement => {
	return (
		<FormProvider {...form}>
			<form className={styles.form} {...rest}>
				{children}
			</form>
		</FormProvider>
	);
};

export default Form;
