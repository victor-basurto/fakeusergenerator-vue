<script setup lang="ts">
import { defineAsyncComponent, unref, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useFakerStore } from '../../store/useFakerStore'

// components
const Button = defineAsyncComponent(() => import('../base/Button.vue'))

// store
const fakerStore = useFakerStore()

// store actions
const { loadFakerList, setPageError } = fakerStore

// store getters
const { getErrorMsg, qtyLoaded } = storeToRefs( fakerStore )

// loadData and emit results from store to `fakeUsers`
const loadData = async () => {
	const dataQty = unref(loadNumber)
	try {
		// once data is loaded
		await loadFakerList(dataQty)
		setPageError(`loaded ${qtyLoaded.value}`)
	} catch (err: unknown) {
		const error = err as TypeError
		setPageError(error.message)
	}
}

// model binding
const loadNumber = ref(0)

</script>
<template>
	<form class="bg-white">
		<div class="grid gap-6 md:grid-cols-2 place-items-center py-8">
			<div>
				<label
					for="fakeQty"
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
					Fake Data Qty
				</label>
				<input
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					type="number"
					id="fakeQty"
					name="fakeQty"
					min="1"
					max="999"
					placeholder="999"
					v-model="loadNumber"
					required
				/>
			</div>
			<Button @click.prevent="loadData">Load Data</Button>
			<span class="text-black">message: {{ getErrorMsg }}</span>
		</div>
	</form>
</template>
<style scoped>

</style>
