import { GeneratorSettings } from '@/components/Generator';
import { TaskfileAddons } from '@/components/Generator/GeneredTaskfile/taskfile';
import loadTemplate from '@/helpers/loadTemplate';
import dockerComposeSection from './docker-compose-section.sh';
import dockerComposeProjectSection from './docker-compose-project-section.sh';
import slugify from '@/helpers/slugify';

const runtime = (settings: GeneratorSettings, addon: TaskfileAddons): void => {
	if (!settings.runtime || settings.runtime === 'local') {
		return;
	}

	const project = slugify(settings.project || 'my-project');
	const network = `${project}-network`;

	addon.preInitCommands.push('task:build');
	addon.preInitCommands.push('task:start');

	addon.startCommands.push('docker:start');

	addon.projectFunctions.push(loadTemplate(dockerComposeProjectSection));

	addon.customSections.push(loadTemplate(dockerComposeSection, {project}));

	addon.globals.push(`USERID=\$(id -u)\nGROUPID=\$(id -g)\nNETWORK="${network}"`);

	if (settings.developmentProxy) {
		addon.customSections.push('# GENERATOR TODO: Add development proxy section to extend docker');
	}
}

export default runtime;
