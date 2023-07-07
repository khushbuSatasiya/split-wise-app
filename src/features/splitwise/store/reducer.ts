import { IExpense } from 'features/auth/interface/auth';
import { IAction } from 'shared/interface/state';

import * as actionTypes from 'store/actionTypes';

const initialState: IExpense = {
	id: 0,
	name: '',
	amount: '',
	paid_by: { label: 'You', value: 'you' },
	people_name: []
};

const reducer = (state: IExpense = initialState, action: IAction) => {
	switch (action.type) {
		case actionTypes.GET_SETTLE_VALUE:
			return {
				...state,
				name: action.payload.name,
				amount: action.payload.amount,
				paidBy: {
					value: action.payload.paid_by.value,
					label:
						action.payload?.paid_by?.label.charAt(0).toUpperCase() + action.payload?.paid_by?.label.slice(1)
				},
				people_name: action.payload.people_name
			};

		default:
			return state;
	}
};

export default reducer;
