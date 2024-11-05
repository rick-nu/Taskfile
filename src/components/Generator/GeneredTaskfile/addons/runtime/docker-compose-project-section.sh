function task:stop { ## Stop the local project
	docker:stop
}

function task:restart { ## Restart the local project
	docker:stop
	docker:start
}
