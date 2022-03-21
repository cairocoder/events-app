import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { eventsReducer, topicsReducer } from "./reducers";

export const rootReducer = combineReducers({ topics: topicsReducer, events: eventsReducer });

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
	const middlewares = [thunkMiddleware];
	const middleWareEnhancer = applyMiddleware(...middlewares);

	const store = createStore(rootReducer, composeWithDevTools(middleWareEnhancer));

	return store;
}
