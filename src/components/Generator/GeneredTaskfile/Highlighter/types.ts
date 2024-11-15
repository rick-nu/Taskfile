import { ReactElement } from 'react';

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
