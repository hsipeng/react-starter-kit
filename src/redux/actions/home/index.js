import { reqAjax } from '../../../utils/CreateAjax'

export const act1 = 'HOME/act1'
const HomeAct1 = (params) => dispatch =>
	reqAjax(dispatch,act1,'/home/getHomePageIndex.htm',params)

export const act2 = 'HOME/act2'
const HomeAct2 = (params) => dispatch =>
	reqAjax(dispatch,act2,'/home/getHomePageIndex.htm',params)

export const actions = {
	HomeAct1,
	HomeAct2
}

const ACTION_HANLDERS = {
	[act1]: (state, action) => ({
		...state,
		act1: action.payload
	}),
	[act2]: (state, action) => ({
		...state,
		act2: action.payload
	})
}

export default ACTION_HANLDERS