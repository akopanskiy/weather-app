<script setup lang="ts">

const forecastData = [
	{ day: "Mon", image: "/icon-sunny.webp", maxDayTemperature: "5°", minDayTemperature: "-1°" },
	{ day: "Tue", image: "/icon-drizzle.webp", maxDayTemperature: "7°", minDayTemperature: "-2°" },
	{ day: "Wed", image: "/icon-fog.webp", maxDayTemperature: "4°", minDayTemperature: "2°" },
	{ day: "Thu", image: "/icon-rain.webp", maxDayTemperature: "2°", minDayTemperature: "0°" },
	{ day: "Fri", image: "/icon-storm.webp", maxDayTemperature: "7°", minDayTemperature: "-1°" },
	{ day: "Sat", image: "/icon-overcast.webp", maxDayTemperature: "7°", minDayTemperature: "-1°" },
	{ day: "Sun", image: "/icon-partly-cloudy.webp", maxDayTemperature: "9°", minDayTemperature: "1°" },
];

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