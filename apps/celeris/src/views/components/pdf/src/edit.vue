<style scoped>
.row-margin {
  width: 42px;
}
.tabs-label {
  position: absolute;
  top: 80px;
  left: 0px;
  z-index: 100;
  width: 120px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.b-primary {
  border: 1px var(--primary-color) solid;
}
</style>
<template>
  <div>
    <n-flex>
      <n-button @click="preview">预览</n-button>
      <n-button @click="clean">清空</n-button>
      <n-button @click="addTable">+表格</n-button>
      <n-dropdown trigger="hover" :options="copyOptions" @select="copyTable">
        <n-button>+复制一份</n-button>
      </n-dropdown>
      <n-button @click="addMore">+测试多页</n-button>
      <n-button @click="initPdf">默认模板</n-button>
      <n-dropdown trigger="hover" :options="blockOptions" @select="addBlock">
        <n-button>+预设模板</n-button>
      </n-dropdown>
    </n-flex>
    <div class="tabs-label">
      <n-tabs placement="right" v-model:value="activeTable" @update-value="setTabs">
        <n-tab v-for="(item, idx) in tabs" :key="idx" :name="'t-' + idx" :tab="item" />
      </n-tabs>
    </div>
    <n-scrollbar ref="scroll" class="m-t-xs" style="max-height: 70vh">
      <n-flex :size="[0, 0]" style="margin-left: 100px">
        <div @click="onDomClick" @keydown="onDomClick">
          <div class="m-t-lg" v-for="(item, idx) in docDefinition.content" :key="idx">
            <n-card v-if="item.table" :id="'t-' + idx" class="b-primary" hoverable>
              <div class="top-bar">
                <n-flex :size="[2, 5]">
                  <div>
                    <n-input v-model:value="item.table.tittle" size="small" style="width: 110px">
                      <template #prefix>
                        <n-icon size="20" color="var(--primary-color)">
                          <Tabler3DCubeSphere />
                        </n-icon>
                      </template>
                    </n-input>
                  </div>
                  <n-flex :size="[3, 0]">
                    <div>
                      <n-popover trigger="hover">
                        <template #trigger>
                          <n-input-group>
                            <n-input-group-label size="small">表间距</n-input-group-label>
                            <n-input-number v-model:value="item.margin[0]" size="small" placeholder="0" class="row-margin" :show-button="false" />
                            <n-input-number v-model:value="item.margin[1]" size="small" placeholder="0" class="row-margin" :show-button="false" />
                            <n-input-number v-model:value="item.margin[2]" size="small" placeholder="0" class="row-margin" :show-button="false" />
                            <n-input-number v-model:value="item.margin[3]" size="small" placeholder="0" class="row-margin" :show-button="false" />
                          </n-input-group>
                        </template>
                        <span>左 上 右 下</span>
                      </n-popover>
                    </div>
                    <n-select size="small" style="width: 80px" v-model:value="item.layout" :options="layoutOptions" />
                    <n-button size="small" @click="addTableCol(item.table)">+列</n-button>
                    <n-button size="small" @click="addTableRow(item.table)">+行</n-button>
                    <n-dropdown trigger="hover" :options="makeOpt(item.table)" @select="addTableRow(item.table, $event)">
                      <n-button size="small">复制x行</n-button>
                    </n-dropdown>
                    <n-button size="small" @click="remove(idx)">删表</n-button>
                  </n-flex>
                </n-flex>
                <n-flex class="m-b-xs m-t-xs" :size="[3, 0]">
                  <div v-for="(w, wIdx) in item.table.widths">
                    <n-popover trigger="hover">
                      <template #trigger>
                        <n-input-group>
                          <n-input-group-label size="tiny"> 列{{ wIdx + 1 }} </n-input-group-label>
                          <n-input-group-label size="tiny">
                            <span v-if="item.table.widths[wIdx] == '*'">填充</span>
                            <span v-else-if="item.table.widths[wIdx] == 'auto'">自动</span>
                            <span v-else> {{ item.table.widths[wIdx] }}</span>
                          </n-input-group-label>
                        </n-input-group>
                      </template>
                      列宽:
                      <n-button-group size="tiny">
                        <n-button tag="n-input" @click="item.table.widths[wIdx] = 'auto'" @blur="preview"> 自动 </n-button>
                        <n-button tag="n-input" @click="item.table.widths[wIdx] = '*'" @blur="preview"> 填充 </n-button>
                        <n-input-number v-model:value="item.table.widths[wIdx]" size="tiny" @blur="preview" placeholder="宽度" style="width: 45px" :show-button="false" />
                      </n-button-group>
                    </n-popover>
                  </div>
                </n-flex>
                <div>
                  <n-tabs size="small" type="line" animated v-model:value="item.table.tabs">
                    <n-tab-pane v-for="(t, tIdx) in item.table.body" :key="tIdx" :name="tIdx" :tab="tIdx + 1 + '行'">
                      <div>
                        <n-list>
                          <n-card size="small">
                            <template #header>
                              <n-flex justify="space-between" :size="[5, 0]">
                                <div>
                                  <n-tag :bordered="false" type="info" size="small"> 第 {{ tIdx + 1 }} 行</n-tag>
                                </div>
                                <n-button size="tiny" @click="removeRow(item.table, tIdx)">
                                  <template #icon>
                                    <n-icon :component="Trash"></n-icon>
                                  </template>
                                  删行
                                </n-button>
                              </n-flex>
                            </template>
                            <div v-for="(body, bIdx) in t" :key="bIdx">
                              <n-list-item v-if="body.show == undefined || body.show">
                                <template #prefix>
                                  <n-tag :bordered="false" type="default" size="small"> {{ bIdx + 1 }}列</n-tag>
                                </template>
                                <div>
                                  <div v-if="body.image != undefined">
                                    <n-flex justify="space-between" align="end">
                                      <div>
                                        <n-input type="text" v-model:value="body.src" size="small" @update-value="setImg" />
                                      </div>
                                      <n-flex align="end">
                                        <div>
                                          <img :src="body.src" width="50" />
                                        </div>
                                        <n-button-group>
                                          <n-button size="tiny" :type="body.alignment == 'left' ? 'primary' : 'default'" @click="body.alignment = 'left'"> 左 </n-button>
                                          <n-button size="tiny" :type="body.alignment == 'center' ? 'primary' : 'default'" @click="body.alignment = 'center'"> 中 </n-button>
                                          <n-button size="tiny" :type="body.alignment == 'right' ? 'primary' : 'default'" @click="body.alignment = 'right'"> 右 </n-button>
                                        </n-button-group>
                                        <div>
                                          <n-input-group>
                                            <n-input-group-label size="tiny">宽/高</n-input-group-label>
                                            <n-input-number v-model:value="body.width" size="tiny" placeholder="尺寸" style="width: 40px" :show-button="false" />
                                            <n-input-number v-model:value="body.height" size="tiny" placeholder="尺寸" style="width: 40px" :show-button="false" />
                                          </n-input-group>
                                        </div>
                                      </n-flex>
                                    </n-flex>
                                  </div>
                                  <div v-if="body.text != undefined">
                                    <n-flex justify="space-between">
                                      <div>
                                        <n-input v-model:value="body.text" size="small" type="text" placeholder="请输入" />
                                      </div>
                                      <n-flex>
                                        <n-checkbox v-model:checked="body.bold">粗体</n-checkbox>
                                        <n-button-group>
                                          <n-button size="tiny" :type="body.alignment == 'left' ? 'primary' : 'default'" @click="body.alignment = 'left'"> 左 </n-button>
                                          <n-button size="tiny" :type="body.alignment == 'center' ? 'primary' : 'default'" @click="body.alignment = 'center'"> 中 </n-button>
                                          <n-button size="tiny" :type="body.alignment == 'right' ? 'primary' : 'default'" @click="body.alignment = 'right'"> 右 </n-button>
                                        </n-button-group>
                                        <div>
                                          <n-input-group>
                                            <n-input-group-label size="tiny">字体</n-input-group-label>
                                            <n-input-number v-model:value="body.fontSize" size="tiny" placeholder="字体大小" style="width: 80px" />
                                          </n-input-group>
                                        </div>
                                      </n-flex>
                                    </n-flex>
                                  </div>
                                  <div v-if="body.qr != undefined">
                                    <n-flex justify="space-between" align="end">
                                      <div>
                                        <n-input type="text" size="small" v-model:value="body.qr" />
                                      </div>
                                      <n-flex align="end">
                                        <vue-qrcode :value="body.qr" style="width: 50px" />
                                        <n-button-group>
                                          <n-button size="tiny" :type="body.alignment == 'left' ? 'primary' : 'default'" @click="body.alignment = 'left'"> 左 </n-button>
                                          <n-button size="tiny" :type="body.alignment == 'center' ? 'primary' : 'default'" @click="body.alignment = 'center'"> 中 </n-button>
                                          <n-button size="tiny" :type="body.alignment == 'right' ? 'primary' : 'default'" @click="body.alignment = 'right'"> 右 </n-button>
                                        </n-button-group>
                                        <div>
                                          <n-input-group>
                                            <n-input-group-label size="tiny">宽高</n-input-group-label>
                                            <n-input-number v-model:value="body.fit" size="tiny" placeholder="尺寸" style="width: 80px" />
                                          </n-input-group>
                                        </div>
                                      </n-flex>
                                    </n-flex>
                                  </div>
                                  <div v-if="body.ol != undefined">
                                    <n-card title="有序列表" size="small">
                                      <template #header-extra>
                                        <n-flex :size="[5, 0]">
                                          <n-select size="tiny" style="width: 80px" v-model:value="body.type" :options="listTypeOptions" />
                                          <n-popover trigger="hover" v-if="body.type != 'none'">
                                            <template #trigger>
                                              <n-button size="tiny"> 分割符{{ body.separator }} </n-button>
                                            </template>
                                            <n-button-group size="small">
                                              <n-button @click="body.separator = ['(', ')']" @blur="preview"> (1.) </n-button>
                                              <n-button @click="body.separator = ')'" @blur="preview"> 1.) </n-button>
                                              <n-input v-model:value="body.separator" size="tiny" @blur="preview" placeholder="输入" style="width: 50px" />
                                            </n-button-group>
                                          </n-popover>
                                          <n-checkbox v-model:checked="body.bold">粗体</n-checkbox>
                                          <n-button-group>
                                            <n-button size="tiny" :type="body.alignment == 'left' ? 'primary' : 'default'" @click="body.alignment = 'left'"> 左 </n-button>
                                            <n-button size="tiny" :type="body.alignment == 'center' ? 'primary' : 'default'" @click="body.alignment = 'center'"> 中 </n-button>
                                            <n-button size="tiny" :type="body.alignment == 'right' ? 'primary' : 'default'" @click="body.alignment = 'right'"> 右 </n-button>
                                          </n-button-group>
                                          <div>
                                            <n-input-group>
                                              <n-input-group-label size="tiny">字体</n-input-group-label>
                                              <n-input-number v-model:value="body.fontSize" size="tiny" placeholder="字体大小" style="width: 80px" />
                                            </n-input-group>
                                          </div>
                                          <n-button size="tiny" @click="body.ol = []">清空</n-button>
                                          <n-button size="tiny" @click="body.ol.push('')">增加一条</n-button>
                                        </n-flex>
                                      </template>
                                      <n-list>
                                        <n-list-item v-for="(ol, olIdx) in body.ol">
                                          <template #prefix>
                                            <n-badge type="info" :value="olIdx + 1" :max="15" />
                                          </template>
                                          <div class="m-b-1">
                                            <n-input v-if="isString(ol)" type="textarea" rows="2" v-model:value="body.ol[olIdx]"></n-input>
                                            <n-flex v-if="ol.text != undefined" justify="space-between">
                                              <div>
                                                <n-input v-model:value="ol.text" size="small" type="text" placeholder="请输入" />
                                              </div>
                                              <n-flex>
                                                <n-checkbox v-model:checked="ol.bold">粗体</n-checkbox>
                                                <n-button-group>
                                                  <n-button size="tiny" :type="ol.alignment == 'left' ? 'primary' : 'default'" @click="ol.alignment = 'left'"> 左 </n-button>
                                                  <n-button size="tiny" :type="ol.alignment == 'center' ? 'primary' : 'default'" @click="ol.alignment = 'center'"> 中 </n-button>
                                                  <n-button size="tiny" :type="ol.alignment == 'right' ? 'primary' : 'default'" @click="ol.alignment = 'right'"> 右 </n-button>
                                                </n-button-group>
                                                <div>
                                                  <n-input-group>
                                                    <n-input-group-label size="tiny">字体</n-input-group-label>
                                                    <n-input-number v-model:value="ol.fontSize" size="tiny" placeholder="字体大小" style="width: 80px" />
                                                  </n-input-group>
                                                </div>
                                                <div>
                                                  <n-popover trigger="hover">
                                                    <template #trigger>
                                                      <n-input-group>
                                                        <n-input-group-label size="tiny">间距</n-input-group-label>
                                                        <n-input-number v-model:value="ol.margin[0]" size="tiny" placeholder="0" style="width: 40px" :show-button="false" />
                                                        <n-input-number v-model:value="ol.margin[1]" size="tiny" placeholder="0" style="width: 40px" :show-button="false" />
                                                        <n-input-number v-model:value="ol.margin[2]" size="tiny" placeholder="0" style="width: 40px" :show-button="false" />
                                                        <n-input-number v-model:value="ol.margin[3]" size="tiny" placeholder="0" style="width: 40px" :show-button="false" />
                                                      </n-input-group>
                                                    </template>
                                                    <span>左 上 右 下</span>
                                                  </n-popover>
                                                </div>
                                              </n-flex>
                                            </n-flex>

                                            <n-flex v-if="ol.qr != undefined" justify="space-between" align="end">
                                              <div>
                                                <n-input type="text" size="small" v-model:value="ol.qr" />
                                              </div>
                                              <n-flex align="end">
                                                <vue-qrcode :value="ol.qr" style="width: 50px" />
                                                <n-button-group>
                                                  <n-button size="tiny" :type="ol.alignment == 'left' ? 'primary' : 'default'" @click="ol.alignment = 'left'"> 左 </n-button>
                                                  <n-button size="tiny" :type="ol.alignment == 'center' ? 'primary' : 'default'" @click="ol.alignment = 'center'"> 中 </n-button>
                                                  <n-button size="tiny" :type="ol.alignment == 'right' ? 'primary' : 'default'" @click="ol.alignment = 'right'"> 右 </n-button>
                                                </n-button-group>
                                                <div>
                                                  <n-input-group>
                                                    <n-input-group-label size="tiny">宽高</n-input-group-label>
                                                    <n-input-number v-model:value="ol.fit" size="tiny" placeholder="尺寸" style="width: 80px" />
                                                  </n-input-group>
                                                </div>
                                              </n-flex>
                                            </n-flex>
                                          </div>
                                          <n-flex :size="[5, 0]">
                                            <n-popselect @update:value="setColType($event, body.ol, olIdx)" :options="listColTypeOpts" trigger="hover">
                                              <n-button size="tiny">切换</n-button>
                                            </n-popselect>
                                            <n-button size="tiny" @click="body.ol.splice(olIdx, 1)">移除</n-button>
                                          </n-flex>
                                        </n-list-item>
                                      </n-list>
                                    </n-card>
                                  </div>
                                </div>
                                <n-flex :size="[5, 2]" class="m-t-xs">
                                  <n-popselect @update:value="setColType($event, t, bIdx)" :options="options" trigger="hover">
                                    <n-button size="tiny">切换</n-button>
                                  </n-popselect>
                                  <div>
                                    <n-input-group>
                                      <n-input-group-label size="tiny">跨列</n-input-group-label>
                                      <n-input-number
                                        @update-value="setColSpan($event, t, bIdx)"
                                        v-model:value="body.colSpan"
                                        size="tiny"
                                        placeholder="0"
                                        style="width: 30px"
                                        :show-button="false"
                                      />
                                    </n-input-group>
                                  </div>
                                  <div>
                                    <n-input-group>
                                      <n-input-group-label size="tiny">跨行</n-input-group-label>
                                      <n-input-number v-model:value="body.rowSpan" size="tiny" placeholder="0" style="width: 30px" :show-button="false" />
                                    </n-input-group>
                                  </div>
                                  <div>
                                    <n-input-group>
                                      <n-input-group-label size="tiny">行高</n-input-group-label>
                                      <n-input-number v-model:value="body.lineHeight" size="tiny" placeholder="0" style="width: 30px" :show-button="false" />
                                    </n-input-group>
                                  </div>
                                  <div>
                                    <n-popover trigger="hover">
                                      <template #trigger>
                                        <n-input-group>
                                          <n-input-group-label size="tiny">列间距</n-input-group-label>
                                          <n-input-number v-model:value="body.margin[0]" size="tiny" placeholder="0" style="width: 40px" :show-button="false" />
                                          <n-input-number v-model:value="body.margin[1]" size="tiny" placeholder="0" style="width: 40px" :show-button="false" />
                                          <n-input-number v-model:value="body.margin[2]" size="tiny" placeholder="0" style="width: 40px" :show-button="false" />
                                          <n-input-number v-model:value="body.margin[3]" size="tiny" placeholder="0" style="width: 40px" :show-button="false" />
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
                                      <n-checkbox v-for="(_, bIndex) in body.border" v-model:checked="body.border[bIndex]" @update-checked="preview">
                                        {{ position[bIndex] }}
                                      </n-checkbox>
                                    </n-popover>
                                  </div>
                                  <n-button size="tiny" @click="removeCol(item.table, bIdx)">删列</n-button>
                                </n-flex>
                                <n-divider style="margin: 0.5rem 0px" />
                              </n-list-item>
                            </div>
                          </n-card>
                        </n-list>
                      </div>
                    </n-tab-pane>
                  </n-tabs>
                </div>
              </div>
            </n-card>
          </div>
        </div>
      </n-flex>
    </n-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { Tabler3DCubeSphere, Trash } from '@vicons/tabler';
