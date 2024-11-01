import Settings from '@/components/Generator';
import {Metadata} from "next";

export const generateMetadata = (): Metadata => ({
	title: 'Taskfile generator',
	description: 'Quickly kick start your project by moving all your development commands to one easy to understand and maintain place.',
});

export default function Home() {
	return (
		<Settings />
	);
}
