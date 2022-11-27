<script setup lang="ts">
import { toRefs } from 'vue'
import { IFakerUser } from '../../types/faker.interface'

interface IRowFakeUser {
	rowFake: IFakerUser;
	count: number;
}

const props = defineProps<IRowFakeUser>()
const { rowFake } = toRefs( props )

</script>
<template>
	<tr class="border-b">
		<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
			{{ count + 1 }}
		</td>
		<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
			{{ rowFake.name}}
		</td>
		<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
			{{ rowFake.lastName }}
		</td>
		<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
			{{ rowFake.email }}
		</td>
	</tr>
</template>


<style scoped>

</style>
