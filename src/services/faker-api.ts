import { faker } from '@faker-js/faker'
import { type IFakerUser } from '../types/faker.interface'


export const fetchFakers = (payloadNumber: number = 0): Promise<IFakerUser[]> => {
	return new Promise((resolve, reject) => {
		const { fakersResult } = loadFakers(payloadNumber);
		setTimeout(() => {
			if (!fakersResult?.length) {
				return reject('No data was loaded from backend');
			}
			resolve(fakersResult);
		}, 1000)
	})
}

const loadFakers = (loadQty: number = 0) => {
	const fakersResult = [] as IFakerUser[]
	if (loadQty <= 1) {
		return {
			name: faker.name.fullName(),
			email: faker.internet.email()
		}
	}
	for (let i = 0; i < loadQty; i++) {
		fakersResult.push({
			name: faker.name.fullName(),
			email: faker.internet.email()
		})
	}
	return {
		fakersResult,
	};
}
