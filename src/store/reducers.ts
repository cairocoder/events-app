import { Event, Topic } from "../types";

import {
	LOAD_EVENTS_ACTION,
	LOAD_TOPICS_ACTION,
	SET_TOPICS_SEARCH_TERM_ACTION,
	SET_EVENTS_SEARCH_TERM_ACTION,
} from "./actions";

interface EventsState {
	eventList: Event[];
	searchTerm: string;
}

interface TopicsState {
	topicList: Topic[];
	searchTerm: string;
}

const eventsInitialState: EventsState = {
	eventList: [],
	searchTerm: "",
};

const topicsInitialState: TopicsState = {
	topicList: [],
	searchTerm: "",
};

export function eventsReducer(state: EventsState = eventsInitialState, action: any) {
	switch (action.type) {
		case LOAD_EVENTS_ACTION:
			return {
				eventList: action.payload,
				searchTerm: "",
			} as EventsState;
		case SET_EVENTS_SEARCH_TERM_ACTION:
			return { ...state, searchTerm: action.payload };
		default:
			return state;
	}
}

export function topicsReducer(state: TopicsState = topicsInitialState, action: any) {
	switch (action.type) {
		case LOAD_TOPICS_ACTION:
			return {
				topicList: action.payload,
				searchTerm: "",
			} as TopicsState;
		case SET_TOPICS_SEARCH_TERM_ACTION:
			return { ...state, searchTerm: action.payload };
		default:
			return state;
	}
}
