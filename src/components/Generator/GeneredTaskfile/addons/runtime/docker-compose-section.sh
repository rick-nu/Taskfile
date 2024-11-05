# =========================================================
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
	title "Following local logs"
	dockercompose logs --tail="20" --follow
}

function task:dc { ## Run docker compose command <command>
	title "Docker compose $@"
	dockercompose "$@"
}

function docker:assert-running {
	if [ -z "$(dockercompose ps -q)" ]; then
		echo -e "${RED}Oh noes, docker was not running yet, starting...${RESET}"
		task:start
		title "Resuming task"
	fi
}

function dockercompose {
	USERID=$USERID GROUPID=$GROUPID docker compose --file ./dev/docker-compose.yml --project-name [[project]] "$@"
}
