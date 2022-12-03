import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { contentAnimationReducer } from "./contentAnimationReducer";
import { mainReducer } from "./mainReducer";
import { pageReducer } from "./pageReducer";

const rootReducer = combineReducers({
	mainAnimation: mainReducer,
	page: pageReducer,
	contentAnimation: contentAnimationReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())