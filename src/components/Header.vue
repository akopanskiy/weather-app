<script setup lang="ts">
import { ref } from 'vue'
import { getWeather } from "@/api/weatherClient.ts";
import { useLocationStore } from "@/stores/location.ts";
import { useCurrentWeatherStore } from "@/stores/currentWeather.ts";
import { storeToRefs } from "pinia";
import type { TemperatureUnit, WindSpeedUnit, PrecipitationUnit, Units } from "@/types";
import { METRIC_OPTIONS } from "@/utils/constants.ts";

const { setCurrentWeather, setUnits } = useCurrentWeatherStore();
const locationStore = useLocationStore();
const { latitude, longitude} = storeToRefs(locationStore);

const selected = ref<string[]>([
	'celsius',
	'ms',
	'mm',
]);

const valueToIndex = Object.fromEntries(
		METRIC_OPTIONS.flatMap((group, groupIndex) =>
				group.options.map(opt => [opt.value, groupIndex])
		)
)

const handleChange = async (values: string[]): Promise<void> => {
	const last: string = values[values.length - 1]!;
	const index: number = valueToIndex[last]!;
	const next = [...selected.value];
	
	next[index] = last;
	
	selected.value = next;
	
	const weather = await getWeather({
		latitude: latitude.value as number,
		longitude: longitude.value as number,
		temperature_unit: selected.value[0] as TemperatureUnit,
		wind_speed_unit: selected.value[1] as WindSpeedUnit,
		precipitation_unit: selected.value[2] as PrecipitationUnit,
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
		weatherCode: weather.daily.weathercode,
		hourlyTemperature: weather.hourly.temperature_2m,
		hours: weather.hourly.time,
		hourlyWeatherCode: weather.hourly.weathercode
	});
	
	const newUnits: Units = {
		temperature: next[0] as TemperatureUnit,
		windSpeed: next[1] as WindSpeedUnit,
		precipitation: next[2] as PrecipitationUnit,
	};
	
	setUnits(newUnits);
}
</script>


<template>
	<div class="header-container">
		<div class="logo">
			<el-icon class="weather-icon"><Sunny /></el-icon>
			<p class="text">Weather Now</p>
		</div>
		<el-select
				:model-value="selected"
				class="units-select"
				popper-class="units-dropdown"
				:teleported="false"
				placement="bottom-end"
				multiple
				@change="handleChange"
		>
			<template #header>
				<div class="select-header">
					Switch to Imperial
				</div>
			</template>
			<template #prefix>
				<div class="units-label">
					<el-icon><Setting /></el-icon>
					<span>Units</span>
				</div>
			</template>
			<el-option-group
					v-for="group in METRIC_OPTIONS"
					:key="group.label"
					:label="group.label"
			>
				<el-option
						v-for="item in group.options"
						:key="item.value"
						:label="item.label"
						:value="item.value"
				/>
			</el-option-group>
		</el-select>
	</div>
</template>

<style scoped>
.header-container {
	display: flex;
	justify-content: space-between;
}

.logo {
	display: flex;
	gap: 10px;
	
	.weather-icon {
		color: orange;
		font-size: 30px;
	}
	
	.text {
		margin: 0;
	}
}

:deep(.el-select__selected-item) {
	opacity: 0;
}

.units-select {
	width: 100px;
}

.units-label {
	display: flex;
	gap: 5px;
	align-items: center;
}

:deep(.units-dropdown) {
	background: var(--bg-tertiary);
	border: none;
	border-radius: 6px;
}

:deep(.el-popper__arrow) {
	display: none
}

:deep(.el-select__wrapper) {
	background-color: var(--bg-tertiary);
	box-shadow: none;
	border-radius: 6px;
	height: 24px;
}

:deep(.el-select-dropdown__header) {
	padding: 5px 0 0 20px;
	border: none;
	font-size: 13px;
}

:deep(.units-dropdown .el-select-dropdown__item) {
	color: #fff;
	background: transparent;
}

:deep(.units-dropdown .el-select-dropdown__item.is-selected)::after {
	content: "✔";
	position: absolute;
	right: 10px;
	color: #fff;
}
</style>