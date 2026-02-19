<script setup lang="ts">

</script>

<template>
	<div class="wrapper">
		<div class="left-info">
			<span class="place">Dnipro, Ukraine</span>
			<span class="date">Tuesday, Feb 11, 2026</span>
		</div>
		<div class="right-info">
			<img src="/icon-sunny.webp" alt="weather icon" width="110" height="110 "/>
			<span class="temperature">0°</span>
		</div>
	</div>
</template>

<style scoped>
.wrapper {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: url("/bg-today-large.svg") no-repeat center/cover;
	height: auto;
	padding: 20px;
	border-radius: 14px;
	
	.left-info {
		display: flex;
		gap: 5px;
		flex-direction: column;
		
		.place {
			font-size: 20px;
		}
		
		.date {
			font-size: 12px;
			color: var(--text-tertiary);
		}
	}
	
	.right-info {
		display: flex;
		
		.temperature {
			font-size: 70px;
		}
	}
}
</style>