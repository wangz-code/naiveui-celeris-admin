<script setup lang="ts">
import UserAnalysisItem from "@/pages/dashboard/components/UserAnalysisItem.vue";
import { CornerRightUpDouble, CurrencyDollar, Heartbeat, Share } from "@vicons/tabler";
</script>

<template>
	<n-grid x-gap="12" cols="4 m:4">
		<n-gi>
			<UserAnalysisItem title="对话满意度趋势" chart-type="line" quota="user-heart" :icon="Heartbeat" />
		</n-gi>
		<n-gi>
			<UserAnalysisItem title="用户消费趋势" chart-type="line" quota="user-dollar" :icon="CurrencyDollar" />
		</n-gi>
		<n-gi>
			<UserAnalysisItem title="用户分享趋势" chart-type="line" quota="user-share" :icon="Share" />
		</n-gi>
		<n-gi>
			<UserAnalysisItem title="用户增长量" chart-type="bar" quota="user-up" :icon="CornerRightUpDouble" />
		</n-gi>
	</n-grid>
</template>

<style scoped></style>
