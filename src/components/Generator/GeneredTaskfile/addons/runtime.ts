import { GeneratorSettings } from '@/components/Generator';
import { TaskfileAddons } from '@/components/Generator/GeneredTaskfile/taskfile';

const buildAddonRuntime = (settings: GeneratorSettings, addon: TaskfileAddons): void => {
	if (settings.runtime === 'local') {
		return;
	}

	addon.initFunctionAppend.push('task:build');

	addon.startFunction.push('docker:start');

	addon.projectSection.push(`function task:stop { ## Stop the local project
	docker:stop
}

function task:restart { ## Restart the local project
	docker:stop
	docker:start
}`);

	addon.customSections.push(`# =========================================================
## Docker
# =========================================================

function task:build { ## Build all docker compose containers
	title "Building docker compose project"
	dockercompose build
}

function docker:start {
	title "Starting docker compose project"
	dockercompose up --detach
}

function docker:stop {
	title "Stopping docker compose project"
	dockercompose down
}

function task:logs { ## Show the docker compose logs
	title "Showing local logs"
	dockercompose logs --tail="20" --follow
}

function task:dc { ## Run docker compose command <command>
	title "Docker compose $@"
	dockercompose "$@"
}

function docker:assert-running {
	if [ -z "$(dockercompose ps -q)" ]; then
		echo -e "\${RED}Oh noes, docker was not running yet, starting...\${RESET}"
		task:start
		title "Resuming task"
	fi
}

function dockercompose {
	USERID=$USERID GROUPID=$GROUPID docker compose --file ./dev/docker-compose.yml --project-name piano-player "$@"
}`);
}

export default buildAddonRuntime;
