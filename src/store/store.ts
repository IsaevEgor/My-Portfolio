import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { mainReducer } from "./mainReducer";
import { pageReducer } from "./pageReducer";

const rootReducer = combineReducers({
	mainAnimation: mainReducer,
	page: pageReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())