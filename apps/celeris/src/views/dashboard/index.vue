<script setup lang="ts">
import APIHealthMetrics from '#/views/dashboard/components/APIHealthMetrics.vue';
import DataOverview from '#/views/dashboard/components/DataOverview.vue';
import PerformanceMetrics from '#/views/dashboard/components/PerformanceMetrics.vue';
import UserAnalysis from '#/views/dashboard/components/UserAnalysis.vue';

defineOptions({
  name: 'Dashboard',
});
</script>

<template>
  <NSpace :vertical="true" :size="16">
    <NGrid cols="24" :x-gap="16" :y-gap="16" responsive="screen" item-responsive>
      <NGridItem span="24 l:18">
        <!--  数据总览 -->
        <DataOverview />
      </NGridItem>
      <NGridItem span="24 l:6">
        <!-- 性能指标和API健康指标组件 -->
        <NSpace :vertical="true" :size="16">
          <PerformanceMetrics />
          <APIHealthMetrics />
        </NSpace>
      </NGridItem>
    </NGrid>
    <!-- 用户分析模块 -->
    <UserAnalysis />
  </NSpace>
</template>
<style scoped></style>
