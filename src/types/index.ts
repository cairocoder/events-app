export type Topic = {
	id: number;
	name: string;
	image: string;
};

export type Event = {
	id: number;
	name: string;
	image: string;
	topicId: string;
};
