import React, { ReactElement } from 'react';

import styles from './highlighter.module.css';

enum RendererType {
	EmptyLines,
	FunctionDefinitions,
	Comments,
	Variables,
	Conditionals,
	EchoStatements,
}

type LineRenderer = {
	test: (line: string) => boolean;
	render: (line: string, index: number) => ReactElement;
};

export const lineRenderers: Record<RendererType, LineRenderer> = {
	[RendererType.EmptyLines]: {
		test: (line) => line.trim() === '',
		render: (_, i) => <div key={i}>&nbsp;</div>,
	},
	[RendererType.FunctionDefinitions]: {
		test: (line) => /^function\s+[a-zA-Z_:]+/.test(line),
		render: (line, i) => {
			const [, name, rest] = line.match(/^function\s+([a-zA-Z_:]+)(.*)/) || [];
			return (
				<div key={i} className={styles.line}>
					<span className={styles['text-purple']}>function </span>
					<span className={styles['text-yellow']}>{name}</span>
					<span className={styles['text-white']}>{rest}</span>
				</div>
			);
		},
	},
	[RendererType.Comments]: {
		test: (line) => line.trim().startsWith('#'),
		render: (line, i) => (
			<div key={i} className={styles['text-gray']}>
				{line}
			</div>
		),
	},
	[RendererType.Variables]: {
		test: (line) => /^[A-Z_]+=.*/.test(line),
		render: (line, i) => {
			const [varName, ...rest] = line.split('=');
			return (
				<div key={i} className={styles.line}>
					<span className={styles['text-blue']}>{varName}</span>
					<span className={styles['text-white']}>=</span>
					<span className={styles['text-yellow-light']}>{rest.join('=')}</span>
				</div>
			);
		},
	},
	[RendererType.Conditionals]: {
		test: (line) => /^\s*if\s+|^\s*then\s+|^\s*else\s+|^\s*fi\s*/.test(line),
		render: (line, i) => (
			<div key={i} className={styles['text-pink']}>
				{line}
			</div>
		),
	},
	[RendererType.EchoStatements]: {
		test: (line) => line.includes('echo'),
		render: (line, i) => {
			const parts = line.split('echo');
			return (
				<div key={i} className={styles.line}>
					<span className={styles['text-white']}>{parts[0]}</span>
					<span className={styles['text-blue-light']}>echo</span>
					<span className={styles['text-yellow-light']}>{parts[1]}</span>
				</div>
			);
		},
	},
};
