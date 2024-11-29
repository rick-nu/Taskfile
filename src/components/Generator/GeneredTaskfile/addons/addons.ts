import {GeneratorSettings} from '@/components/Generator';
import {TaskfileAddons} from '@/components/Generator/GeneredTaskfile/taskfile';

import runtime from './runtime';
import git from './git';
import fileUtilities from "./fileUtilities";

/**
 * Render addons for the Taskfile based on the generator settings
 *
 * @param settings Generator settings based on selected settings in the UI
 * @param addons Object reference you can extend by pushing elements to its arrays
 */
const renderAddons = (settings: GeneratorSettings, addons: TaskfileAddons): void => {
	runtime(settings, addons);
	git(settings, addons);
	fileUtilities(settings, addons);
};

export default renderAddons;
