import React from "react";
import { useSelector } from "react-redux";
import EventItem from "./EventItem";
import { Event } from "../types";
import { useParams } from "react-router-dom";

const EventDeck: React.FC = () => {
	let params = useParams();

	const { eventList, searchTerm } = useSelector((state: any) => ({
		eventList: state.events.eventList,
		searchTerm: state.events.searchTerm,
	}));

	const Events = eventList
		.filter(
			(event: Event) =>
				(searchTerm === "" || event.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
				event.topicId == params.topicId
		)
		.map((event: Event) => {
			return <EventItem key={event.id} {...event} />;
		});

	return <div className="event-deck">{Events}</div>;
};

export default React.memo(EventDeck);
