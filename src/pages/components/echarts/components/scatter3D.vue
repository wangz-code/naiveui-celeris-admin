<template>
	<VChart style="height:500px; " :option="chartOption" autoresize />
</template>

<script lang="ts" setup>
import VChart from "vue-echarts";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { TooltipComponent, GridComponent, GraphicComponent, VisualMapComponent } from "echarts/components";
import { SurfaceChart} from "echarts-gl/charts";
import { Grid3DComponent } from "echarts-gl/components";
use([CanvasRenderer, TooltipComponent, GridComponent, GraphicComponent, VisualMapComponent, SurfaceChart, Grid3DComponent]);
const { chartOption } = useChartOption((isDark: boolean) => {
	return {
		tooltip: {},
		backgroundColor: "#fff",
		visualMap: {
			show: false,
			dimension: 2,
			min: -1,
			max: 1,
			inRange: {
				color: ["#313695", "#4575b4", "#74add1", "#abd9e9", "#e0f3f8", "#ffffbf", "#fee090", "#fdae61", "#f46d43", "#d73027", "#a50026"],
			},
		},
		xAxis3D: {
			type: "value",
		},
		yAxis3D: {
			type: "value",
		},
		zAxis3D: {
			type: "value",
		},
		grid3D: {
			viewControl: {
				// projection: 'orthographic'
			},
		},
		series: [
			{
				type: "surface",
				wireframe: {
					// show: false
				},
				equation: {
					x: {
						step: 0.05,
					},
					y: {
						step: 0.05,
					},
					z: function (x, y) {
						if (Math.abs(x) < 0.1 && Math.abs(y) < 0.1) {
							return "-";
						}
						return Math.sin(x * Math.PI) * Math.sin(y * Math.PI);
					},
				},
			},
		],
	};
});
</script>
