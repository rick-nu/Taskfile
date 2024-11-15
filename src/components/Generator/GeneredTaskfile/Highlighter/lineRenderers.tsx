import React from 'react';

import { LineRenderer, RendererType } from './types';

import styles from './highlighter.module.css';

export const lineRenderers: LineRenderer[] = [
	{
		type: RendererType.EmptyLines,
		test: (line) => line.trim() === '',
		render: (_, i) => <div key={i}>&nbsp;</div>,
	},
	{
		type: RendererType.FunctionDefinitions,
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
	{
		type: RendererType.Comments,
		test: (line) => line.trim().startsWith('#'),
		render: (line, i) => (
			<div key={i} className={styles['text-gray']}>
				{line}
			</div>
		),
	},
	{
		type: RendererType.Variables,
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
	{
		type: RendererType.Conditionals,
		test: (line) => /^\s*if\s+|^\s*then\s+|^\s*else\s+|^\s*fi\s*/.test(line),
		render: (line, i) => (
			<div key={i} className={styles['text-pink']}>
				{line}
			</div>
		),
	},
	{
		type: RendererType.EchoStatements,
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
];
