<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import type { CheckboxOptionsType } from '../../types/form.interface'

// checkbox component
const CheckBox = defineAsyncComponent(() => import('./Checkbox.vue'))

// runtime type only accessible in props
type CheckboxInput = {
	options: CheckboxOptionsType[],
	value: Array<string>
}
// emits -> send values to parent component
// values - string[]
const emits = defineEmits<{
	(e: 'update:value', values: string[]): void
}>()
/**
 * options -> checkbox object {name: string, id: string}
 * value -> ref(string[])
 */
const { options, value } = defineProps<CheckboxInput>()

// Ref<Array<string>> holds values from checked checkboxes
const updatedValue = ref<string[]>([])

/**
 * Push values to `updatedValue` array and emit array to parent component
 * @param optionId {String} - checkbox value
 * @param checked {Boolean} - checkbox checked
 */
const check = (optionId: string, checked: boolean) => {
	if (checked) {
		updatedValue.value.push(optionId)
	} else {
		updatedValue.value.splice(updatedValue.value.indexOf(optionId), 1)
	}
	// send to parent component
	emits('update:value', updatedValue.value)
}
</script>
<template>
	<CheckBox
		v-for="option in options"
		:label-name="option.name"
		:fieldId="option.id"
		:checked="value.includes(option.id)"
		@update:checked="check(option.id, $event)"
	/>
</template>
<style scoped>
</style>
