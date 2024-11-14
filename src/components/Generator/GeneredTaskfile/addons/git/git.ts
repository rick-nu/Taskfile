import { GeneratorSettings } from '@/components/Generator';
import { TaskfileAddons } from '@/components/Generator/GeneredTaskfile/taskfile';
import loadTemplate from '@/helpers/loadTemplate';
import gitLinkHooks from './git-link-hooks.sh';
import githubFunction from './github-pr-function.sh';
import gitlabFunction from './gitlab-mr-function.sh';

const git = (settings: GeneratorSettings, addon: TaskfileAddons): void => {
	if (settings.linkGitHooks) {
		addon.projectFunctions.push(loadTemplate(gitLinkHooks));

		addon.initCheckCommands.push('project:git-config');
	}

	switch (settings.checkoutGitRequest) {
		case 'github':
			addon.projectFunctions.push(loadTemplate(githubFunction));
			break;
		case 'gitlab':
			addon.projectFunctions.push(loadTemplate(gitlabFunction));
			break;
	}
};

export default git;
