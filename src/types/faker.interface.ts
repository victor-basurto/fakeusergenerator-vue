export interface IFakerUser {
	name: string;
	email: string;
}
export interface IFakerUserState {
	users: IFakerUser[];
	selected: IFakerUser;
	qty: number;
	dataError: Partial<TypeError> | null;
}

export const state: IFakerUserState = {
	users: [] as IFakerUser[],
	selected: {} as IFakerUser,
	qty: 0,
	dataError: {
		message: 'Bad Request'
	}
}
