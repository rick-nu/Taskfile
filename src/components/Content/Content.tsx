import {ReactElement, ReactNode} from "react";

import styles from "./content.module.scss";
import Window from "@/components/Window";

type WindowProps = {
	children: ReactNode;
};

const Content = ({
	children,
}: WindowProps): ReactElement => (
	<div className={styles.content}>
		<Window>
			{children}
		</Window>
	</div>
);

export default Content;
