<!--
 * @Author: wangqz
 * @Date: 2024-12-03
 * @LastEditTime: 2024-12-04
 * @Description: content
-->
<style scoped>
#pdfBox {
  height: 84vh;
}
</style>
<template>
  <div>
    <div id="pdfBox" ref="pdfBox"></div>
  </div>
</template>

<script lang="ts" setup>
import pdfMake from 'pdfmake';
import * as PDFObject from 'pdfobject';
import { ref } from 'vue';
import { SyStBold, SyStLight, SyStMedium, SyStSemiBold } from '../SC-index';
import { debounce } from 'lodash-es';

const { docDefinition } = defineProps<{
  docDefinition: any;
}>();
const pdfBox = ref(null);
const pdfUrl = ref('');
// 加载字体
const vfs = {
  SyStBold,
  SyStLight,
  SyStMedium,
  SyStSemiBold,
};
const fonts = {
  SySt: {
    normal: 'SyStLight',
    medium: 'SyStMedium',
    semiBold: 'SyStSemiBold',
    bold: 'SyStBold',
  },
};
pdfMake.setFonts(fonts);
pdfMake.addVirtualFileSystem(vfs);

const preview = debounce(() => {
  console.log('渲染次数 log==>');
  pdfMake.createPdf(toRaw(docDefinition)).getBuffer(function (buffer: ArrayBuffer) {
    URL.revokeObjectURL(pdfUrl.value);
    pdfUrl.value = URL.createObjectURL(new Blob([buffer], { type: 'application/pdf' }));
    PDFObject.embed(pdfUrl.value, pdfBox.value, {});
  });
}, 500);

defineExpose({ preview });
// watch(() => docDefinition.content, preview, { deep: true });
onMounted(preview);
</script>
