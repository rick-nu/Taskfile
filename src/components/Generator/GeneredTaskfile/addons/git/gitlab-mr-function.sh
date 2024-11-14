function task:mr { ## Check out merge request <number> and update
	project:checkout-mr $1
	project:update
}

function project:checkout-mr {
	title "Checking out merge request"
	if [ -z "$1" ]; then
		echo "You need to provide a merge request number to check out."
		echo -e "${BLUE}Usage:${RESET} $0 mr ${YELLOW}<number>${RESET}"
		exit 1
	fi
	echo "Checking out merge request $1..."
	git fetch origin refs/merge-requests/$1/head:refs/remotes/origin/merge-requests/$1
	git checkout origin/merge-requests/$1
}
