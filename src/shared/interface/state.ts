import { IAuthState, ISettleData } from 'features/auth/interface/auth';

export interface IState {
	loading: ILoadingState;
	auth: IAuthState;
	settle: ISettleData;
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
