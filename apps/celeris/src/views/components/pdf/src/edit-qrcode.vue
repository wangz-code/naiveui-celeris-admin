<!--
 * @Author: wangqz
 * @Date: 2024-12-10
 * @LastEditTime: 2024-12-10
 * @Description: content
-->
<template>
  <n-flex justify="space-between" align="end">
    <div>
      <n-input type="text" size="small" v-model:value="col.qr" />
    </div>
    <n-flex align="end">
      <vue-qrcode :value="col.qr" :options="{ width: 50 }"></vue-qrcode>
      <alignment v-model:alignment="col.alignment"></alignment>
      <cover v-model:fit="col.fit" qrcode></cover>
    </n-flex>
  </n-flex>
</template>

<script lang="ts" setup>
import VueQrcode from '@chenfengyuan/vue-qrcode';
import { NInput } from 'naive-ui';
import Alignment from './alignment.vue';
import Cover from './cover.vue';
import { QrcodeCol } from './type';
const col = defineModel<QrcodeCol>('col', { default: { fit: 80, alignment: 'center' } });
</script>
