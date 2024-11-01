'use client';

import { ReactElement } from 'react';
import { taskfile } from '@/components/Generator/GeneredTaskfile/taskfile';
import {useFormContext} from "react-hook-form";
import {GeneratorSettings} from "@/components/Generator/Generator";

const GeneratedTaskfile = (): ReactElement => {
	const form = useFormContext<GeneratorSettings>();

	const settings = form.watch();

	const resultTaskfile = taskfile(settings);

	return <pre>{resultTaskfile}</pre>
}

export default GeneratedTaskfile;
