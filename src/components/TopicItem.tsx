import React from "react";
import { Card } from "antd";
import { Topic } from "../types";
import { Link } from "react-router-dom";
import { topicsImagesFolderPath } from "../api";

const { Meta } = Card;

const TopicItem: React.FC<Topic> = (props: Topic) => {
	return (
		<Link to={`/topics/${props.id}`} key={props.id}>
			<Card
				className="topic-item"
				hoverable
				style={{ width: 360 }}
				cover={<img alt={props.name} src={topicsImagesFolderPath + props.image} />}
			>
				<Meta className="topic-item-title" title={props.name} />
			</Card>
		</Link>
	);
};

export default React.memo(TopicItem);
