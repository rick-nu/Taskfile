'use client';

import { ReactElement } from 'react';
import { taskfile } from '@/components/Generator/GeneredTaskfile/taskfile';

const GeneratedTaskfile = (): ReactElement => {
	const resultTaskfile = taskfile();

	return <pre>{resultTaskfile}</pre>
}

export default GeneratedTaskfile;
