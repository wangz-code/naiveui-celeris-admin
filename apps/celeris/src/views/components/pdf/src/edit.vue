<style scoped>
.row-margin {
  width: 40px;
}
.tabs-label {
  position: absolute;
  top: 10px;
  right: 0px;
  z-index: 100;
}
.top-bar {
  position: sticky;
  top: 0px;
  z-index: 9;
  padding-top: 10px;
  background-color: white;
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
      <n-button @click="initPdf">初始化</n-button>
      <n-button @click="addOther">+其他</n-button>
    </n-flex>
    <div class="tabs-label">
      <n-tabs placement="right" @update-value="setTabs">
        <n-tab-pane v-for="(item, idx) in tabs" :key="idx" :name="'t-' + idx" :tab="item"></n-tab-pane>
      </n-tabs>
    </div>
    <n-scrollbar ref="scroll" style="max-height: 68vh" class="w-9/10">
      <n-flex :size="[0, 0]">
        <div class="w-full" @click="onDomClick" @keydown="onDomClick">
          <div class="m-t-lg" v-for="(item, idx) in docDefinition.content" :key="idx">
            <!-- <n-scrollbar class="m-t-xs" v-for="(item, idx) in docDefinition.content" :key="idx" style="max-height: 66vh"> -->
            <n-card v-if="item.table" :id="'t-' + idx" class="b-primary" hoverable>
              <div class="top-bar">
                <n-flex>
                  <div>
                    <n-input v-model:value="item.table.tittle" size="small" style="width: 90px" class="b-primary"></n-input>
                  </div>
                  <n-flex>
                    <div>
                      <n-input-group>
                        <n-input-group-label size="small">表间距(左上右下)</n-input-group-label>
                        <n-input-number v-model:value="item.margin[0]" size="small" placeholder="0" class="row-margin" :show-button="false" />
                        <n-input-number v-model:value="item.margin[1]" size="small" placeholder="0" class="row-margin" :show-button="false" />
                        <n-input-number v-model:value="item.margin[2]" size="small" placeholder="0" class="row-margin" :show-button="false" />
                        <n-input-number v-model:value="item.margin[3]" size="small" placeholder="0" class="row-margin" :show-button="false" />
                      </n-input-group>
                    </div>
                    <n-select size="small" style="width: 100px" v-model:value="item.layout" :options="layoutOptions" />
                    <n-button size="small" @click="addTableCol(item.table)">+列</n-button>
                    <n-button size="small" @click="addTableRow(item.table)">+行</n-button>
                    <n-dropdown trigger="hover" :options="makeOpt(item.table)" @select="addTableRow(item.table, $event)">
                      <n-button size="small" @click="addTableRow(item.table, 0)">+X</n-button>
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
                  <n-tabs size="small" type="line" animated @update-value="setTabs($event,true)">
                    <n-tab-pane v-for="(_, idx) in item.table.body" :key="idx" :name="'p-' + idx" :tab="idx + 1 + '行'"></n-tab-pane>
                  </n-tabs>
                </div>
              </div>
              <div>
                <n-list v-for="(t, tIdx) in item.table.body" :key="tIdx" :id="'p-' + tIdx">
                  <n-card size="small">
                    <template #header>
                      <n-flex justify="space-between" :size="[5, 0]">
                        <div>
                          <n-tag :bordered="false" type="info" size="small"> 第 {{ tIdx + 1 }} 行</n-tag>
                          <n-tag :bordered="false" type="default" size="small" class="m-l-xs">共 {{ item.table.body.length }} 行</n-tag>
                        </div>
                        <n-button size="tiny" @click="removeRow(item.table, tIdx)">
                          <template #icon>
                            <n-icon :component="Trash"></n-icon>
                          </template>
                          删除行
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
                            <n-card title="列表" size="small">
                              <template #header-extra>
                                <n-flex :size="[5, 0]">
                                  <n-button size="tiny">清空</n-button>
                                  <n-button size="tiny">增加一行</n-button>
                                  <n-popselect @update:value="setIndex($event, t, bIdx)" :options="indexOptions" trigger="hover">
                                    <n-button size="tiny">设置序号</n-button>
                                  </n-popselect>
                                </n-flex>
                              </template>
                              <n-list>
                                <n-list-item v-for="(ol, olIdx) in body.ol">
                                  <div>
                                    <n-input type="textarea" v-model:value="body.ol[olIdx]"></n-input>
                                  </div>
                                  <n-flex :size="[5, 0]">
                                    <n-popselect @update:value="setColType($event, t, bIdx)" :options="options" trigger="hover">
                                      <n-button size="tiny">切换</n-button>
                                    </n-popselect>
                                    <n-button size="tiny">移除</n-button>
                                  </n-flex>
                                </n-list-item>
                              </n-list>
                            </n-card>
                          </div>
                          <div v-if="body.table != undefined">
                            <n-card title="表格" size="small">
                              <template #header-extra>
                                <n-flex :size="[5, 0]">
                                  <n-button size="tiny">清空</n-button>
                                  <n-button size="tiny">增加一行</n-button>
                                  <n-popselect @update:value="setIndex($event, t, bIdx)" :options="indexOptions" trigger="hover">
                                    <n-button size="tiny">设置序号</n-button>
                                  </n-popselect>
                                </n-flex>
                              </template>
                              <n-list v-for="(row, rowIdx) in body.table.body">
                                <n-list-item v-for="(col, cIdx) in row">
                                  <div>
                                    <n-input v-model:value="col.text"></n-input>
                                  </div>
                                  <n-flex :size="[5, 0]">
                                    <n-popselect @update:value="setColType($event, t, bIdx)" :options="options" trigger="hover">
                                      <n-button size="tiny">切换</n-button>
                                    </n-popselect>
                                    <n-button size="tiny">移除</n-button>
                                  </n-flex>
                                </n-list-item>
                              </n-list>
                            </n-card>
                          </div>
                        </div>
                        <n-flex class="m-t-xs">
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
                            <n-input-group>
                              <n-input-group-label size="tiny">列间距</n-input-group-label>
                              <n-input-number v-model:value="body.margin[0]" size="tiny" placeholder="0" style="width: 40px" :show-button="false" />
                              <n-input-number v-model:value="body.margin[1]" size="tiny" placeholder="0" style="width: 40px" :show-button="false" />
                              <n-input-number v-model:value="body.margin[2]" size="tiny" placeholder="0" style="width: 40px" :show-button="false" />
                              <n-input-number v-model:value="body.margin[3]" size="tiny" placeholder="0" style="width: 40px" :show-button="false" />
                            </n-input-group>
                          </div>
                          <n-button size="tiny" @click="removeCol(item.table, bIdx)">删除整列</n-button>
                        </n-flex>
                        <n-divider style="margin: 0.5rem 0px" />
                      </n-list-item>
                    </div>
                  </n-card>
                </n-list>
              </div>
            </n-card>
            <!-- </n-scrollbar> -->
          </div>
        </div>
      </n-flex>
    </n-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { Trash } from '@vicons/tabler';
import { cloneDeep, debounce, isNumber, isObject, isString } from 'lodash-es';
import { NInput, NTab } from 'naive-ui';
import { ref } from 'vue';
import VueQrcode from 'vue-qrcode';
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
    label: '列表',
    value: 'ol',
  },
  {
    label: '表格',
    value: 'table',
  },
];
const layoutOptions = [
  {
    label: '全边框',
    value: '',
  },
  {
    label: '无边框',
    value: 'noBorders',
  },
  {
    label: '细线分割',
    value: 'lightHorizontalLines',
  },
];

