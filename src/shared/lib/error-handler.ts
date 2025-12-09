import axios, {type AxiosError} from "axios";

export function errorHandler(
	{error, openMessagePopup}: {
		error: AxiosError,
		openMessagePopup: ({title, description}: {title: string, description: string}) => void
	}
) {
	if (axios.isAxiosError(error)) {
		const data = error.response?.data as {code: string | undefined};
		switch (data.code) {
			case 'ERR_JWT_EXPIRED':
				openMessagePopup({
					title: 'Ошибка',
					description: 'Время конференции истекло, создайте новую конференцию или напишите вашему администратору'
				})
				break;
			default:
				break;
		}
	}
}