<script setup lang="ts">
import { defineAsyncComponent, unref, ref, toRefs, reactive, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useFakerStore } from '../../store/useFakerStore'
import type { CheckboxOptionsType } from '../../types/form.interface'

// components
const MultiCheckBox = defineAsyncComponent(() => import('./MultiCheckbox.vue'))
const Input = defineAsyncComponent(() => import('./Input.vue'))
const Button = defineAsyncComponent(() => import('../base/Button.vue'))

// store
const fakerStore = useFakerStore()

// store actions
const { loadFakerList, setPageError } = fakerStore

// store getters
const { getErrorMsg, qtyLoaded } = storeToRefs( fakerStore )

// props
const props = withDefaults(defineProps<{formName: string}>(), {
	formName: 'Faker'
})
const { formName } = toRefs( props )

// loadData and emit results from store to `fakeUsers`
const loadData = async () => {
	// convert string loadNumber to number and unref
	const dataQty = ~~unref(loadNumber)
	try {
		// once data is loaded
		await loadFakerList(dataQty)
		setPageError(`loaded ${qtyLoaded.value}`)
	} catch (err: unknown) {
		const error = err as TypeError
		setPageError(error.message)
	}
}
// checkbox options
const options = ref<Array<CheckboxOptionsType>>([])
/**
 * populate options array with checkbox options data
 */
const loadOptions = () => {
	options.value = [
		{name: 'First Name', id: 'firstName'},
		{name: 'Last Name', id: 'lastName'},
		{name: 'Email', id: 'email'},
		{name: 'Age', id: 'age'},
		{name: 'Sex', id: 'sex'},
		{name: 'Job Title', id: 'jobTitle'},
		{name: 'Phone', id: 'phone'},
	]
}

// model binding
const loadNumber = ref('0')
const checkedValues = ref<string[]>([])

// feed table with 1 load of data
onMounted(() => loadOptions())

</script>
<template>
	<form class="bg-white px-8">
		<div class="mt-8 py-8 text-black text-center">
			<h2 class="font-sans text-3xl uppercase">
				<slot>{{ formName }}</slot>
			</h2>
		</div>
		<div class="grid grid-cols-3 gap-4 py-8">
			<!-- MultiCheckbox Component -->
			<MultiCheckBox
				:options="options"
				v-model:value="checkedValues"
			/> <!-- ./ multi-checkbox -->
		</div>
		<div class="grid gap-6 md:grid-cols-2 place-items-center pb-8">
			<!-- Input Component -->
			<Input class="testing"
				label-name="Fake Data Qty"
				placeholder="999"
				label-id="fakeQty"
				input-type="number"
				v-model:qtyNumber="loadNumber"
				:min="0"
				:max="999"
				:mandatory="true"
			/> <!-- ./ input comp -->

			<!-- button:loads table with data -->
			<Button @click.prevent="loadData">Load Data</Button>

		</div>
		<div class="pb-8">
			<span class="text-black">message: {{ getErrorMsg }}</span>
			<span class="text-black">checked values: {{ checkedValues }}</span>
		</div>
	</form>
</template>
<style scoped>
</style>
