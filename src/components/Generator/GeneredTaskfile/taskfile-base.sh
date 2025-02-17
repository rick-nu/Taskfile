#!/bin/bash
# =========================================================
# Taskfile gives you a set of quick tasks for your project
# More info: https://github.com/Enrise/Taskfile
# =========================================================

[[header]]

# =========================================================
## Project
# =========================================================

function task:init { ## Initialise the project for local development
	[[initCheckCommands]]
	[[preInitCommands]]
	project:update
	[[postInitCommands]]
	task:help
}

function task:start { ## Start the project in development mode
	[[startCommands]]
}

function task:update { ## Update all dependencies and files
	project:update
}

function project:update {
	[[updateCommands]]
}

[[projectFunctions]]

[[customSections]][[utilitySection]]

# =========================================================
## Taskfile
# =========================================================

set -eo pipefail

BLUE=$(printf '\033[36m')
YELLOW=$(printf '\033[33m')
RED=$(printf '\033[31m')
GREEN=$(printf '\033[32m')
RESET=$(printf '\033[0m')

[[globals]]

function title {
	echo -e "\n${BLUE}=>${RESET} $1\n"
}

function task:help { ## Show all available tasks
	title "Available tasks"
	awk 'BEGIN {FS = " { [#][#][ ]?"} /^([a-zA-Z_-]*:?.*)(\{ )?[#][#][ ]?/ \
		{printf "\033[33m%-34s\033[0m %s\n", $1, $2}' $0 |\
		sed -E "s/[#]{2,}[ ]*/${RESET}/g" |\
		sed -E "s/function task:*/  /g"
	echo -e "\n${BLUE}Usage:${RESET} $0 ${YELLOW}<task>${RESET} <args>"
}

function task:shorthand { ## Create CLI shorthand task instead of ./Taskfile
	title "Creating task shorthand"
	echo -e "You're about to create ${YELLOW}/usr/local/bin/task${RESET} that requires ${RED}root${RESET} permission..."
	sudo curl --location --silent --output /usr/local/bin/task https://enri.se/taskfile-bin
	sudo chmod +x /usr/local/bin/task
	echo -e "${BLUE}You can now use:${RESET} task ${YELLOW}<task>${RESET} <args>"
}

banner
if [[ ! "$(declare -F task:${@-help})" ]]; then
	title "Task not found"
	echo -e "Task ${RED}$1${RESET} doesn't exist."
	task:help
	exit 1
fi
task:${@-help}
