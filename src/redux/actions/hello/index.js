import { reqAjax } from '../../../utils/CreateAjax'

export const act1 = 'HELLO/act1'

const HelloAction = (params) => dispatch =>
	reqAjax(dispatch,act1,'/Hello',params)

export const actions = {
	HelloAction
}

const ACTION_HANLDERS = {
	[act1]: (state, action) => ({
		...state,
		content: action.payload
	})
}

export default ACTION_HANLDERS