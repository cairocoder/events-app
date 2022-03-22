// Get all topics
export async function fetchTopics(): Promise<any> {
	const response = await fetch("/topics.json");
	const data = await response.json();
	return data;
}

// Get all events
export async function fetchEvents(): Promise<any> {
	const response = await fetch("/events.json");
	const data = await response.json();
	return data;
}

// Topic images folder path
export const topicsImagesFolderPath = "/images/topics/";
// Events images folder path
export const eventsImagesFolderPath = "/images/events/";
