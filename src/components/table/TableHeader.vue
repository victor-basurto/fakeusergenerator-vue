<script setup lang="ts">
const headerNames = ['#', 'First', 'Last', 'Email'];
</script>
<template>
	<tr class="table-row">
		<th v-for="(header, index) in headerNames" :key="index"
			scope="col"
			class="text-sm font-semibold text-gray-900 px-6 py-4 text-left">
			{{header}}
		</th>
	</tr>
</template>
<style scoped>
</style>
