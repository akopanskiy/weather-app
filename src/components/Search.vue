<script setup lang="ts">
import { ref } from 'vue';
import { getCity } from "@/api/geoClient.ts";
import { getWeather } from "@/api/weatherClient.ts";
import { useLocationStore } from "@/stores/location.ts";
import { useCurrentWeatherStore } from "@/stores/currentWeather.ts";
import { Search } from '@element-plus/icons-vue';
import { storeToRefs } from "pinia";

const searchData = ref<string>("");
const { getLocationParams } = useLocationStore();
const { setCurrentWeather } = useCurrentWeatherStore();
const currentWeatherStore = useCurrentWeatherStore();
const { units } = storeToRefs(currentWeatherStore);


const sendCityName = async () => {
	const data = await getCity(searchData.value);
	
	const params = data.results?.[0];
	if (!params) return;
	
	const { name, latitude, longitude, country } = params;
	getLocationParams(name, latitude, longitude, country);
	
	const weather = await getWeather({
		latitude,
		longitude,
		temperature_unit: units.value.temperature,
		wind_speed_unit: units.value.windSpeed,
		precipitation_unit: units.value.precipitation,
	});
	
	console.log(weather);
	
	const { temperature_2m, apparent_temperature, precipitation, relative_humidity_2m, wind_speed_10m, time } = weather.current;
	
	setCurrentWeather({
		temperature: temperature_2m,
		feelsLike: apparent_temperature,
		precipitation: precipitation,
		humidity: relative_humidity_2m,
		windSpeed: wind_speed_10m,
		currentDay: time,
		maxTemperature: weather.daily.temperature_2m_max,
		minTemperature: weather.daily.temperature_2m_min,
		days: weather.daily.time,
	});
	
	searchData.value = "";
};



</script>

<template>
	<div class="search-wrapper">
		<el-input
				v-model="searchData"
				class="search-input"
				placeholder="Search for a place"
				:prefix-icon="Search"
		/>
		<el-button
				type="primary"
				@click="sendCityName"
		>
			Search
		</el-button>
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
