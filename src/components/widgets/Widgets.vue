<script setup lang="ts">
import CityTemperature from "@/components/widgets/CityTemperature.vue";
import Indicators from "@/components/widgets/Indicators.vue";
import DailyForecast from "@/components/widgets/DailyForecast.vue";
import HourlyForcast from "@/components/widgets/HourlyForcast.vue";

</script>

<template>
	<div class="widgets-wrapper">
		<div class="left-side">
			<CityTemperature />
			<Indicators />
			<DailyForecast />
		</div>
		<div class="right-side">
			<HourlyForcast />
		</div>
	</div>
</template>

<style scoped>
.widgets-wrapper {
	display: flex;
	gap: 40px;
	padding-top: 30px;
	width: 100%;
	align-items: stretch;
	height: calc(100vh - 276px);
	
	.left-side {
		flex: 7;
		min-width: 0;
		
		display: grid;
		grid-template-rows: 3fr 2fr auto;
		height: 100%;
	}
	
	.right-side {
		flex: 3;
		min-width: 0;
		border-radius: 14px;
		overflow: hidden;
	}
}
</style>