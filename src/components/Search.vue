<script setup lang="ts">
import { ref } from 'vue';
import { getCity } from "@/api/geoClient.ts";
import { getWeather } from "@/api/weatherClient.ts";
import { mapWeatherResponse } from "@/mappers/weatherMappers.ts";
import { useLocationStore } from "@/stores/location.ts";
import { useCurrentWeatherStore } from "@/stores/currentWeather.ts";
import type { AutocompleteCity } from "@/types";
import { Search } from '@element-plus/icons-vue';
import { storeToRefs } from "pinia";
import _ from "lodash";

const { getLocationParams } = useLocationStore();
const { setCurrentWeather } = useCurrentWeatherStore();
const currentWeatherStore = useCurrentWeatherStore();
const { units } = storeToRefs(currentWeatherStore);

const searchData = ref<string>("");
const selectedCity = ref<AutocompleteCity | null>(null);

const querySearch = async (query: string, cb: (results: AutocompleteCity[]) => void) => {
	if (!query) return cb([]);
	
	const data = await getCity(query);
	
	const cities: AutocompleteCity[] = (data.results || []).map(({ name, admin2, country, latitude, longitude } = city) => ({
		value: `${name}, ${admin2}, ${country}`,
		latitude,
		longitude,
		name,
		country
	}))
	
	cb(cities)
};

const handleSelect = (item: AutocompleteCity) => {
	selectedCity.value = item
	
	const { name, latitude, longitude, country } = item;
	getLocationParams(name, latitude, longitude, country);
}

const debouncedQuerySearch = _.debounce(querySearch, 1500);

const sendCityName = async () => {
	const weather = await getWeather({
		latitude: selectedCity.value?.latitude as number,
		longitude: selectedCity.value?.longitude as number,
		temperature_unit: units.value.temperature,
		wind_speed_unit: units.value.windSpeed,
		precipitation_unit: units.value.precipitation,
	});
	
	const mapped = mapWeatherResponse(weather);
	setCurrentWeather(mapped);
	
	searchData.value = "";
};

</script>

<template>
	<div class="search-wrapper">
		<el-autocomplete
				v-model="searchData"
				class="search-input"
				placeholder="Search for a place"
				:prefix-icon="Search"
				:fetch-suggestions="debouncedQuerySearch"
				@select="handleSelect"
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
