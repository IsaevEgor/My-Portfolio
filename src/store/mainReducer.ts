const defaultState = {
	animation: false
}

export const mainReducer = (state = defaultState, action:any) => {
	switch (action.type) {
		case "ANIMATION_START":
			return {...state, animation: state.animation = true}
		case "ANIMATION_STOP":
			return {...state, animation: state.animation = false}
	
		default:
			return state;
	}
}