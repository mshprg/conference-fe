import React, {type ComponentProps} from "react";
import {LiveKitRoom} from "@livekit/components-react";
import '@livekit/components-styles';
import RoomConference from "@/widgets/live-kit-custom/RoomConference.tsx";
import styles from './Room.module.scss';

type RoomProps = ComponentProps<typeof LiveKitRoom>

export const Room: React.FC<RoomProps> = React.memo(({ ...rest }) => {

	return (
		<div className={styles.Room}>
			<LiveKitRoom
				connect={true}
				data-lk-theme="default"
				style={{ height: '100vh' }}
				{...rest}
			>
				<RoomConference />
			</LiveKitRoom>
		</div>
	)
})