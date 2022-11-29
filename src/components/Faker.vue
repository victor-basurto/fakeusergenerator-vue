<script setup lang="ts">
import { onMounted, defineAsyncComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { Spinner } from 'flowbite-vue'
import { useFakerStore } from '../store/useFakerStore'
import { useLoadingStore } from '../store/useLoadingStore'

// components
const Form = defineAsyncComponent(() => import('./form/Form.vue'))
const TableHeader = defineAsyncComponent(() => import('./table/TableHeader.vue'))
const TableRow = defineAsyncComponent(() => import('./table/TableRow.vue'))

// stores
const fakerStore = useFakerStore()
const loadingStore = useLoadingStore()

// store actions
const { loadFakerList } = fakerStore

// store getters
const { users } = storeToRefs( fakerStore )
const { isLoading } = storeToRefs( loadingStore )

// initially load 1 object from Fakers API
onMounted(async () => await loadFakerList())

</script>
<template>
	<div class="mb-8 max-w-3xl mx-auto">
		<Form form-name="Faker Loader"></Form>
		<div class="flex justify-center items-center min-h-[40vh]" v-if="isLoading">
			<Spinner size="12" />
		</div>
		<div v-else>
			loaded: {{ users.length }} user(s) in total
			<!-- Table Section -->
			<div class="flex flex-col">
				<div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
						<div class="overflow-hidden">
							<table class="min-w-full bg-white">
								<thead class="border-b">
									<TableHeader
										:header-names="['First', 'Last', 'Email']">
									</TableHeader> <!-- ./Table Header -->
								</thead>
								<tbody>
									<TableRow
										v-for="(user, index) in users"
										:key="index"
										:count="index"
										:row-fake="user">
									</TableRow> <!-- ./Table Row -->
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div> <!-- ./Table Section -->
		</div> <!-- ./v-else -->
	</div>
</template>

<style scoped>

</style>
