const defaultState = {
	animation: false
}

const ANIMATION_START = "ANIMATION_START";
const ANIMATION_STOP = "ANIMATION_STOP";

export const mainReducer = (state = defaultState, action:any) => {
	switch (action.type) {
		case ANIMATION_START:
			return {...state, animation: state.animation = true}
		case ANIMATION_STOP:
			return {...state, animation: state.animation = false}
	
		default:
			return state;
	}
}

export const animationStart = () => ({type: ANIMATION_START});
export const animationStop = () => ({type: ANIMATION_STOP});