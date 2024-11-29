function file:ensure { # Abort if the desired file is not found
	if [ ! -f $1 ]; then
		echo -e "${RED}Missing required file: ${YELLOW}$1${RESET}"
		exit 1
	fi
}

function file:ensure-copy { # file:ensure-copy $COPY_TARGET $COPY_SOURCE
    if [ ! -f $1 ]; then
		cp $2 $1;
		echo -e "Created copy of ${YELLOW}$2${RESET} to create ${GREEN}$1${RESET}.";
	else
		echo "${GREEN}$1${RESET} is present.";
    fi
}
