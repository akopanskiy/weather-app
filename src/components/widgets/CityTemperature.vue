<script setup lang="ts">
import { computed } from "vue";
import { useLocationStore } from "@/stores/location.ts";
import { useCurrentWeatherStore } from "@/stores/currentWeather.ts";
import { getWeatherIcon } from "@/utils/utils.ts";
import { storeToRefs } from "pinia";
import dayjs from "dayjs";

const locationStore = useLocationStore();
const currentWeatherStore = useCurrentWeatherStore();
const { city, country } = storeToRefs(locationStore);
const { weather } = storeToRefs(currentWeatherStore);

const currentTime = computed(() =>
		dayjs(weather.value.time).format("dddd, MMM D, YYYY")
);

const weatherIcon = computed(() => getWeatherIcon(weather.value.weatherCode[0] as number));

</script>

<template>
	<div class="wrapper">
		<div class="left-info">
			<span class="place">{{ city }}, {{ country }}</span>
			<span class="date">{{ currentTime }}</span>
		</div>
		<div class="right-info">
			<img :src=weatherIcon alt="weather icon" width="110" height="110 "/>
			<span class="temperature">{{ weather.temperature }}°</span>
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