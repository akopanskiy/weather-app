<script setup lang="ts">

const indicators = [
	{ name: "Feels Like", value: "64°" }, { name: "Humidity", value: "46%" },
	{ name: "Wind", value: "2 km/h" }, { name: "Precipitation", value: "0 in" }
];
</script>

<template>
	<div class="indicators-wrapper">
		<div
				v-for="(indicator, i) in indicators"
				:key="i"
				class="indicator"
		>
			<span class="name">{{ indicator.name }}</span>
			<span class="value">{{ indicator.value }}</span>
		</div>
	</div>
</template>

<style scoped>
.indicators-wrapper {
	display: flex;
	gap: 25px;
	margin-top: 25px;
	margin-bottom: 35px;
	
	.indicator {
		display: flex;
		flex-direction: column;
		gap: 15px;
		width: 25%;
		background: var(--bg-tertiary);
		border-radius: 14px;
		padding: 15px;
	}
	
	.name {
		font-size: 14px;
		color: var(--text-tertiary);
	}
}
</style>