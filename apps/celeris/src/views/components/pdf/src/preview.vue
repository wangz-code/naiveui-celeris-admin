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
import { debounce } from 'lodash-es';

const { docDefinition } = defineProps<{
  docDefinition: any;
}>();
const pdfBox = ref(null);
const pdfUrl = ref('');

pdfMake.fonts = {
  SySt: {
    normal: 'https://raw.githubusercontent.com/WangSunio/img/main/font/SC/SC-Light.otf',
    bold: 'https://raw.githubusercontent.com/WangSunio/img/main/font/SC/SC-Bold.otf',
  },
};

const preview = debounce(() => {
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
