'use client';

import { ReactElement } from 'react';
import { taskfile } from '@/components/Generator/GeneredTaskfile/taskfile';
import { useFormContext } from 'react-hook-form';
import { GeneratorSettings } from '@/components/Generator/Generator';
import CopyToClipboard from '@/components/Generator/GeneredTaskfile/Copy';
import { highlighter } from './Highlighter';

const GeneratedTaskfile = (): ReactElement => {
	const form = useFormContext<GeneratorSettings>();

	const settings = form.watch();

	const resultTaskfile = taskfile(settings);

	return (
		<>
			<CopyToClipboard onCopy={() => navigator.clipboard.writeText(resultTaskfile)} />
			<pre>{highlighter(resultTaskfile)}</pre>
		</>
	);
};

export default GeneratedTaskfile;
