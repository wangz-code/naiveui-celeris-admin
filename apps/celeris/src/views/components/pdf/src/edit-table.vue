<!--
 * @Author: wangqz
 * @Date: 2024-12-10
 * @LastEditTime: 2024-12-11
 * @Description: content
-->
<style scoped>
.row-margin {
  width: 42px;
}
.min-num-input {
  width: 30px;
}
.b-primary {
  border: 1px var(--primary-color) solid;
}
</style>
<template>
  <n-card size="small" class="b-primary m-b-2" hoverable>
    <n-flex :size="[2, 5]">
      <div>
        <n-input v-model:value="table.table.tittle" size="small" style="width: 110px">
          <template #prefix>
            <n-icon size="20" color="var(--primary-color)">
              <Tabler3DCubeSphere />
            </n-icon>
          </template>
        </n-input>
      </div>
      <n-flex size="small" justify="space-around">
        <div>
          <n-popover trigger="hover">
            <template #trigger>
              <n-input-group>
                <n-input-group-label size="small">表间距</n-input-group-label>
                <n-input-number v-for="(_, mIdx) in table.margin" v-model:value="table.margin[mIdx]" size="small" class="row-margin" :show-button="false" />
              </n-input-group>
            </template>
            <span>{{ position.join(' ') }}</span>
          </n-popover>
        </div>
        <n-select size="small" style="width: 80px" v-model:value="table.layout" :options="layoutOptions" />
        <n-button size="small" @click="addTableCol(table.table)">+列</n-button>
        <n-button size="small" @click="addTableRow(table.table)">+行</n-button>
        <n-dropdown trigger="hover" :options="makeOpt(table.table)" @select="addTableRow(table.table, $event)">
          <n-button size="small">复制x行</n-button>
        </n-dropdown>
        <n-button size="small" @click="remove()">删表</n-button>
      </n-flex>
    </n-flex>
    <n-flex class="m-b-xs m-t-xs" :size="[3, 0]">
      <div v-for="(_, wIdx) in table.table.widths">
        <n-popover trigger="hover">
          <template #trigger>
            <n-input-group>
              <n-input-group-label size="tiny"> 列{{ wIdx + 1 }} </n-input-group-label>
              <n-input-group-label size="tiny">
                <span v-if="table.table.widths[wIdx] == '*'">填充</span>
                <span v-else-if="table.table.widths[wIdx] == 'auto'">自动</span>
                <span v-else> {{ table.table.widths[wIdx] }}</span>
              </n-input-group-label>
            </n-input-group>
          </template>
          列宽:
          <n-button-group size="tiny">
            <n-button @click="table.table.widths[wIdx] = 'auto'"> 自动 </n-button>
            <n-button @click="table.table.widths[wIdx] = '*'"> 填充 </n-button>
            <n-input-number v-model:value="table.table.widths[wIdx] as number" size="tiny" placeholder="宽度" style="width: 45px" :show-button="false" />
          </n-button-group>
        </n-popover>
      </div>
    </n-flex>
    <n-tabs size="small" type="line" animated v-model:value="table.table.tabs">
      <n-tab-pane v-for="(cols, colsIdx) in table.table.body" :key="colsIdx" :name="colsIdx" :tab="colsIdx + 1 + '行'">
        <div>
          <n-list>
            <n-card size="small">
              <template #header>
                <n-flex justify="space-between" :size="[5, 0]">
                  <div>
                    <n-tag :bordered="false" type="info" size="small"> 第 {{ colsIdx + 1 }} 行</n-tag>
                  </div>
                  <n-flex>
                    <n-button size="tiny" @click="batRowAction(table.table, colsIdx, 'cleanBorder')"> 批量去边框 </n-button>
                    <n-button size="tiny" @click="batRowAction(table.table, colsIdx, 'addBold')"> 批量加粗 </n-button>
                    <n-button size="tiny" @click="removeRow(table.table, colsIdx)">
                      <template #icon>
                        <n-icon :component="Trash"></n-icon>
                      </template>
                      删行
                    </n-button>
                  </n-flex>
                </n-flex>
              </template>
              <div v-for="(col, colIdx) in cols" :key="colIdx">
                <n-list-item v-if="col.show == undefined || col.show">
                  <template #prefix>
                    <n-tag :bordered="false" type="default" size="small"> {{ colIdx + 1 }}列</n-tag>
                  </template>
                  <div>
                    <edit-image v-if="isString(col.image)" v-model:col="cols[colIdx]" />
                    <edit-text v-if="isString(col.text)" v-model:col="cols[colIdx]" />
                    <edit-qrcode v-if="isString(col.qr)" v-model:col="cols[colIdx]" />
                    <edit-svg v-if="isString(col.svg)" v-model:col="cols[colIdx]" />
                    <edit-columns v-if="isArray(col.columns)" v-model:col="cols[colIdx]" />
                    <edit-ol v-if="isArray(col.ol)" v-model:col="cols[colIdx]" />
                  </div>
                  <n-flex :size="[5, 2]" class="m-t-xs">
                    <n-popselect @update:value="setColType($event, cols, colIdx)" :options="options" trigger="hover">
                      <n-button size="tiny">切换</n-button>
                    </n-popselect>
                    <div>
                      <n-input-group>
                        <n-input-group-label size="tiny">跨列</n-input-group-label>
                        <n-input-number
                          v-model:value="col.colSpan"
                          :max="cols.length"
                          :min="1"
                          :show-button="false"
                          size="tiny"
                          placeholder="0"
                          class="min-num-input"
                          @update-value="setColSpan($event, cols, colIdx)"
                        />
                      </n-input-group>
                    </div>
                    <div>
                      <n-input-group>
                        <n-input-group-label size="tiny">跨行</n-input-group-label>
                        <n-input-number v-model:value="col.rowSpan" :max="table.table.body.length" :min="1" :show-button="false" class="min-num-input" size="tiny" />
                      </n-input-group>
                    </div>
                    <div>
                      <n-input-group>
                        <n-input-group-label size="tiny">行高</n-input-group-label>
                        <n-input-number v-model:value="col.lineHeight" size="tiny" placeholder="" class="min-num-input" :show-button="false" />
                      </n-input-group>
                    </div>
                    <div>
                      <n-popover trigger="hover">
                        <template #trigger>
                          <n-input-group>
                            <n-input-group-label size="tiny">列间距</n-input-group-label>
                            <n-input-number v-for="(_, colIdx) in col.margin" v-model:value="col.margin[colIdx]" size="tiny" style="width: 40px" :show-button="false" />
                          </n-input-group>
                        </template>
                        <span>左 上 右 下</span>
                      </n-popover>
                    </div>
                    <div>
                      <n-popover trigger="hover">
                        <template #trigger>
                          <n-button size="tiny">边框</n-button>
                        </template>
                        <n-flex :size="[10, 0]" class="m-b-1">
                          <n-checkbox v-for="(_, bIndex) in col.border" v-model:checked="col.border[bIndex]" @update-checked="preview">
                            {{ position[bIndex] }}
                          </n-checkbox>
                        </n-flex>
                        <n-flex :size="[10, 0]">
                          <n-button size="tiny" @click="setBorder('lr', col)">左右</n-button>
                          <n-button size="tiny" @click="setBorder('tb', col)">上下</n-button>
                          <n-button size="tiny" @click="setBorder('none', col)">无框</n-button>
                          <n-button size="tiny" @click="setBorder('all', col)">全框</n-button>
                        </n-flex>
                      </n-popover>
                    </div>
                    <n-button size="tiny" @click="removeCol(table.table, colIdx)">删列</n-button>
                  </n-flex>
                  <n-divider v-if="colIdx != cols.length - 1" style="margin: 0.5rem 0px" />
                </n-list-item>
              </div>
            </n-card>
          </n-list>
        </div>
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>

