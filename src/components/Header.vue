<script setup lang="ts">
import { ref } from 'vue'

const selected = ref<string[]>([
	'celsius',
	'km/h',
	'millimeters',
])

const options = [
	{
		label: 'Temperature',
		options: [
			{ value: 'celsius', label: 'Celsius(°C)' },
			{ value: 'fahrenheit', label: 'Fahrenheit(°F)' },
		],
	},
	{
		label: 'Wind Speed',
		options: [
			{ value: 'km/h', label: 'km/h' },
			{ value: 'mph', label: 'mph' },
		],
	},
	{
		label: 'Precipitation',
		options: [
			{ value: 'millimeters', label: 'Millimeters(mm)' },
			{ value: 'inches', label: 'Inches(in)' },
		],
	},
]

const valueToIndex = Object.fromEntries(
		options.flatMap((group, groupIndex) =>
				group.options.map(opt => [opt.value, groupIndex])
		)
)

const handleChange = (values: string[]): void => {
	const last: string = values[values.length - 1]!;
	const index: number = valueToIndex[last]!;
	const next = [...selected.value];
	
	next[index] = last;
	
	selected.value = next;
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
					v-for="group in options"
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