import { IAuthState, IExpense } from 'features/auth/interface/auth';

export interface IState {
	loading: ILoadingState;
	auth: IAuthState;
	expense: IExpense;
}

export interface ILoadingState {
	api: {
		[key: string]: boolean;
	};
}

export interface IAction {
	type: string;
	payload: any;
}
