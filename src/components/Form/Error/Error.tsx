import { Fragment, ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';

import styles from '../form.module.css';

type FormErrorProps = {
	name: string;
};

const FormError = ({ name }: FormErrorProps): ReactElement => {
	const form = useFormContext();

	const error = form.formState.errors[name];

	if (!error || !error.message) {
		return <Fragment />;
	}

	return <span className={styles.error}>{String(error.message)}</span>;
};

export default FormError;
