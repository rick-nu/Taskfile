import { GeneratorSettings } from '@/components/Generator';
import { TaskfileAddons } from '@/components/Generator/GeneredTaskfile/taskfile';
import loadTemplate from '@/components/Generator/loadTemplate';
import dockerComposeSection from './docker-compose-section.sh';
import dockerComposeProjectSection from './docker-compose-project-section.sh';

const runtime = (settings: GeneratorSettings, addon: TaskfileAddons): void => {
	if (!settings.runtime || settings.runtime === 'local') {
		return;
	}

	addon.preInitCommands.push('task:build');

	addon.startCommands.push('docker:start');

	addon.projectFunctions.push(loadTemplate(dockerComposeProjectSection));

	addon.customSections.push(loadTemplate(dockerComposeSection));
}

export default runtime;
