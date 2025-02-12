import {GeneratorSettings} from '@/components/Generator';
import {TaskfileAddons} from '@/components/Generator/GeneredTaskfile/taskfile';
import loadTemplate from '@/helpers/loadTemplate';
import appUtilitiesSh from './app-utilities.sh';

const appUtilities = (settings: GeneratorSettings, addon: TaskfileAddons): void => {
	if (settings.appUtilities) {
		addon.utilityFunctions.push(loadTemplate(appUtilitiesSh));
	}
};

export default appUtilities;
