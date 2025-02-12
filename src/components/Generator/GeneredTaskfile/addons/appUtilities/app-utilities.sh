function app:ensure {
    if [ ! $(which "$1") ]; then
		echo "Missing required application ${RED}$1${RESET}. Install it before tying again."
		exit 1
    fi
}