<script lang="ts" setup>
import { Tabler3DCubeSphere, Trash } from '@vicons/tabler';
import { cloneDeep, isArray, isNumber, isObject, isString } from 'lodash-es';
import { NInput } from 'naive-ui';
import { EditColumns, EditImage, EditOl, EditQrcode, EditSvg, EditText } from './index';
import { getDoc, mergeDoc, preview, setColType, textPub } from './mix';
import { TableCol, TableData } from './type';
const emit = defineEmits(['update']);
const { doc: table, field } = defineProps<{ doc: TableCol; field: 'content' | 'background' }>();
watch(
  () => table,
  () => preview(),
  { deep: true },
);

const options = [
  {
    label: '文本',
    value: 'text',
  },
  {
    label: '图片',
    value: 'image',
  },
  {
    label: '二维码',
    value: 'qr',
  },
  {
    label: '有序列表',
    value: 'ol',
  },
  {
    label: 'Svg图标',
    value: 'svg',
  },
  {
    label: '组合',
    value: 'columns',
  },
];

const layoutOptions = [
  {
    label: '全框',
    value: '',
  },
  {
    label: '无框',
    value: 'noBorders',
  },
  {
    label: '细线',
    value: 'lightHorizontalLines',
  },
];

const position = ['左', '上', '右', '下'];

