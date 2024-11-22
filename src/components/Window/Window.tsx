import {ReactElement, ReactNode} from "react";

import styles from "./window.module.scss";

type WindowProps = {
	children: ReactNode;
	className?: string;
	dark?: boolean;
};

const Window = ({
	children,
	className = "",
	dark = false,
}: WindowProps): ReactElement => (
	<div className={`${styles.window} ${className} ${dark && styles.dark}`}>
		<div className={styles.topBar}>
			<div />
			<div />
			<div />
		</div>
		<div className={`${styles.content}`}>{children}</div>
	</div>
);

export default Window;
