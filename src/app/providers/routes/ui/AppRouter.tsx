import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "../../../../shared/config/routeConfig/routeConfig.tsx";
import {motion} from 'framer-motion'
import styles from './AppRouter.module.scss';

export const AppRouter = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{Object.values(routeConfig).map(({path, element}) =>
					<Route
						path={path}
						key={path}
						element={(
							<motion.main
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								className={styles.main}
							>
								{element}
							</motion.main>
						)}
					/>
				)}
			</Routes>
		</Suspense>
	)
}