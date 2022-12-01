const defaultState = {
	page: 1
}

export const pageReducer = (state = defaultState, action:any) => {
	switch (action.type) {
		case "PAGE_1":
			return {...state, page: state.page = 1}
		case "PAGE_2":
			return {...state, page: state.page = 2}
		case "PAGE_3":
			return {...state, page: state.page = 3}
		case "PAGE_4":
			return {...state, page: state.page = 4}
	
		default:
			return state;
	}
}