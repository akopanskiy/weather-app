<script setup lang="ts">
import { ref, computed, onMounted } from "vue";import { useCurrentWeatherStore } from "@/stores/currentWeather.ts";
import { storeToRefs } from "pinia";
import { getWeatherIcon } from "@/utils/utils.ts";
import dayjs from "dayjs";
import _ from "lodash";

const day = ref<string>("");
const currentWeatherStore = useCurrentWeatherStore();
const { weather } = storeToRefs(currentWeatherStore);

const { days, hourlyTemperature, hours, hourlyWeatherCode } = weather.value;

onMounted(() => day.value = dayjs(weather.value.days[0]).format("dddd"));

const getDays = computed(() => {
	return days.map((day: string) => {
		const dayName = dayjs(day).format("dddd");
		
		return { label: dayName, value: dayName };
	});
});

const dayIndex = computed(() =>
		getDays.value.findIndex((item) => item.value === day.value)
);

const getHourlyForecast = computed(() => {
	const startIndex = dayIndex.value * 24;
	const endIndex = startIndex + 24;
	
	const hoursArr = hours.slice(startIndex, endIndex);
	const temperatureArr = hourlyTemperature.slice(startIndex, endIndex);
	const weatherCodeArr = hourlyWeatherCode.slice(startIndex, endIndex);
	
	return hoursArr.map((hour, index) => ({
		hour: dayjs(hour).format("h A"),
		temperature: `${_.round(temperatureArr[index] as number, 0)}°`,
		image: getWeatherIcon(weatherCodeArr[index] as number)
	}));
});

</script>

<template>
	<div class="hourly-forecast-wrapper">
		<div class="hourly-forecast-header">
			<h3 class="name">Hourly forecast</h3>
			<el-select
					v-model="day"
					class="units-select"
					popper-class="units-dropdown"
					placement="bottom-end"
					:teleported="false"
			>
					<el-option
							v-for="(item, i) in getDays"
							:key="i"
							:label="item.label"
							:value="item.value"
					/>
			</el-select>
		</div>
		<div class="hourly-forecast-body">
			<div class="indicators">
				<div
						v-for="(item, i) in getHourlyForecast"
						:key="i"
						class="item"
				>
					<div class="left-indicators">
						<img :src=item.image alt="sign" width="36" height="36" />
						<span :style="{ 'padding-top': '4px' }">{{ item.hour }}</span>
					</div>
					<div>{{ item.temperature }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.hourly-forecast-wrapper {
	padding: 20px;
	border-radius: 14px;
	background: var(--bg-secondary);
	height: 100%;
	
	.hourly-forecast-header {
		display: flex;
		justify-content: space-between;
		flex-shrink: 0;
		
		.name {
			font-size: 16px;
		}
	}
	
	.hourly-forecast-body {
		overflow-y: auto;
		flex: 1;
		height: calc(100% - 30px);
		
		.indicators {
			background: var(--bg-tertiary);
			display: flex;
			flex-direction: column;
			gap: 10px;
			
			.item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 10px;
				border: 1px solid gray;
				border-radius: 6px;
			}
			
			.left-indicators {
				display: flex;
				justify-content: center;
			}
		}
	}
}

.units-select {
	width: 140px;
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

:deep(.el-select__placeholder) {
	color: var(--text-tertiary);
}

:deep(.el-popper.el-select__popper) {
	background: var(--bg-tertiary);
	box-shadow: none;
	border: none;
}

:deep(.units-dropdown .el-select-dropdown__item) {
	color: #fff;
	background: transparent;
}

:deep(.units-dropdown .el-select-dropdown__item:hover) {
	background: var(--bg-primary);
}

:deep(.units-dropdown .el-select-dropdown__item.is-selected)::after {
	content: "✔";
	position: absolute;
	right: 10px;
	color: #fff;
}
</style>