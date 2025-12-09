import React from "react";
import {type RootState, useActions} from "@/shared/store";
import {useSelector} from "react-redux";
import {PopupTemplate} from "@/widgets/PopupTemplate";
import styles from './MessagePopup.module.scss';
import {Button} from "@/shared/ui/Button";
import CloseIcon from "@/shared/assets/icons/CloseIcon.tsx";

export const MessagePopup = React.memo(() => {

	const messagePopupState = useSelector((state: RootState) => state.message);
	const {closeMessagePopup} = useActions();

	return (
		<PopupTemplate
			visible={messagePopupState?.visibility}
			close={closeMessagePopup}
			hideOnOverlay
			dialogAttrs={{ className: styles.popup }}
		>
			<div className={`flex items-center justify-between font-bold ${styles.header}`}>
				<h2>
					{messagePopupState?.title}
				</h2>
				<Button
					title="Закрть окно"
					aria-label="Нажмите, чтобы закрыть окно"
					onClick={() => closeMessagePopup()}
					className={styles.buttonClose}
				>
					<CloseIcon />
				</Button>
			</div>
			<p className={styles.text}>
				{messagePopupState?.description}
			</p>
			<div className="flex mt-auto">
				<Button
					title="Закрть окно"
					aria-label="Нажмите, чтобы закрыть окно"
					onClick={() => closeMessagePopup()}
					className={styles.buttonBottomClose}
				>
					Закрыть
				</Button>
			</div>
		</PopupTemplate>
	)
})