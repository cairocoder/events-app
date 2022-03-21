import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchEventsAction } from "../store/actions";
import EventDeck from "./EventDeck";
import Header from "./Header";
import { SET_EVENTS_SEARCH_TERM_ACTION } from "../store/actions";
import { Link } from "react-router-dom";

const Events: React.FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchEventsAction());
	}, [dispatch]);

	return (
		<div className="wrapper">
			<Link to="/"> Back </Link>
			<Header action={SET_EVENTS_SEARCH_TERM_ACTION} type="events" />
			<EventDeck />
		</div>
	);
};
export default Events;
