import { GeneratorSettings } from '@/components/Generator';
import { TaskfileAddons } from '@/components/Generator/GeneredTaskfile/taskfile';
import loadTemplate from '@/helpers/loadTemplate';
import dockerComposeSection from './docker-compose-section.sh';
import dockerComposeProjectSection from './docker-compose-project-section.sh';
import developmentProxySection from './development-proxy-section.sh';
import slugify from '@/helpers/slugify';
import renderFragment from '@/helpers/renderFragment';

const runtime = (settings: GeneratorSettings, addon: TaskfileAddons): void => {
	if (!settings.runtime || settings.runtime === 'local') {
		return;
	}

	const project = slugify(settings.project || 'my-project');
	const network = `${project}-network`;

	addon.preInitCommands.push('task:build');
	addon.preInitCommands.push('task:start');

	startCommands(settings, addon);

	addon.projectFunctions.push(loadTemplate(dockerComposeProjectSection, {
		stopCommands: renderFragment(stopCommands(settings), '', true),
		restartCommands: renderFragment(restartCommands(settings), '', true),
	}));

	addon.customSections.push(loadTemplate(dockerComposeSection, {project}));

	addon.globals.push(`USERID=\$(id -u)\nGROUPID=\$(id -g)\nNETWORK="${network}"`);

	if (settings.developmentProxy) {
		addon.customSections.push(loadTemplate(developmentProxySection));
	}
}

const startCommands = (settings: GeneratorSettings, addon: TaskfileAddons): void => {
	if (settings.developmentProxy) {
		addon.startCommands.push('proxy:start');
	}

	addon.startCommands.push('docker:start');

	if (settings.developmentProxy) {
		addon.startCommands.push('proxy:connect');
	}
}

const stopCommands = (settings: GeneratorSettings): string[] => {
	const commands: string[] = [];

	if (settings.developmentProxy) {
		commands.push('proxy:disconnect');
	}

	commands.push('docker:stop');

	return commands;
}

const restartCommands = (settings: GeneratorSettings): string[] => {
	const commands = stopCommands(settings);

	if (settings.developmentProxy) {
		commands.push('proxy:start');
	}

	commands.push('docker:start');

	if (settings.developmentProxy) {
		commands.push('proxy:connect');
	}

	return commands;
}

export default runtime;