const indexOptions = [
  {
    label: '全边框',
    value: '',
  },
  {
    label: '无边框',
    value: 'noBorders',
  },
  {
    label: '细线分割',
    value: 'lightHorizontalLines',
  },
];

const scroll = ref(null);
const setTabs = (value, isPage?: boolean) => {
  if (isPage) {
    const [_, idx] = value.split('-');
    let height = document.getElementById(value)?.scrollHeight;
    let t = Number(idx) * height;
    if (idx > 0) t += 35;
    scroll.value.scrollTo({ top: t });
  } else {
    document.getElementById(value)?.scrollIntoView();
  }
};
const setIndex = () => {};
const tabs = computed(() => docDefinition.value.content.map((item) => item.table.tittle));

const setColType = (type: 'text' | 'image' | 'qr', table, idx) => {
  const item = {
    text: { text: '文本', alignment: 'center', lineHeight: 2, fontSize: 10, bold: false, margin: [0, 0, 0, 0] },
    image: {
      image: 'logo',
      src: logo.value,
      width: 50,
      height: 50,
      alignment: 'left',
      margin: [0, 0, 0, 0],
    },
    qr: { qr: '二维码', alignment: 'right', fit: 80, margin: [0, 0, 0, 0] },
    ol: {
      ol: [
        '如果本次付款金额小于销售单金额的20%，则以本次付款金额作为交易定金；如果本次付款金额大于等于销售单金额的20%，则以销售单金额的20%作为定金(定制产品除外，由双方自行约定)。',
        '甲乙双方签订协议后，双方应严格遵守：甲方(买方)违约退货的，无权要求返还定金；乙方(卖方)不能交货的，则应双倍返还定金，乙方(卖方)逾期交货的，甲方可要求乙方支付违约金；违约金计算方式为：逾期商品总价的3‰×逾期天数，违约金不超过定金的两倍。',
        '甲方(买方)在验收中发现数量、质量等方面有异议，应当场提出。验收合格签字确认。',
        '如因甲方(买方)客观原因造成乙方(卖方)无法送货入户的，甲方(买方)应承担相关责任。',
        '除本单据所约定条款，乙方(卖方)按照行业《三包责任规则》、《行业文明经营规则》的规定履行职责及承担违约责任。',
        '本单据签订后，甲方(买方)、乙方(卖方)再商议的其他变更条款，需另行书面约定。未作另行约定的，按本单据条款履行。',
      ],
      alignment: 'left',
      fontSize: 10,
      bold: false,
      margin: [0, 0, 0, 0],
      colSpan: 0,
    },
    table: {
      table: {
        tittle: '表格',
        body: [
          [
            { text: '列', fontSize: 10, margin: [0, 0, 0, 0], alignment: 'center', bold: false },
            { text: '列', fontSize: 10, margin: [0, 0, 0, 0], alignment: 'center', bold: false },
            { text: '列', fontSize: 10, margin: [0, 0, 0, 0], alignment: 'center', bold: false },
          ],
        ],
        widths: ['*', '*', '*'],
      },
      layout: '',
      margin: [0, 0, 0, 0],
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
          { text: '电子销售单', fontSize: 10, margin: [0, 0, 0, 0], alignment: 'center', bold: false, colSpan: 1, rowSpan: 1 },
          { text: '电子销售单', fontSize: 10, margin: [0, 0, 0, 0], alignment: 'center', bold: false, colSpan: 1, rowSpan: 1 },
          { text: '电子销售单', fontSize: 10, margin: [0, 0, 0, 0], alignment: 'center', bold: false, colSpan: 1, rowSpan: 1 },
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
            image: 'logo',
            src: logo.value,
            width: 50,
            height: 50,
            alignment: 'left',
            margin: [0, 0, 0, 0],
          },
          { text: '电子销售单', fontSize: 20, margin: [0, 10, 0, 0], alignment: 'center', bold: false },
          { qr: '二维码', alignment: 'right', fit: 80, margin: [0, 0, 0, 0] },
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
          { text: '商品名称', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0] },
          { text: '型号', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0] },
          { text: '规格', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0] },
          { text: '单价', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0] },
          { text: '数量', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0] },
          { text: '金额', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0] },
          { text: '备注', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0] },
        ],
        [
          { text: '这个是商品名称超长这个是商品名称超长这个是商品名称超长', alignment: 'left', fontSize: 10, bold: false, margin: [0, 0, 0, 0] },
          { text: 'XAS', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0] },
          { text: '100*100*100', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0] },
          { text: '1000', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0] },
          { text: '10', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0] },
          { text: '100000', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0] },
          { text: '红色', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0] },
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
      tittle: '基本信息',
      body: [
        [
          { text: '甲方(买方)：', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0] },
          { text: '$[custname] / $[custcard]', fontSize: 10, margin: [0, 0, 0, 0] },
          { text: '甲方(买方)电话：', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0] },
          { text: '$[custtelephone]', fontSize: 10, margin: [0, 0, 0, 0] },
        ],
        [
          { text: '订货日期：', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0] },
          { text: '$[custname] / $[custcard]', fontSize: 10, margin: [0, 0, 0, 0] },
          { text: '送货时间/方式：', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0] },
          { text: '$[custname] / $[custcard]', fontSize: 10, margin: [0, 0, 0, 0] },
        ],
        [
          { text: '送货地址：', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0] },
          { text: '$[custname] / $[custcard]', fontSize: 10, colSpan: 3, margin: [0, 0, 0, 0] },
        ],
        [
          { text: '乙方(卖方)：', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0] },
          { text: '$[custname] / $[custcard]', fontSize: 10, margin: [0, 0, 0, 0] },
          { text: '乙方(卖方)电话：', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0] },
          { text: '$[custname] / $[custcard]', fontSize: 10, margin: [0, 0, 0, 0] },
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
  console.log('docDefinition.value log==>', docDefinition.value);
  preview();
};
const remove = (idx: number) => {
  docDefinition.value.content.splice(idx, 1);
  preview();
};

