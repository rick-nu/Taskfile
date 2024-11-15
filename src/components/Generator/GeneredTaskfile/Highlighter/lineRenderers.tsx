import React from 'react';

import { LineRenderer, RendererType } from './types';
import { styles } from './styles';

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
				<div key={i} style={styles.line}>
					<span style={styles.colors.purple}>function </span>
					<span style={styles.colors.yellow}>{name}</span>
					<span style={styles.colors.white}>{rest}</span>
				</div>
			);
		},
	},
	{
		type: RendererType.Comments,
		test: (line) => line.trim().startsWith('#'),
		render: (line, i) => (
			<div key={i} style={styles.colors.gray}>
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
				<div key={i} style={styles.line}>
					<span style={styles.colors.blue}>{varName}</span>
					<span style={styles.colors.white}>=</span>
					<span style={styles.colors.lightYellow}>{rest.join('=')}</span>
				</div>
			);
		},
	},
	{
		type: RendererType.Conditionals,
		test: (line) => /^\s*if\s+|^\s*then\s+|^\s*else\s+|^\s*fi\s*/.test(line),
		render: (line, i) => (
			<div key={i} style={styles.colors.pink}>
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
				<div key={i} style={styles.line}>
					<span style={styles.colors.white}>{parts[0]}</span>
					<span style={styles.colors.lightBlue}>echo</span>
					<span style={styles.colors.lightYellow}>{parts[1]}</span>
				</div>
			);
		},
	},
];
