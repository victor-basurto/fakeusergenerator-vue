<script setup lang="ts">
import { defineAsyncComponent, toRefs } from "vue";
import { storeToRefs } from "pinia";
const Button = defineAsyncComponent(() => import('./base/Button.vue'));
interface IFakerUser {
	name: string;
	email: string;
}
const props = defineProps<IFakerUser>()
const { name, email } = toRefs(props);

</script>
<template>
	<div class="space-y-2">
		<div class="group relative space-y-3">
			<div class="max-w-sm rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 bg-white dark:border-gray-700">
				<span>{{name}}</span>
				<span>{{email}}</span>
			</div>
		</div>

	</div>
</template>


<style scoped>

</style>
