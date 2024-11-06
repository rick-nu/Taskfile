# =========================================================
# Development proxy
# https://github.com/Enrise/DevelopmentProxy
# =========================================================

function proxy:start {
	title "Starting development proxy"
    curl --silent --location https://enri.se/development-proxy-start | sh
}

function proxy:connect {
	title "Connecting development proxy nextwork"
    docker network connect $NETWORK development-proxy || true
    echo "Connected docker network."
}

function proxy:disconnect {
	title "Disconnecting development proxy nextwork"
    docker network disconnect $NETWORK development-proxy || true
    echo "Disconnected docker network."
}
