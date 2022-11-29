<script setup lang="ts">
import { toRefs } from 'vue';

// header names
const props = defineProps<{
	headerNames: Array<string>
}>()
const { headerNames } = toRefs(props)

</script>
<template>
	<tr class="table-row">
		<th scope="col" class="text-sm font-semibold text-gray-900 px-6 py-4 text-left">#</th>
		<th v-for="(headerName, index) in headerNames" :key="index"
			scope="col"
			class="text-sm font-semibold text-gray-900 px-6 py-4 text-left">
			{{headerName}}
		</th>
	</tr>
</template>
<style scoped>
</style>
