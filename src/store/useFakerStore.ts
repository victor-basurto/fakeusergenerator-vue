import { defineStore } from 'pinia'
import { type IFakerUser, type IFakerUserState, state } from '../types/faker.interface'
import { fetchFakers } from '../services/faker-api'
import { useLoadingStore } from './useLoadingStore'
/*
 * Define Store with list of names, last-names and emails
*/
export const useFakerStore = defineStore('useFaker', {
	state: () => (state as IFakerUserState),
	getters: {
		getFakeUsers: (state: IFakerUserState) => state.users,
		getErrorMsg: (state: IFakerUserState) => state.dataError!.message,
		qtyLoaded: (state: IFakerUserState) => state.users.length,
	},
	actions: {
		/**
		 * Fetch fakeUsers from API
		 * @param numOfItems - Number of Fake User to be fetched
		 */
		async loadFakerList(numOfItems: number = 0): Promise<void> {
			// get loading store to set loading state
			const loadingStore = useLoadingStore()
			const { setLoading } = loadingStore
			setLoading(true) // set loading to true

			// call fetchFakers
			const fakerResult: IFakerUser[] = await fetchFakers(numOfItems)
			try {
				// if success
				this.users = [...fakerResult]
				this.dataError!.message = `qty loaded: ${this.users.length}`
			} catch(e) {
				// if fails
				const typeError = e as TypeError
				this.dataError!.message = typeError.message
			} finally {
				setLoading(false) // reset loading to false
			}
		},
		/**
		 * Set message to dataError, even if message if success!
		 * @param msg - Message to be displayed
		 */
		setPageError(msg: string): void {
			this.dataError!.message = msg
		},
	}
})
