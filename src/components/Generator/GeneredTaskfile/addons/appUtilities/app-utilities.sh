function app:ensure { # Abort if the desired program is not installed
	if [ ! $(which "$1") ]; then
		echo "Missing required application ${RED}$1${RESET}. Install it before tying again."
		exit 1
	else
		echo "Application ${GREEN}$1${RESET} is installed.";
	fi
}
