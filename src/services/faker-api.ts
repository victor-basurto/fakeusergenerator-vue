import { faker } from '@faker-js/faker'
import {
	type IFakerUser,
	type IFakerUserState,
	DataStatus
} from '../types/faker.interface'

// e.g. { users: IFakerUserState[] }
type FakersResult = Pick<IFakerUserState, 'users'>

/**
 * API call to Fetch all FakeUsers
 * @param payloadNumber - Number of Users to be loaded
 * @returns Promise<IFakerUser[]>
 */
export const fetchFakers = (payloadNumber: number = 0): Promise<IFakerUser[]> => {
	return new Promise((resolve, reject) => {
		const { users } = loadFakers(payloadNumber)
		setTimeout(() => {
			if (!users?.length) {
				return reject({ message: DataStatus['400'] })
			}
			resolve(users)
		}, 1000)
	})
}
/**
 * function will get N number of items. if its less than 2 or 0
 * just return One Instance with { name, email, lastName }
 * otherwise return Array<IFakerUser>
 * @param loadQty - Number of items to be loaded
 * @returns Array<IFakerUser>
 */
const loadFakers = (loadQty: number = 0): FakersResult => {
	const users = [] as IFakerUser[]
	if (loadQty <= 1) {
		users.push({
			name: faker.name.fullName(),
			email: faker.internet.email(),
			lastName: faker.name.lastName(),
		})
		return {
			users
		}
	}
	for (let i = 0; i < loadQty; i++) {
		users.push({
			name: faker.name.fullName(),
			email: faker.internet.email(),
			lastName: faker.name.lastName()
		})
	}
	console.log(users)
	return {
		users
	}
}