import { cloneDeep, debounce, isNumber, isObject, isString, keyBy } from 'lodash-es';
import { NInput, NTab } from 'naive-ui';
import { ref } from 'vue';
import VueQrcode from 'vue-qrcode';
import { lineTpl } from './tpl';
import { isSlotEmpty } from 'naive-ui/es/_utils';
const emit = defineEmits(['preview']);
const logo = ref('https://raw.githubusercontent.com/WangSunio/img/main/images/celeris.png');
const docDefinition = ref({
  content: [] as any[],
  images: { logo: logo.value },
  styles: {},
  defaultStyle: {
    font: 'SySt',
    fontSize: 15,
    bold: false,
  },
});

let copyVal = null;
const copyTable = (num) => {
  console.log('num log==>', num);
  if (copyVal == null) copyVal = docDefinition.value.content;
  const res = [];
  for (let i = 0; i < num; i++) {
    res.push(...cloneDeep(copyVal)!);
  }
  docDefinition.value.content.push(...res);
  preview();
};

const setImg = (value) => {
  docDefinition.value.images.logo = value;
};
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
];
const listColTypeOpts = [
  {
    label: '文本',
    value: 'text',
  },
  {
    label: '二维码',
    value: 'qr',
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
const listTypeOptions = [
  {
    label: '无序',
    value: 'none',
  },
  {
    label: '数字',
    value: '',
  },
  {
    label: 'abc',
    value: 'lower-alpha',
  },
  {
    label: 'ABC',
    value: 'upper-alpha',
  },
];

const blockOptions = [
  {
    label: '+ 头部logo',
    key: 'addHeader',
  },
  {
    label: '+ 顾客信息',
    key: 'addBaseInfo',
  },
  {
    label: '+ 商品表格',
    key: 'addGoods',
  },
  {
    label: '+ 其他',
    key: 'addOther',
  },
];

const copyOptions = [1, 2, 3, 4].map((item) => ({ label: `复制${item}份`, key: item }));
const colPub = () => {
  return {
    alignment: 'center',
    bold: false,
    colSpan: 1,
    rowSpan: 1,
    margin: [0, 0, 0, 0],
    border: [true, true, true, true],
  };
};
const textPub = () => {
  return {
    fontSize: 10,
    ...colPub(),
  };
};
const position = ['左', '上', '右', '下'];
const activeTable = ref('t-0');
const scroll = ref(null);
const setTabs = (value: string) => {
  document.getElementById(value)?.scrollIntoView();
};
const tabs = computed(() => docDefinition.value.content.map((item) => item.table.tittle));

const setColType = (type: 'text' | 'image' | 'qr', table, idx) => {
  const item = {
    text: { ...textPub(), text: '文本' },
    image: {
      ...colPub(),
      image: 'logo',
      src: logo.value,
      width: 50,
      height: 50,
    },
    qr: { qr: '二维码', fit: 80, ...colPub() },
    ol: {
      ...colPub(),
      ol: [
        '如果本次付款金额小于销售单金额的20%，则以本次付款金额作为交易定金；如果本次付款金额大于等于销售单金额的20%，则以销售单金额的20%作为定金(定制产品除外，由双方自行约定)。',
      ],
      type: '',
    },
    ul: {
      ...textPub(),
      ul: [
        '如果本次付款金额小于销售单金额的20%，则以本次付款金额作为交易定金；如果本次付款金额大于等于销售单金额的20%，则以销售单金额的20%作为定金(定制产品除外，由双方自行约定)。',
      ],
      type: '',
    },
  };
  table[idx] = item[type];
  console.log('table log==>', type, table, idx);
};

const addTable = () => {
  docDefinition.value.content.push({
    table: {
      tittle: '表格' + (docDefinition.value.content.length + 1),
      body: [
        [
          { text: '电子销售单', ...textPub() },
          { text: '电子销售单', ...textPub() },
          { text: '电子销售单', ...textPub() },
        ],
      ],
      widths: ['*', '*', '*'],
    },
    layout: '',
    margin: [0, 0, 0, 0],
  });
  preview();
};

const addHeader = () => {
  docDefinition.value.content.unshift({
    table: {
      tittle: '头部',
      body: [
        [
          {
            ...colPub(),
            image: 'logo',
            src: logo.value,
            width: 50,
            height: 50,
            alignment: 'left',
          },
          {
            ...textPub(),
            text: '电子销售单',
            fontSize: 20,
            margin: [0, 10, 0, 0],
            bold: true,
          },
          { ...colPub(), qr: '二维码', alignment: 'right', fit: 80 },
        ],
        [
          {
            text: '【正常订单】',
            ...textPub(),
            margin: [0, -20, 0, 0],
            bold: true,
            colSpan: 3,
          },
          { text: '', ...textPub() },
          { text: '', ...textPub() },
        ],
        [
          {
            text: '销售验证码：$[billno]',
            ...textPub(),
            bold: true,
            colSpan: 3,
            alignment: 'right',
          },
          { text: '', ...textPub() },
          { text: '', ...textPub() },
        ],
        [
          {
            text: '温馨提示：为了有效保障顾客的合法权益，请详细阅读本单据购物须知，并确认单据内各项购物内容。',
            ...textPub(),
            bold: true,
            colSpan: 3,
            alignment: 'left',
          },
          { text: '', ...textPub() },
          { text: '', ...textPub() },
        ],
      ],
      widths: [100, '*', 100],
    },
    layout: 'noBorders',
    margin: [0, 0, 0, 1],
  });
  preview();
};

const addGoods = () => {
  docDefinition.value.content.push({
    table: {
      tittle: '商品信息',
      body: [
        [
          { text: '商品名称', ...textPub(), bold: true },
          { text: '型号', ...textPub(), bold: true },
          { text: '规格', ...textPub(), bold: true },
          { text: '单价', ...textPub(), bold: true },
          { text: '数量', ...textPub(), bold: true },
          { text: '金额', ...textPub(), bold: true },
          { text: '备注', ...textPub(), bold: true },
        ],
        [
          { text: '这个是商品名称超长这个是商品名称超长这个是商品名称超长', ...textPub(), alignment: 'left' },
          { text: 'XAS', ...textPub() },
          { text: '100*100*100', ...textPub() },
          { text: '1000', ...textPub() },
          { text: '10', ...textPub() },
          { text: '100000', ...textPub() },
          { text: '红色', ...textPub() },
        ],
      ],
      widths: ['*', 70, 70, 40, 40, 42, 60],
    },
    margin: [0, 0, 0, -1],
  });
  preview();
};

const addBaseInfo = () => {
  docDefinition.value.content.push({
    table: {
      tittle: '顾客信息',
      body: [
        [
          { text: '甲方(买方)：', ...textPub(), bold: true, alignment: 'left' },
          { text: '$[custname] / $[custcard]', ...textPub(), alignment: 'left' },
          { text: '甲方(买方)电话：', ...textPub(), bold: true, alignment: 'left' },
          { text: '$[custtelephone]', ...textPub(), alignment: 'left' },
        ],
        [
          { text: '订货日期：', ...textPub(), bold: true, alignment: 'left' },
          { text: '$[custname] / $[custcard]', ...textPub(), alignment: 'left' },
          { text: '送货时间/方式：', ...textPub(), bold: true, alignment: 'left' },
          { text: '$[custname] / $[custcard]', ...textPub(), alignment: 'left' },
        ],
        [
          { text: '送货地址：', ...textPub(), bold: true, alignment: 'left' },
          { text: '$[custname] / $[custcard]', ...textPub(), alignment: 'left', colSpan: 3 },
        ],
        [
          { text: '乙方(卖方)：', ...textPub(), bold: true, alignment: 'left' },
          { text: '$[custname] / $[custcard]', ...textPub(), alignment: 'left' },
          { text: '乙方(卖方)电话：', ...textPub(), bold: true, alignment: 'left' },
          { text: '$[custname] / $[custcard]', ...textPub(), alignment: 'left' },
        ],
      ],
      widths: [60, '*', 80, 160],
    },
    layout: '',
    margin: [0, 0, 0, -1],
  });
  preview();
};

const clean = () => {
  docDefinition.value.content = [];
  preview();
};
const remove = (idx: number) => {
  docDefinition.value.content.splice(idx, 1);
  preview();
};

const removeRow = (table, idx) => {
  table.body.splice(idx, 1);
  table.tabs = idx - 1 > 0 ? idx - 1 : 0;
  if (!table.body.length) {
    table.widths = [];
  }
};
const removeCol = (table, idx) => {
  for (const b of table.body) {
    b.splice(idx, 1);
  }
  if (table.body.length) {
    table.widths = new Array(table.body[0].length).fill('*');
    return;
  }
  table.widths = [];
};

const addOther = () => {
  const other = [
    {
      table: {
        tittle: '销售单金额',
        body: [
          [
            { text: '销售单金额：', ...textPub(), bold: true },
            { text: '$ 1000', ...textPub(), alignment: 'left' },
            { text: '实际收款金额最终以收款单为准', ...textPub(), bold: true, rowSpan: 2, margin: [0, 10, 0, 0] },
          ],
          [
            { text: '销售单金额(大写)：', ...textPub(), bold: true },
            { text: '壹仟元整', ...textPub(), alignment: 'left' },
          ],
        ],
        widths: [100, '*', 160],
      },
      margin: [0, 0, 0, -1],
    },
    {
      table: {
        tittle: '购物须知',
        body: [
          [
            { text: '销售单备注：', ...textPub(), bold: true, lineHeight: 3.5 },
            { text: '$memo', ...textPub(), alignment: 'left', lineHeight: 3.5 },
            {
              ol: [
                {
                  qr: 'text in QR',
                  fit: 60,
                  ...colPub(),
                  margin: [0, 0, 0, 2],
                },
                { text: '微信扫一扫,进行收货及评价', ...textPub() },
              ],
              type: 'none',
              ...colPub(),
              margin: [0, 10, 0, 0],
              rowSpan: 2,
            },
          ],
          [
            { text: '其他约定：', ...textPub(), bold: true },
            {
              ol: ['货款余额应由甲方(买方)在送货前_______天付清。', '本单销售单金额中已包含橱柜、移门等定制商品上门测量、设计、出图等费用_________元。'],
              ...textPub(),
              alignment: 'left',
            },
          ],
          [{ text: '【购物须知】：', ...textPub(), alignment: 'left', colSpan: 3, bold: true, border: [true, true, true, false] }],
          [
            {
              ol: [
                '如果本次付款金额小于销售单金额的20%，则以本次付款金额作为交易定金；如果本次付款金额大于等于销售单金额的20%，则以销售单金额的20%作为定金(定制产品除外，由双方自行约定)。',
                '甲乙双方签订协议后，双方应严格遵守：甲方(买方)违约退货的，无权要求返还定金；乙方(卖方)不能交货的，则应双倍返还定金，乙方(卖方)逾期交货的，甲方可要求乙方支付违约金；违约金计算方式为：逾期商品总价的3‰×逾期天数，违约金不超过定金的两倍。',
                '甲方(买方)在验收中发现数量、质量等方面有异议，应当场提出。验收合格签字确认。',
                '如因甲方(买方)客观原因造成乙方(卖方)无法送货入户的，甲方(买方)应承担相关责任。',
                '除本单据所约定条款，乙方(卖方)按照行业《三包责任规则》、《行业文明经营规则》的规定履行职责及承担违约责任。',
                '本单据签订后，甲方(买方)、乙方(卖方)再商议的其他变更条款，需另行书面约定。未作另行约定的，按本单据条款履行。',
              ],
              ...textPub(),
              bold: true,
              alignment: 'left',
              colSpan: 3,
              border: [true, false, true, false],
            },
          ],
        ],
        widths: [100, '*', 100],
      },
      margin: [0, 0, 0, -1],
    },
    {
      table: {
        tittle: '底部',
        body: [
          [
            { text: '一经签字确认，将视同甲方(买方)对本单据所有内容均表示同意。 ', ...textPub(), alignment: 'left', bold: true, border: [true, true, false, false] },
            { text: '', ...textPub(), margin: [0, 0, 0, 0], border: [false, true, true, false] },
          ],
          [
            { text: '甲方(买方)签字：', ...textPub(), alignment: 'left', bold: true, margin: [0, 0, 0, 0], border: [true, false, false, true] },
            { text: '乙方(卖方)签字(盖章)：', ...textPub(), alignment: 'left', bold: true, margin: [0, 0, 0, 0], border: [false, false, true, true] },
          ],
        ],
        widths: ['*', 180],
      },
      layout: '',
      margin: [0, 0, 0, -1],
    },
  ];
  docDefinition.value.content = docDefinition.value.content.concat(other);
  preview();
};

const addTableCol = (table) => {
  for (const item of table.body) {
    item.push({ text: '文本', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0], colSpan: 1, rowSpan: 1 });
  }
  table.widths.push('*');
};

const addTableRow = (table, copyIdx?: number) => {
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
const preview = () => {
  copyVal = cloneDeep(toRaw(docDefinition.value).content);
  emit('preview', cloneDeep(toRaw(docDefinition.value)));
};

const makeOpt = (table) => {
  const opt = [];
  for (let i = 0; i < table.body.length; i++) {
    opt.push({
      label: `第${i + 1}行`,
      key: i,
    });
  }
  return opt;
};
const setColSpan = (colSpan, t, idx) => {
  for (let i = idx; i <= t.length; i++) {
    if (isObject(t[i])) t[i].show = true;
  }
  if (colSpan == 1) return;
  for (let i = 1 + idx; i <= colSpan + idx - 1; i++) {
    if (isObject(t[i])) t[i].show = false;
  }
};
// 延迟触发,否则v-model会丢失数据
const onDomClick = debounce(preview, 1000);

const addMore = () => {
  emit('preview', lineTpl(10));
};
const methods = { addHeader, addBaseInfo, addGoods, addOther };
type MK = keyof typeof methods;
const addBlock = (value: MK) => methods[value]();
const initPdf = () => {
  for (const k in methods) {
    methods[k as MK]();
  }
};
onMounted(preview);
</script>
