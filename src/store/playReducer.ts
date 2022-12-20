import { type } from "os";

const defaultState = {
	startPlay: false
}
const START_PLAY = "START_PLAY";
const STOP_PLAY = "STOP_PLAY";

export const playReducer = (state = defaultState, action:any) => {
	switch (action.type) {
		case START_PLAY:
			return {...state, startPlay: state.startPlay = true}
		case STOP_PLAY:
			return {...state, startPlay: state.startPlay = false}
		default:
			return state;
	}
}

export const startPlay = () => ({type: START_PLAY});
export const stopPlay = () => ({type: STOP_PLAY})