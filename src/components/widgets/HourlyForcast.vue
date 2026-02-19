<script setup lang="ts">
import { ref } from "vue";

const days = [ { label: "Monday", value: "Monday" }, { label: "Tuesday", value: "Tuesday" },
	{ label: "Wednesday", value: "Wednesday" }, { label: "Thursday", value: "Thursday" },
	{ label: "Friday", value: "Friday" }, { label: "Saturday", value: "Saturday" },
	{ label: "Sunday", value: "Sunday" },];

const indicators = [
	{ image: "/icon-sunny.webp", hour: "1 PM", temperature: "0°" }, { image: "/icon-sunny.webp", hour: "2 PM", temperature: "0°" },
	{ image: "/icon-sunny.webp", hour: "3 PM", temperature: "0°" }, { image: "/icon-sunny.webp", hour: "4 PM", temperature: "0°" },
	{ image: "/icon-sunny.webp", hour: "5 PM", temperature: "0°" }, { image: "/icon-sunny.webp", hour: "6 PM", temperature: "0°" },
	{ image: "/icon-sunny.webp", hour: "7 PM", temperature: "0°" }, { image: "/icon-sunny.webp", hour: "8 PM", temperature: "0°" },
	{ image: "/icon-sunny.webp", hour: "9 PM", temperature: "0°" }, { image: "/icon-sunny.webp", hour: "10 PM", temperature: "0°" },
	{ image: "/icon-sunny.webp", hour: "1 PM", temperature: "0°" }, { image: "/icon-sunny.webp", hour: "2 PM", temperature: "0°" },
	{ image: "/icon-sunny.webp", hour: "3 PM", temperature: "0°" }, { image: "/icon-sunny.webp", hour: "4 PM", temperature: "0°" },
	{ image: "/icon-sunny.webp", hour: "5 PM", temperature: "0°" }, { image: "/icon-sunny.webp", hour: "6 PM", temperature: "0°" },
	{ image: "/icon-sunny.webp", hour: "7 PM", temperature: "0°" }, { image: "/icon-sunny.webp", hour: "8 PM", temperature: "0°" },
	{ image: "/icon-sunny.webp", hour: "9 PM", temperature: "0°" }, { image: "/icon-sunny.webp", hour: "10 PM", temperature: "0°" }
];

const day = ref<string>("Monday");

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
							v-for="(day, i) in days"
							:key="i"
							:label="day.label"
							:value="day.value"
					/>
			</el-select>
		</div>
		<div class="hourly-forecast-body">
			<div class="indicators">
				<div
						v-for="(item, i) in indicators"
						:key="i"
						class="item"
				>
					<div class="left-indicators">
						<img :src="item.image" alt="sign" width="36" height="36" />
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