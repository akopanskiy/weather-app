<script setup lang="ts">
import { computed } from "vue";
import { useCurrentWeatherStore } from "@/stores/currentWeather.ts";
import { storeToRefs } from "pinia"

const currentWeatherStore = useCurrentWeatherStore();
const { weather, units } = storeToRefs(currentWeatherStore);

const indicators = computed(() => [
	{ name: "Feels Like", value: `${weather.value?.feelsLike}°` },
	{ name: "Humidity", value: `${weather.value?.humidity}%` },
	{ name: "Wind", value: `${weather.value?.windSpeed} ${units.value.windSpeed}` },
	{ name: "Precipitation", value: `${weather.value?.precipitation} ${units.value.precipitation}` }
]);
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