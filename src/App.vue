<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const Faker = defineAsyncComponent(() => import('./components/Faker.vue'))
</script>

<template>
	<Faker></Faker>
</template>

<style scoped>

</style>
