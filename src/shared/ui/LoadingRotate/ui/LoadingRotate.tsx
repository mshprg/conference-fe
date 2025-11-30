import React from "react";
import ProcessIcon from "@/shared/assets/icons/ProgressIcon";
import classNames from "classnames";

interface LoadingRotateProps {
	className?: string;
}

export const LoadingRotate: React.FC<LoadingRotateProps> = React.memo(({className}) => {

	return (
		<ProcessIcon
			className={classNames('loadingRotate', className)}
		/>
	);
});