import { ReactElement } from 'react';

type TextInputProps = {
	title: string;
	isPending?: boolean;
};

const SubmitButton = ({ title, isPending }: TextInputProps): ReactElement => {
	return (
		<button type="submit" disabled={isPending}>
			{title}
		</button>
	);
};

export default SubmitButton;
