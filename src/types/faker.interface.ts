export const DataStatus: Record<string, string> = {
	'200': 'Data Loaded Successfully',
	'204': 'No Content',
	'400': 'Bad Request',
	'404': 'Page Not Found or File Not Found',
	'408': 'Request Timeout',
} as const
/**
 * Faker Properties
 */
export interface IFakerUser {
	name: string
	lastName: string
	email: string
}
/**
 * Store State
 */
export interface IFakerUserState {
	users: IFakerUser[]
	selected: IFakerUser
	qty: number
	dataError: Partial<TypeError> | null
}
/**
 * Conversion Type for Emits
 * UnRef Data once used
 */
export type FakeDataResponseMsg = Record<'resMsg', string>
/**
 * Store CONST State - initialized
 */
export const state: IFakerUserState = {
	users: [] as IFakerUser[],
	selected: {} as IFakerUser,
	qty: 0,
	dataError: {
		message: DataStatus['200'],
	}
}
