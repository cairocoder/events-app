import React from "react";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import "./App.css";
import Topics from "./components/Topics";
import Events from "./components/Events";
import configureStore from "./store";
import { Route, Routes } from "react-router-dom";

const store = configureStore();

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<Routes>
				<Route path="/" element={<Topics />} />
				<Route path="topics/:topicId" element={<Events />} />
				<Route
					path="*"
					element={
						<main style={{ padding: "1rem" }}>
							<p>There's nothing here!</p>
						</main>
					}
				/>
			</Routes>
		</Provider>
	);
};

export default App;
