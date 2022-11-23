<script setup lang="ts">
import { onMounted, computed, defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useFakerStore } from '../store/useFakerStore';
import { useLoadingStore } from '../store/useLoadingStore';

const Card = defineAsyncComponent(() => import('./Card.vue'));

const fakerStore = useFakerStore()
const loadingStore = useLoadingStore()

const { loadFakerList } = fakerStore
const { users, selected, dataError } = storeToRefs(fakerStore)
const { isLoading } = storeToRefs(loadingStore)

onMounted(async () => await loadFakerList())


</script>
<template>
	<div class="mb-8">
		<div v-if="isLoading">
			<!-- TODO: create Loading component -->
			LOADING....
		</div>
		<div v-else>
			loaded: {{ users.length }} user(s) in total
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
			<div v-for="(user, index) in users" :key="index">
				<Card :name="user.name" :email="user.email"></Card>
			</div>
		</div>
	</div>
</template>


<style scoped>

</style>
