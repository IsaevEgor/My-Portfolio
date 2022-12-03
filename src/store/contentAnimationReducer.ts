const defaultState = {
	contentAnimation: true
}

const SHOW_CONTENT = "show_content";
const HIDING_CONTENT = "hiding_content";

export const contentAnimationReducer = (state = defaultState, action:any) => {
	switch (action.type) {
		case SHOW_CONTENT:
			return {...state, contentAnimation: state.contentAnimation = true}
		case HIDING_CONTENT:
			return {...state, contentAnimation: state.contentAnimation = false}
		default:
			return state;
	}
}

export const showContent = () => ({type: SHOW_CONTENT});
export const hideContent = () => ({type: HIDING_CONTENT});