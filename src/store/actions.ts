import { fetchTopics, fetchEvents } from "../api";

export const LOAD_TOPICS_ACTION = "LOAD_TOPICS";
export const LOAD_EVENTS_ACTION = "LOAD_EVENTS";
export const SET_TOPICS_SEARCH_TERM_ACTION = "SET_TOPICS_SEARCH_TERM";
export const SET_EVENTS_SEARCH_TERM_ACTION = "SET_EVENTS_SEARCH_TERM";

export const fetchTopicsAction = () => (dispatch: any) => {
	fetchTopics()
		.then((topics) => dispatch({ type: LOAD_TOPICS_ACTION, payload: topics }))
		.catch((err) => console.log(err));
};

export const fetchEventsAction = () => (dispatch: any) => {
	fetchEvents()
		.then((events) => dispatch({ type: LOAD_EVENTS_ACTION, payload: events }))
		.catch((err) => console.log(err));
};
