<template>
  <n-button @click="savePdf"> savePdf </n-button>
</template>

<script lang="ts" setup>
import { jsPDF } from 'jspdf';

// Default export is a4 paper, portrait, using millimeters for units
const doc = new jsPDF();

doc.text('Hello world!', 10, 10);

const savePdf = () => {
  doc.save('a4.pdf');
};
</script>
