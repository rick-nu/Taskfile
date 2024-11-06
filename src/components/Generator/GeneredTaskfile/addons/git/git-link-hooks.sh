function project:git-config {
	title "Setting git configuration"
	git config --local core.hooksPath dev/git-hooks
	echo -e "Git hooks directory is set to ${YELLOW}./dev/git-hooks${RESET}."
}