const removeRow = (table, idx) => {
  table.body.splice(idx, 1);
  if (!table.body.length) table.widths = [];
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
            { text: '销售单金额：', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0] },
            { text: '$ 1000', fontSize: 10, margin: [0, 0, 0, 0] },
            { text: '实际收款金额最终以收款单为准', alignment: 'center', align: 'center', fontSize: 10, bold: false, rowSpan: 2, margin: [0, 0, 0, 0] },
          ],
          [
            { text: '销售单金额(大写)：', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0] },
            { text: '壹仟元整', fontSize: 10, margin: [0, 0, 0, 0] },
          ],
        ],
        widths: [100, '*', 160],
      },
      margin: [0, 0, 0, -1],
    },
    {
      table: {
        tittle: '销售单备注协议',
        body: [
          [
            { text: '销售单备注：', alignment: 'center', fontSize: 10, bold: false, lineHeight: 3.5, margin: [0, 0, 0, 0] },
            { text: 'lallala', fontSize: 10, lineHeight: 3.5, margin: [0, 0, 0, 0] },
            {
              ul: [
                {
                  qr: 'text in QR',
                  alignment: 'center',
                  fit: 80,
                  listType: 'none',
                  margin: [0, 0, 0, 2],
                },
                { text: '微信扫一扫,进行收货及评价', fontSize: 10, listType: 'none', margin: [0, 0, 0, 0] },
              ],
              alignment: 'center',
              margin: [0, 0, 0, 0],
              rowSpan: 2,
            },
          ],
          [
            { text: '其他约定：', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0] },
            {
              ol: ['货款余额应由甲方(买方)在送货前      天付清。', '本单销售单金额中已包含橱柜、移门等定制商品上门测量、设计、出图等费用      元。'],
              fontSize: 10,
              margin: [0, 0, 0, 0],
            },
          ],
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
              alignment: 'left',
              fontSize: 10,
              bold: false,
              colSpan: 3,
              margin: [0, 0, 0, 0],
            },
          ],
          [
            {
              text: `一经签字确认，将视同甲方(买方)对本单据所有内容均表示同意。 `,
              alignment: 'left',
              fontSize: 10,
              bold: false,
              colSpan: 3,
              margin: [0, 0, 0, 0],
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
            { text: '甲方(买方)签字：', alignment: 'left', fontSize: 10, bold: false, margin: [0, 0, 0, 0] },
            { text: ' 乙方(卖方)签字(盖章)：', alignment: 'left', fontSize: 10, bold: false, margin: [0, 0, 0, 0] },
          ],
        ],
        widths: [100, '*'],
        border: false,
      },
      layout: 'noBorders',
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

const addTableRow = (table, copyIdx) => {
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
      { text: '', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0], colSpan: 1, rowSpan: 1 },
      { text: '', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, -1], colSpan: 1, rowSpan: 1 },
      { text: '', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, -1], colSpan: 1, rowSpan: 1 },
      { text: '', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, -1], colSpan: 1, rowSpan: 1 },
    ],
  ];
  table.widths = ['*', '*', '*', '*'];
};
const preview = () => {
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

const initPdf = () => {
  addHeader();
  addBaseInfo();
  addGoods();
  addOther();
};
</script>
