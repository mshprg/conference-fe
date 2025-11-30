import React, {useCallback, useEffect, useState} from "react";
import styles from './Conference.module.scss';
import {Button} from "@/shared/ui/Button";
import {VideoIcon} from "@/shared/assets/icons/VideoIcon.tsx";
import {validateToken} from "@/shared/api/video";
import type {ValidateTokenResponse} from "@/shared/api/video/types.ts";
import {useSearchParams} from "react-router-dom";
import {formatDate} from "@/shared/lib/format-date.ts";
import {Room} from "@/pages/Conference/widgets/Room/ui/Room.tsx";
import {LoadingRotate} from "@/shared/ui/LoadingRotate";
import {motion} from "framer-motion";

export const Conference = React.memo(() => {

	const [searchParams] = useSearchParams();
	const token: string = searchParams.get('act') || "";

	const [conferenceData, setConferenceData] = useState<ValidateTokenResponse | null>(null);
	const [error, setError] = useState<boolean>(false);
	const [isConnect, setIsConnect] = useState<boolean>(false);

	const handleDisconnect = useCallback(() => {
		setIsConnect(false);
	}, []);

	async function getData() {
		try {
			const response = await validateToken(token);

			setConferenceData(response);
		} catch (e) {
			console.error(e);
		}
	}

	useEffect(() => {
		getData();
	}, []);

	if (error) {
		// TODO: Вывести ошибку
	}

	if (!conferenceData) {
		return (
			<section className="w-full h-full flex items-center justify-center">
				<LoadingRotate className={styles.loadingRotate} />
			</section>
		)
	}

	return (
		<section className="w-full h-full flex items-center justify-center">
			{isConnect && (
				<Room
					serverUrl={conferenceData.liveKitUrl}
					token={token}
					onDisconnected={handleDisconnect}
				/>
			)}
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				className={`flex flex-col ${styles.mainBlock}`}
			>
				<h1 className="text-center">
					Подключение
				</h1>
				<div className={`flex flex-col ${styles.fields}`}>
					<div className={`flex flex-col ${styles.fieldBlock}`}>
						<h2>Название конференции</h2>
						<p>{conferenceData.name}</p>
					</div>
					{conferenceData.description && (
						<div className={`flex flex-col ${styles.fieldBlock}`}>
							<h2>Описание</h2>
							<p>{conferenceData.description}</p>
						</div>
					)}
					<div className={`grid ${styles.grid}`}>
						<div className={`flex flex-col ${styles.fieldBlock}`}>
							<h2>Начало</h2>
							<p>{formatDate(conferenceData.timeStart)}</p>
						</div>
						<div className={`flex flex-col ${styles.fieldBlock}`}>
							<h2>Окончание</h2>
							<p>{formatDate(conferenceData.timeEnd)}</p>
						</div>
					</div>
				</div>
				<Button
					title="Подключиться к конференции"
					aria-label="Нажмите, чтобы подключиться к конференции"
					className={styles.connectButton}
					onClick={() => setIsConnect(true)}
				>
					Подключиться
					<VideoIcon />
				</Button>
			</motion.div>
		</section>
	)
})