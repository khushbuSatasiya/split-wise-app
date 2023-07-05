import { ISettleData } from 'features/auth/interface/auth';
import { IAction } from 'shared/interface/state';

import * as actionTypes from 'store/actionTypes';

const initialState: ISettleData = {
	name: '',
	amount: '',
	paid_by: 'you',
	people_name: []
};

const reducer = (state: ISettleData = initialState, action: IAction) => {
	console.log('action:', action);
	switch (action.type) {
		case actionTypes.GET_SETTLE_VALUE:
			return {
				...state,
				name: action.payload.name,
				amount: action.payload.amount,
				paidBy: action.payload.paid_by,
				people_name: action.payload.people_name
			};

		default:
			return state;
	}
};

export default reducer;
