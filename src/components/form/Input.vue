<script setup lang="ts">
import { toRefs } from 'vue'

type FormInput = {
	labelName: string,
	placeholder: string,
	qtyNumber: number,
	labelId: string,
	inputType: string,
	min?: number,
	max?: number,
	mandatory?: boolean
}

// props to create input field
const props = withDefaults(defineProps<FormInput>(), {
	labelName: 'Label Name',
	placeholder: 'Placeholder Name',
	qtyNumber: 0,
	labelId: 'labelId',
	inputType: 'inputType',
	min: 0,
	max: 99999,
	mandatory: false
})
const { labelName, placeholder, qtyNumber, labelId, inputType, min, max, mandatory } = toRefs(props)
</script>
<template>
	<div class="w-full">
		<label
			:for="labelId"
			class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
			{{ labelName }}
		</label>
		<input
			class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			:type="inputType"
			:id="labelId"
			:name="labelId"
			:min="min"
			:max="max"
			:placeholder="placeholder"
			v-model="qtyNumber"
			:required="(mandatory === true)"
		/>
	</div>
</template>


<style scoped>

</style>
