import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTopicsAction } from "../store/actions";
import TopicDeck from "./TopicDeck";
import Header from "./Header";
import { SET_TOPICS_SEARCH_TERM_ACTION } from "../store/actions";

const Topics: React.FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTopicsAction());
	}, [dispatch]);

	return (
		<div className="wrapper">
			<Header action={SET_TOPICS_SEARCH_TERM_ACTION} type="topics" />
			<TopicDeck />
		</div>
	);
};
export default Topics;
