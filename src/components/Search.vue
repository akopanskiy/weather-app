<script setup lang="ts">
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue';

const searchData = ref<string>("");

</script>

<template>
	<div class="search-wrapper">
		<el-input
				v-model="searchData"
				class="search-input"
				placeholder="Search for a place"
				:prefix-icon="Search"
		/>
		<el-button type="primary">Search</el-button>
	</div>
</template>

<style scoped>
.search-wrapper {
	display: flex;
	justify-content: center;
	gap: 10px;
}

.search-input {
	width: 400px;
}

:deep(.el-input__wrapper) {
	background-color: var(--bg-tertiary);
	box-shadow: none;
	border-radius: 6px;
}

:deep(.el-input__inner) {
	color: #fff;
}

:deep(.el-button.el-button--primary) {
	padding: var(--spacing-xs) var(--spacing-md);
	border: none;
	border-radius: var(--radius-sm);
	font-family: var(--font-primary);
	font-size: 1rem;
	font-weight: 500;
	text-decoration: none;
	transition: all var(--transition-fast);
	gap: var(--spacing-xs);
	background-color: var(--blue-500);
	color: var(--neutral-0);
}

:deep(.el-button.el-button--primary:hover) {
	background-color: var(--blue-700);
	transform: translateY(-1px);
}
</style>
