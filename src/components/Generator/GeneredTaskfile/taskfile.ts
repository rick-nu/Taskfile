import {GeneratorSettings} from "@/components/Generator";
import buildHeaderFunction from "./buildHeader";
import { renderAddonFragment, renderUtilities } from './helpers';
import loadTemplate from '@/components/Generator/loadTemplate';
import taskfileBase from './taskfile-base.sh';
import customSection from './custom-section.sh';
import renderAddons from '@/components/Generator/GeneredTaskfile/addons/addons';

export type TaskfileAddons = {
	initCheckCommands: string[];
	preInitCommands: string[];
	postInitCommands: string[];
	projectFunctions: string[];
	startCommands: string[];
	updateCommands: string[];
	customSections: string[];
	utilityFunctions: string[];
	globals: string[];
}

export const taskfile = (settings: GeneratorSettings): string => {
	const addons: TaskfileAddons = {
		initCheckCommands: [],
		preInitCommands: [],
		postInitCommands: [],
		projectFunctions: [],
		startCommands: [],
		updateCommands: [],
		customSections: [],
		utilityFunctions: [],
		globals: [],
	}

	renderAddons(settings, addons);

	return loadTemplate(taskfileBase, {
		header: buildHeaderFunction(settings.project || 'Taskfile', settings.font),
		initCheckCommands: renderAddonFragment(
			addons.initCheckCommands,
			`# Add checks to see if the project is ready for initialisation here`
		),
		preInitCommands: renderAddonFragment(addons.preInitCommands, `# Add project preparation commands here`),
		postInitCommands: renderAddonFragment(addons.postInitCommands, `# Finalize setting up the project`),
		startCommands: renderAddonFragment(
			addons.startCommands,
			'title "Run development application"\n\t# TODO: Add start commands'
		),
		updateCommands: renderAddonFragment(
			addons.updateCommands,
			'title "Run project updates"\n\t# TODO: Add project update commands here'
		),
		projectFunctions: renderAddonFragment(addons.projectFunctions, '# Add more project specific functions here'),
		customSections: renderAddonFragment(addons.customSections, loadTemplate(customSection)),
		utilitySection: renderUtilities(addons.utilityFunctions),
		globals: renderAddonFragment(addons.globals, `# Define global variables here`),
	});
}
