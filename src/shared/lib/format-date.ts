
export function formatDate(dateStr: string) {
	const date = new Date(dateStr);

	const weekday = date.toLocaleDateString('ru-RU', { weekday: 'long' });
	const time = date.toLocaleTimeString('ru-RU', {
		hour: '2-digit',
		minute: '2-digit'
	});

	const day = date.toLocaleDateString('ru-RU', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric'
	});

	return `${weekday.charAt(0).toUpperCase() + weekday.slice(1)}, ${time} (${day})`;
}