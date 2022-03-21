export async function fetchTopics(): Promise<any> {
	const response = await fetch("/topics.json");
	const data = await response.json();
	return data;
}

export async function fetchEvents(): Promise<any> {
	const response = await fetch("/events.json");
	const data = await response.json();
	return data;
}

export const topicsImagesFolderPath = "/images/topics/";
export const eventsImagesFolderPath = "/images/events/";
