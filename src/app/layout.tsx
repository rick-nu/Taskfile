import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.scss';
import { ReactNode } from 'react';
import Desktop from '@/components/Desktop';

const jetbrainsMono = localFont({
	src: './fonts/JetBrainsMono.ttf',
	variable: '--font-code',
	weight: '100 900',
});

const manrope = localFont({
	src: './fonts/Manrope.ttf',
	variable: '--font-text',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'Taskfile Generator',
	description:
		'Quickly kick start your project by moving all your development commands to one easy to understand and maintain place.',
};

type LayoutProps = {
	children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	return (
		<html lang="en">
			<body className={`${jetbrainsMono.variable} ${manrope.variable}`}>
				<Desktop>{children}</Desktop>
			</body>
		</html>
	);
}
