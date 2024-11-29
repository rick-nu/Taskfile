import {ReactElement} from 'react';

import styles from './content.module.scss';
import Window from '@/components/Window';
import Markdown from "markdown-to-jsx";
import {highlighter} from "@/components/Generator/GeneredTaskfile/Highlighter";

type WindowProps = {
	content: string;
};

const Content = ({ content }: WindowProps): ReactElement => (
	<div className={styles.container}>
		<Window>
			<Markdown className={styles.content} options={{
				overrides: {
					pre: (original) => (<pre>{highlighter(original.children.props.children)}</pre>),
					img: ({alt, src}) => (<img className={styles.image} src={src.replace('public/', '/')} alt={alt} />),
					a: ({href, props, children}) => (<a href={href} target="_blank" {...props}>{children}</a>),
				},
			}}>{content}</Markdown>
		</Window>
	</div>
);

export default Content;
