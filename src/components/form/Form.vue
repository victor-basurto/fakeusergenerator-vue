<script setup lang="ts">
import { defineAsyncComponent, unref, ref, toRefs } from 'vue'
import { storeToRefs } from 'pinia'
import { useFakerStore } from '../../store/useFakerStore'

// components
const CheckBox = defineAsyncComponent(() => import('./Checkbox.vue'))
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
	<form class="bg-white px-8">
		<div class="mt-8 py-8 text-black text-center">
			<h2 class="font-sans text-3xl uppercase">
				<slot>{{ formName }}</slot>
			</h2>
		</div>
		<div class="grid gap-6 md:grid-cols-2 place-items-center py-8">

			<CheckBox
				label-name="Job Title"
				field-id="jobTitle">
			</CheckBox> <!-- ./ checkbox comp -->


			<Input class="testing"
				label-name="Fake Data Qty"
				placeholder="999"
				label-id="fakeQty"
				input-type="number"
				:qty-number="loadNumber"
				:min="0"
				:max="999"
				:mandatory="true"
				>
			</Input> <!-- ./ input comp -->
			<Button @click.prevent="loadData">Load Data</Button>
			<span class="text-black">message: {{ getErrorMsg }}</span>
		</div>
	</form>
</template>
<style scoped>

</style>
