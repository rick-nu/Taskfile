import { ReactElement } from 'react';

type ColorName = 'white' | 'purple' | 'yellow' | 'green' | 'blue' | 'pink' | 'lightYellow' | 'lightBlue' | 'gray';

export type StylesConfig = {
	line: { display: string };
	colors: Record<ColorName, { color: string }>;
};

export enum RendererType {
	EmptyLines,
	FunctionDefinitions,
	Comments,
	Variables,
	Conditionals,
	EchoStatements,
}

export type LineRenderer = {
	type: RendererType;
	test: (line: string) => boolean;
	render: (line: string, index: number) => ReactElement;
};
