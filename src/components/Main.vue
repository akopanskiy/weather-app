<script setup lang="ts">
import Header from "@/components/Header.vue";
import Search from "@/components/Search.vue";
import Widgets from "@/components/widgets/Widgets.vue";

</script>

<template>
	<div class="container">
		<Header />
		<h1 class="name">How`s the sky looking today?</h1>
		<Search />
		<Widgets />
	</div>
</template>

<style scoped>
.name {
	display: flex;
	justify-content: center;
	margin: 0;
	padding: 40px 0;
}
</style>