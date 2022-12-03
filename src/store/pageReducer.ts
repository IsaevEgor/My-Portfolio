const defaultState = {
	page: 1
}

const PAGE_1 = "PAGE_1";
const PAGE_2 = "PAGE_2";
const PAGE_3 = "PAGE_3";
const PAGE_4 = "PAGE_4";

export const pageReducer = (state = defaultState, action:any) => {
	switch (action.type) {
		case PAGE_1:
			return {...state, page: state.page = 1}
		case PAGE_2:
			return {...state, page: state.page = 2}
		case PAGE_3:
			return {...state, page: state.page = 3}
		case PAGE_4:
			return {...state, page: state.page = 4}
	
		default:
			return state;
	}
}

export const activePage_1_Action = () => ({type: PAGE_1});
export const activePage_2_Action = () => ({type: PAGE_2});
export const activePage_3_Action = () => ({type: PAGE_3});
export const activePage_4_Action = () => ({type: PAGE_4});