import { defineStore } from 'pinia'
import { type IFakerUser, type IFakerUserState, state } from '../types/faker.interface'
import { fetchFakers } from '../services/faker-api'
import { useLoadingStore } from './useLoadingStore'

/*
 * Define Store with list of names and emails
*/
export const useFakerStore = defineStore('useFaker', {
	state: () => (state as IFakerUserState),
	actions: {
		async loadFakerList(): Promise<void> {
			const loadingStore = useLoadingStore()
			const { setLoading } = loadingStore

			setLoading(true)
			try {
				const fakerResult: IFakerUser[] = await fetchFakers(5)
				state.users = [...fakerResult]
			} catch(e) {
				const typeError = e as TypeError
				state.dataError!.message = typeError.message
			} finally {
				setLoading(false)
			}
		}
	}
})
