import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { contentAnimationReducer } from "./contentAnimationReducer";
import { mainReducer } from "./mainReducer";
import { pageReducer } from "./pageReducer";
import { playReducer } from "./playReducer";

const rootReducer = combineReducers({
	mainAnimation: mainReducer,
	page: pageReducer,
	contentAnimation: contentAnimationReducer,
	play: playReducer
})

export const store = createStore(rootReducer, composeWithDevTools())