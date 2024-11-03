import {GeneratorSettings} from "@/components/Generator";
import buildHeaderFunction from "./buildHeader";
import buildAddonRuntime from './addons/runtime';
import { renderAddonFragment, renderUtilities } from './helpers';

export type TaskfileAddons = {
	initFunctionAppend: string[];
	initFunctionPrepend: string[];
	projectSection: string[];
	startFunction: string[];
	updateFunction: string[];
	customSections: string[];
	utilitySection: string[];
	globals: string[];
}

export const taskfile = (settings: GeneratorSettings): string => {
	const addons: TaskfileAddons = {
		initFunctionAppend: [],
		initFunctionPrepend: [],
		projectSection: [],
		startFunction: [],
		updateFunction: [],
		customSections: [],
		utilitySection: [],
		globals: [],
	}

	buildAddonRuntime(settings, addons);

	return `#!/bin/bash
# =========================================================
# Taskfile gives you a set of quick tasks for your project
# More info: https://github.com/Enrise/Taskfile
# =========================================================

${buildHeaderFunction(settings.project || 'Taskfile', settings.font)}

# =========================================================
## Project
# =========================================================

function task:init { ## Initialise the project for local development
	${renderAddonFragment(addons.initFunctionAppend, `# TODO: Add project preparation checks here`)}
	project:update
	${renderAddonFragment(addons.initFunctionPrepend, `# TODO: Add commands to complete initialisation here`)}
	task:help
}

function task:start { ## Start the project in development mode
	${renderAddonFragment(addons.startFunction, `title "Run development application"
	# TODO: Add commands to start your local project here`)}
}

function task:update { ## Update all dependencies and files
	project:update
}

function project:update {
	${renderAddonFragment(addons.updateFunction, `title "Run project updates"
	# TODO: Add project udpate commands here`)}
}

${renderAddonFragment(addons.projectSection, `# TODO: Add more project specific commands here`)}

${renderAddonFragment(addons.customSections, `# =========================================================
## Custom section
# =========================================================

function task:custom { ## This is a custom task definition
	title "Custom function"
	echo -e "\${YELLOW}"Add your custom sections here\${RESET}";
}`)}${renderUtilities(addons.utilitySection)}

# =========================================================
## Taskfile
# =========================================================

set -eo pipefail

BLUE=$(printf '\\033[36m')
YELLOW=$(printf '\\033[33m')
RED=$(printf '\\033[31m')
GREEN=$(printf '\\033[32m')
RESET=$(printf '\\033[0m')

${renderAddonFragment(addons.globals, `# This is where you define global variables`)}

function title {
	echo -e "\\n\${BLUE}=>\${RESET} $1\\n"
}

function task:help { ## Show all available tasks
	title "Available tasks"
	awk 'BEGIN {FS = " { [#][#][ ]?"} /^([a-zA-Z_-]*:?.*)(\\{ )?[#][#][ ]?/ \\
		{printf "\\033[33m%-34s\\033[0m %s\\n", $1, $2}' $0 |\\
		sed -E "s/[#]{2,}[ ]*/\${RESET}/g" |\\
		sed -E "s/function task:*/  /g"
	echo -e "\\n\${BLUE}Usage:\${RESET} $0 \${YELLOW}<task>\${RESET} <args>"
}

function task:shorthand { ## Create CLI shorthand task instead of ./Taskfile
	title "Creating task shorthand"
	if [ -f /usr/local/bin/task ]
	then
		echo "/usr/local/bin/task already exists."
	else
		echo -e "You are about to create /usr/local/bin/task that requires root permission..."
		sudo curl --location --silent --output /usr/local/bin/task https://enri.se/taskfile-bin
		sudo chmod +x /usr/local/bin/task
	fi
	echo -e "\${BLUE}You can now use:\${RESET} task \${YELLOW}<task>\${RESET} <args>"
}

# Execute tasks
banner
if [[ "$(declare -fF task:\${@-help})" ]]; then task:\${@-help}; else task:help; exit 1; fi
`;
}
