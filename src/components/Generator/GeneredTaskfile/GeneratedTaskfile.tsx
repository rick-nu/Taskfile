'use client';

import { ReactElement, useState } from 'react';
import { taskfile } from '@/components/Generator/GeneredTaskfile/taskfile';
import { useFormContext } from 'react-hook-form';
import { GeneratorSettings } from '@/components/Generator/Generator';
import CopyToClipboard from '@/components/Generator/GeneredTaskfile/Copy';
import { highlighter } from './Highlighter';

const GeneratedTaskfile = (): ReactElement => {
	const [showHighlighting, setShowHighlighting] = useState(true);

	const form = useFormContext<GeneratorSettings>();

	const settings = form.watch();

	const resultTaskfile = taskfile(settings);

	return (
		<>
			<CopyToClipboard onCopy={() => navigator.clipboard.writeText(resultTaskfile)} />
			<pre onClick={() => setShowHighlighting(!showHighlighting)}>
				{showHighlighting ? highlighter(resultTaskfile) : resultTaskfile}
			</pre>
		</>
	);
};

export default GeneratedTaskfile;
