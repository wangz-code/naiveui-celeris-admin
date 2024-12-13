<template>
  <n-card :title="canvasDoc.tittle" size="small">
    <template #header-extra >
      <n-flex>
        <div>
          <n-popover trigger="hover">
            <template #trigger>
              <n-input-group>
                <n-input-group-label :size="size">间距</n-input-group-label>
                <n-input-number v-for="(_, colIdx) in canvasDoc.margin" v-model:value="canvasDoc.margin[colIdx]" :size="size" style="width: 40px" :show-button="false" />
              </n-input-group>
            </template>
            <span>左 上 右 下</span>
          </n-popover>
        </div>
        <n-button v-if="field" :size="size" @click="remove">删除</n-button>
      </n-flex>
    </template>
    <div v-for="canvas in canvasDoc.canvas" class="m-b-2">
      <div v-if="canvas.type == 'line'" size="small">
        <div>
          <n-radio :checked="!!canvas.dash" @change="lineType(canvas)">虚线</n-radio>
          <n-radio :checked="!canvas.dash" @change="lineType(canvas)"> 实线</n-radio>
        </div>
        <n-flex size="small">
          <template v-for="(_, k) in canvas">
            <n-input-group v-if="!['type', 'dash', 'radio'].includes(k)" class="w-0.9/4">
              <n-input-group-label :size="size">{{ label[canvas.type][k] }}</n-input-group-label>
              <n-input-number v-if="isNumber(canvas[k]) || canvas[k] == null" :size="size" v-model:value="canvas[k]" />
              <n-input v-if="isString(canvas[k])" :size="size" v-model:value="canvas[k]" />
            </n-input-group>
          </template>
          <n-input-group v-if="canvas.dash">
            <n-input-group-label :size="size">虚线(长度/间隔)</n-input-group-label>
            <n-input-number :size="size" :min="0" v-model:value="canvas.dash.length" />
            <n-input-number :size="size" :min="0" v-model:value="canvas.dash.space" />
          </n-input-group>
        </n-flex>
      </div>
      <n-flex size="small" v-if="canvas.type == 'rect'">
        <template v-for="(_, k) in canvas">
          <n-input-group v-if="k != 'type'" class="w-0.9/4">
            <n-input-group-label :size="size">{{ label[canvas.type][k] }}</n-input-group-label>
            <n-input-number v-if="isNumber(canvas[k]) || canvas[k] == null" :size="size" v-model:value="canvas[k]" />
            <n-input v-else :size="size" v-model:value="canvas[k]" />
          </n-input-group>
        </template>
      </n-flex>
    </div>
  </n-card>
</template>

<script lang="ts" setup>
import { isNumber, isString } from 'lodash-es';
import { getDoc, mergeDoc, preview } from './mix';
import { CanvasCol, CanvasLine, CanvasRect } from './type';
const canvasDoc = defineModel<CanvasCol>('col', { default: { canvas: [] } });
const { field, size = 'small' } = defineProps<{ field?: 'content' | 'background'; size?: 'small' | 'tiny' }>();

watch(
  () => canvasDoc.value,
  () => preview(),
  { deep: true },
);

const pub = {
  type: '类型',
  lineColor: '颜色',
  lineWidth: '线宽',
};
const label = {
  rect: {
    ...pub,
    x: 'X坐标',
    y: 'Y坐标',
    w: '宽',
    h: '高',
  } as { [k in keyof CanvasRect]: number | string },
  line: {
    ...pub,
    x1: '开始x1',
    x2: '结束x2',
    y1: '开始y1',
    y2: '结束y2',
  } as { [k in keyof CanvasLine]: number | string },
};
const lineType = (canvas: CanvasLine) => {
  canvas.dash = canvas.dash ? undefined : { length: 5, space: 3 };
};
const remove = () => {
  if (!field) {
    console.error('未配置字段key :field=content ');
    return;
  }
  const docData = getDoc()[field];
  const idx = docData.findIndex((item) => item.uuid == canvasDoc.value.uuid);
  if (idx != -1) {
    docData.splice(idx, 1);
    mergeDoc({ [field]: docData });
    preview();
  }
};
</script>
