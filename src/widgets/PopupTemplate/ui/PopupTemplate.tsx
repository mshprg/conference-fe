import React, {type ComponentProps, useCallback} from "react";
import styles from './PopupTemplate.module.scss';
import {AnimatePresence, motion} from "framer-motion";
import classNames from "classnames";

interface PopupTemplateProps {
	visible?: boolean;
	close?: () => void;
	hideOnOverlay?: boolean;
	overlayAttrs?: ComponentProps<typeof motion.div>,
	dialogAttrs?: ComponentProps<typeof motion.dialog>
}

export const PopupTemplate: React.FC<React.PropsWithChildren<PopupTemplateProps>> = React.memo((
	{ children, visible, overlayAttrs, dialogAttrs, close, hideOnOverlay }
) => {

	const onClickOverlay = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (close && hideOnOverlay) {
			close();
		}

		if (overlayAttrs?.onClick) {
			overlayAttrs.onClick(e);
		}
	}, [close, hideOnOverlay, overlayAttrs]);

	return (
		<AnimatePresence>
			{visible && (
				<motion.div
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					exit={{opacity: 0}}
					tabIndex={-1}
					aria-modal={true}
					onClick={(e) => onClickOverlay(e)}
					{...overlayAttrs}
					className={classNames(styles.displayOverlay, overlayAttrs?.className)}
				>
					<motion.dialog
						initial={{ y: "5%" }}
						animate={{ y: 0 }}
						exit={{ y: "5%" }}
						transition={{ duration: 0.4, type: "spring" }}
						{...dialogAttrs}
						className={classNames(styles.popup, dialogAttrs?.className)}
						onClick={(e) => e.stopPropagation()}
					>
						{children}
					</motion.dialog>
				</motion.div>
			)}
		</AnimatePresence>
	)
})