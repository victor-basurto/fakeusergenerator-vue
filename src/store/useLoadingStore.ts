import { ref } from 'vue'
import { defineStore } from 'pinia'

/**
 * @type {id} - loadingStore
 * @type {options} - store options
 */
export const useLoadingStore = defineStore('loadingStore', () => {
	const isLoading = ref(false)

	const setLoading = (v: boolean): boolean => isLoading.value = v

	return { isLoading, setLoading }
})

