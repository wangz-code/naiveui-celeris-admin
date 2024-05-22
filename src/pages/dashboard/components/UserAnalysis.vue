<script setup lang="ts">
import UserAnalysisItem from "@/pages/dashboard/components/UserAnalysisItem.vue";
import { CornerRightUpDouble,CurrencyDollar,Heartbeat,Share } from "@vicons/tabler";
</script>

<template>
  <NGrid cols="2 m:4" responsive="screen" :x-gap="16" :y-gap="16">
    <NGridItem>
      <UserAnalysisItem title="对话满意度趋势" chart-type="line" quota="user-heart" :icon="Heartbeat" />
    </NGridItem>
    <NGridItem>
      <UserAnalysisItem title="用户消费趋势" chart-type="line" quota="user-dollar" :icon="CurrencyDollar" />
    </NGridItem>
    <NGridItem>
      <UserAnalysisItem title="用户分享趋势" chart-type="line" quota="user-share" :icon="Share" />
    </NGridItem>
    <NGridItem>
      <UserAnalysisItem title="用户增长量" chart-type="bar" quota="user-up" :icon="CornerRightUpDouble" />
    </NGridItem>
  </NGrid>
</template>

<style scoped>

</style>
