'use client';

import { ReactElement } from 'react';
import { taskfile } from '@/components/Generator/GeneredTaskfile/taskfile';

const GeneratedTaskfile = (): ReactElement => {
	return <pre>{taskfile()}</pre>
}

export default GeneratedTaskfile;