const remove = () => {
  if (!field) {
    console.error('未配置字段key :field=content ');
    return;
  }
  const docData = getDoc()[field];
  const idx = docData.findIndex((item) => item.uuid == table.uuid);
  if (idx != -1) {
    docData.splice(idx, 1);
    mergeDoc({ [field]: docData });
  }
};

const removeRow = (table: TableData, idx: number) => {
  table.body.splice(idx, 1);
  table.tabs = idx - 1 > 0 ? idx - 1 : 0;
  if (!table.body.length) table.widths = [];
};
const batRowAction = (table: TableData, idx: number, action: 'cleanBorder' | 'addBold') => {
  const cols = table.body[idx];
  for (const col of cols) {
    if (action == 'addBold') col.bold = true;
    if (action == 'cleanBorder') col.border = [false, false, false, false];
  }
};

const removeCol = (table: TableData, idx: number) => {
  for (const b of table.body) {
    b.splice(idx, 1);
  }
  if (table.body.length) {
    table.widths = new Array(table.body[0].length).fill('*');
    return;
  }
  table.widths = [];
};

const addTableCol = (table: TableData) => {
  for (const col of table.body) {
    col.push({ text: '文本', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0], colSpan: 1, rowSpan: 1 });
  }
  table.widths.push('*');
};

const addTableRow = (table: TableData, copyIdx?: number) => {
  nextTick(() => {
    table.tabs = table.body.length - 1;
  });
  if (table.body.length) {
    if (isNumber(copyIdx)) {
      table.body.push(cloneDeep(table.body[copyIdx]));
      return;
    }
    const row = new Array(table.body[0].length).fill(0).map(() => ({ text: '', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0], colSpan: 1, rowSpan: 1 }));
    table.body.push(row);
    return;
  }
  table.body = [
    [
      { text: '', ...textPub() },
      { text: '', ...textPub() },
      { text: '', ...textPub() },
      { text: '', ...textPub() },
    ],
  ];
  table.widths = ['*', '*', '*', '*'];
};

const makeOpt = (table: TableData) => {
  const opt = [];
  for (let i = 0; i < table.body.length; i++) {
    opt.push({
      label: `第${i + 1}行`,
      key: i,
    });
  }
  return opt;
};

const setColSpan = (colSpan: number | null, cols: any[], idx: number) => {
  if (colSpan == null) return;
  for (let i = idx; i <= cols.length; i++) {
    if (isObject(cols[i])) cols[i].show = true;
  }
  if (colSpan == 1) return;
  for (let i = 1 + idx; i <= colSpan + idx - 1; i++) {
    if (isObject(cols[i])) cols[i].show = false;
  }
};

const setBorder = (type: 'lr' | 'tb' | 'none' | 'all', table: TableData) => {
  if (type == 'lr') table.border = [true, false, true, false];
  if (type == 'tb') table.border = [false, true, false, true];
  if (type == 'all') table.border = [true, true, true, true];
  if (type == 'none') table.border = [false, false, false, false];
};
</script>
