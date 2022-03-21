import React from "react";
import { PageHeader, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";

const Header: React.FC<{ action: string; type: string }> = ({ action, type }) => {
	const { searchTerm } = useSelector((state: any) => ({
		searchTerm: state[type].searchTerm,
	}));
	const dispatch = useDispatch();

	const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({ type: action, payload: event.target.value });
	};

	let title = "";

	type === "events" ? (title = "Events") : (title = "Topics");

	return (
		<PageHeader className="page-header" title={title}>
			<div className="header-content">
				<Input
					className="search-input"
					onChange={onSearch}
					value={searchTerm}
					size="default"
					placeholder="Search..."
				/>
			</div>
		</PageHeader>
	);
};

export default Header;
