<script setup lang="ts">
import { toRefs, ref } from 'vue'

type CheckboxInput = {
	labelName: string,
	fieldId: string,
	checked: boolean
}
/**
 * Default props to create checkbox
 */
const props = withDefaults(defineProps<CheckboxInput>(), {
	labelName: 'Field Title',
	fieldId: 'fieldId',
	checked: false
})
const { labelName, fieldId, checked } = toRefs(props)


</script>
<template>
	<input
		class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
		type="checkbox"
		:value="fieldId"
		:id="fieldId"
		:checked="checked"
		@input="$emit('update:checked', ($event.target as HTMLInputElement).checked)"
		required
	/>
	<label
		:for="fieldId"
		class="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">
		{{ labelName }}
	</label>
</template>


<style scoped>

</style>
