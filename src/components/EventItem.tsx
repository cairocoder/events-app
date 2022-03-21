import React from "react";
import { Card } from "antd";
import { Event } from "../types";
import { eventsImagesFolderPath } from "../api";

const { Meta } = Card;

const EventItem: React.FC<Event> = (props: Event) => {
	return (
		<Card
			className="event-item"
			style={{ width: 360 }}
			cover={<img alt={props.name} src={eventsImagesFolderPath + props.image} />}
		>
			<Meta className="event-item-title" title={props.name} />
		</Card>
	);
};

export default React.memo(EventItem);
