import {ReactElement, ReactNode} from "react";

import styles from "./desktop.module.scss";

type WindowProps = {
	children: ReactNode;
};

const Desktop = ({ children }: WindowProps): ReactElement => (
	<div className={styles.screen}>
		<div className={styles.start}></div>
		<div className={styles.desktop}>{children}</div>
	</div>
);

export default Desktop;
