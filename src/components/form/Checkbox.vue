<script setup lang="ts">
import { toRefs } from 'vue'

type CheckboxInput = {
	labelName: string,
	fieldId: string
}
/**
 * Default props to create checkbox
 */
const props = withDefaults(defineProps<CheckboxInput>(), {
	labelName: 'Field Title',
	fieldId: 'fieldId'
})
const { labelName, fieldId } = toRefs(props)
</script>
<template>
	<input
		:id="fieldId"
		type="checkbox"
		value=""
		class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
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
