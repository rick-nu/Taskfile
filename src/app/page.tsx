import Generator from '@/components/Generator';
import { Metadata } from 'next';

export const generateMetadata = (): Metadata => ({
	title: './Taskfile Generator • taskfile.sh',
	description:
		'Quickly kick start your project by moving all your development commands to one easy to understand and maintain place.',
});

export default function Page() {
	return <Generator />;
}
