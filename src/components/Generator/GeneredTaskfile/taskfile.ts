import {GeneratorSettings} from "@/components/Generator";
import buildHeaderFunction from "./buildHeader";

export const taskfile = (settings: GeneratorSettings): string => `#!/bin/bash
# =========================================================
# Taskfile gives you a set of quick tasks for your project
# More info: https://github.com/Enrise/Taskfile
# =========================================================

# TODO...

# =========================================================
## Taskfile
# =========================================================

set -eo pipefail

BLUE=$(printf '\\033[36m')
YELLOW=$(printf '\\033[33m')
RED=$(printf '\\033[31m')
GREEN=$(printf '\\033[32m')
RESET=$(printf '\\033[0m')

function title {
	echo -e "\\n\${BLUE}=>\${RESET} $1\\n"
}

${buildHeaderFunction(settings.project || 'Taskfile', settings.font)}

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
