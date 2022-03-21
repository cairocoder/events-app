import React from "react";
import { useSelector } from "react-redux";
import TopicItem from "./TopicItem";
import { Topic } from "../types";

const TopicDeck: React.FC = () => {
	const { topicList, searchTerm } = useSelector((state: any) => ({
		topicList: state.topics.topicList,
		searchTerm: state.topics.searchTerm,
	}));

	const Topics = topicList
		.filter((topic: Topic) => searchTerm === "" || topic.name.toLowerCase().includes(searchTerm.toLowerCase()))
		.map((topic: Topic) => {
			return <TopicItem key={topic.id} {...topic} />;
		});

	return <div className="topic-deck">{Topics}</div>;
};

export default React.memo(TopicDeck);
