import { ReactElement } from 'react';

type SubmitButtonProps = {
	title: string;
	isPending?: boolean;
};

const SubmitButton = ({ title, isPending }: SubmitButtonProps): ReactElement => {
	return (
		<button type="submit" disabled={isPending}>
			{title}
		</button>
	);
};

export default SubmitButton;
