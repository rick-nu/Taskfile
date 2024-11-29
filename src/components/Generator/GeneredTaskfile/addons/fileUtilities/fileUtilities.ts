import { GeneratorSettings } from '@/components/Generator';
import { TaskfileAddons } from '@/components/Generator/GeneredTaskfile/taskfile';
import loadTemplate from '@/helpers/loadTemplate';
import fileUtilitiesSh from './file-utilities.sh';

const fileUtilities = (settings: GeneratorSettings, addon: TaskfileAddons): void => {
	if (settings.fileUtilities) {
		addon.utilityFunctions.push(loadTemplate(fileUtilitiesSh));
	}
};

export default fileUtilities;
