function file:ensure { # Abort if the desired file is not found
	if [ ! -f $1 ]; then
		echo -e "Missing required file ${RED}$1${RESET}, make sure it is created."
		exit 1
	else
		echo "File ${GREEN}$1${RESET} is present.";
	fi
}

function file:ensure-copy { # file:ensure-copy $COPY_DESTINATION $SOURCE
	if [ ! -f $1 ]; then
		cp $2 $1;
		echo -e "Created copy of ${YELLOW}$2${RESET} to create required file ${GREEN}$1${RESET}.";
	else
		echo "File ${GREEN}$1${RESET} is present.";
	fi
}
