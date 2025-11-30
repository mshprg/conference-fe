import React from "react";
import styles from "./Button.module.scss";
import {LoadingRotate} from "@/shared/ui/LoadingRotate";
import classNames from "classnames";

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	clickable?: boolean;
	loading?: boolean;
	loadingComponent?: React.ReactNode;
	children?: React.ReactNode;
}

export const Button: React.FC<IButtonProps> = React.memo((
	{
		clickable = true,
		loading = false,
		loadingComponent = <LoadingRotate className={styles.progress} />,
		children,
		...rest
	}
) => {

	// const [sizeWithoutLoading, setSizeWithoutLoading] = useState({width: 0, height: 0});
	const className = rest.className || '';

	return (
		<button
			{...rest}
			className={classNames(styles.componentButton, className, !clickable || loading ? styles.nonClickable : "")}
		>
			{loading ? loadingComponent : children}
		</button>
	);
});