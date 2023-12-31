export interface IAuthState {
	isLogin: boolean;
	userData: IUserData;
}

export interface ILoginResponse {
	data: IUserData;
	token: string;
}

export interface IUserData {
	id: string;
	email: string;
	role: string;
	status: string;
	avatar: string | null;
	name: string;
	token: string;
}

export interface IExpense {
	id: number;
	name: string;
	amount: string;
	paid_by: {
		label: string;
		value: string;
	};
	people_name: string[];
}
