<script setup lang="ts">
import { computed } from "vue";
import { useCurrentWeatherStore } from "@/stores/currentWeather.ts";
import { storeToRefs } from "pinia";
import { getWeatherIcon } from "@/utils/utils.ts";
import dayjs from "dayjs";
import _ from "lodash";

const currentWeatherStore = useCurrentWeatherStore();
const { weather } = storeToRefs(currentWeatherStore);

const forecastData = computed(() => {
	if (!weather.value)
		return [];
	
	const { days, maxTemperature, minTemperature, weatherCode } = weather.value;
	
	return days.map((day: string, index: number) => {
		const dayName = dayjs(day).format("ddd");
		
		return {
			day: dayName,
			image: getWeatherIcon(weatherCode[index] as number),
			maxDayTemperature: `${_.round(maxTemperature[index] as number, 0)}°`,
			minDayTemperature: `${_.round(minTemperature[index] as number, 0)}°`,
		};
	});
});
</script>

<template>
	<h3 class="forecast-title">Daily forecast</h3>
	<div class="forecast-wrapper">
		<div
				v-for="(card, i) in forecastData"
				:key="i"
				class="forecast-card"
		>
			<span class="day">{{ card.day }}</span>
			<img :src="card.image" alt="sign" width="36" height="36" />
			<div class="temperature">
				<span class="maxT">{{ card.maxDayTemperature }}</span>
				<span class="minT">{{ card.minDayTemperature }}</span>
			</div>
		</div>
	</div>
</template>

<style scoped>
.forecast-title {
	display: flex;
	gap: 10px;
	font-size: 16px;
}

.forecast-wrapper {
	display: flex;
	gap: 10px;
}

.forecast-card {
	display: flex;
	flex-direction: column;
	gap: 10px;
	background: var(--bg-tertiary);
	flex: 1;
	border-radius: 14px;
	padding: 20px;
	
	.day {
		font-size: 14px;
		color: var(--text-tertiary);
		margin: auto;
	}
	
	img {
		margin: auto;
	}
	
	.temperature {
		display: flex;
		justify-content: space-between;
		
		.maxT, .minT {
			font-size: 14px;
			color: var(--text-tertiary);
			margin: auto;
		}
	}
}
</style>