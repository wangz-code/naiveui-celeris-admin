<style scoped>
.b-primary {
  border: 1px var(--primary-color) solid;
}
</style>
<template>
  <div class="w-full">
    <n-tabs placement="top">
      <n-tab-pane name="content" tab="内容配置">
        <n-card size="small">
          <n-flex>
            <n-button @click="() => preview()">预览</n-button>
            <n-button @click="clean('content')">清空</n-button>
            <n-button @click="addTable('content')">+表格</n-button>
            <n-button @click="addLine('content')">+线</n-button>
            <n-dropdown trigger="hover" :options="copyOptions" @select="copyTable">
              <n-button>+复制一份</n-button>
            </n-dropdown>
            <n-button @click="initPdf">默认模板</n-button>
            <n-dropdown trigger="hover" :options="blockOptions" @select="addBlock">
              <n-button>+常用模块</n-button>
            </n-dropdown>
          </n-flex>
          <n-divider style="margin: 5px 0px 0px 0px" />
          <n-tabs placement="top" v-model:value="activeTable" @update-value="setTabs">
            <n-tab v-for="(item, idx) in tabs" :name="'t-' + idx" :tab="item" />
          </n-tabs>
        </n-card>
        <n-scrollbar ref="scroll" class="m-t-xs w-full" style="max-height: 70vh">
          <div class="m-r-2" v-for="(content, cIdx) in docDefinition.content" :key="cIdx">
            <edit-table v-if="content.table" class="b-primary m-b-2" :id="'t-' + cIdx" field="content" :doc="content"></edit-table>
            <edit-canvas v-if="content.canvas" class="b-primary m-b-2" :id="'t-' + cIdx" field="content" :col="content"></edit-canvas>
          </div>
          <n-back-top right="35%" />
        </n-scrollbar>
      </n-tab-pane>
      <n-tab-pane name="background" tab="页面配置">
        <n-alert class="m-b-1" title="背景配置" type="warning"> 页面超出后会自动重复下列配置,相当于页面的背景 </n-alert>
        <n-card size="small" class="m-b-1">
          <n-flex>
            <n-button @click="() => preview()">预览</n-button>
            <n-button @click="clean('background')">清空</n-button>
            <n-button @click="addTable('background')">+表格</n-button>
            <n-button @click="addBackground">+默认背景</n-button>
          </n-flex>
        </n-card>
        <div class="m-b-1">
          <n-input-group>
            <n-input-group-label>页边距(左 上 右 下)</n-input-group-label>
            <n-input-number v-for="(_, mIdx) in docDefinition.pageMargins" v-model:value="docDefinition.pageMargins[mIdx]" @update-value="() => preview()" />
          </n-input-group>
        </div>
        <edit-table v-for="(bkg, bkgIdx) in docDefinition.background" field="background" :key="bkgIdx" :doc="bkg"></edit-table>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<script lang="ts" setup>
import { buildUUID } from '#/utils';
import { cloneDeep, debounce } from 'lodash-es';
import { NTab } from 'naive-ui';
import { ref } from 'vue';
import { EditTable, EditCanvas } from './index';
import { docDefinition, logo, mergeDoc, textPub, colPub, getDoc } from './mix';
const emit = defineEmits(['preview']);

let copyVal = null as any;

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
    label: '+ 协议等',
    key: 'addOther',
  },
  {
    label: '+ 收款单',
    key: 'addCash',
  },
];

const copyOptions = [1, 2, 3, 4, 5, 6, 7].map((item) => ({ label: `复制${item}份`, key: item }));
const activeTable = ref('t-0');
const scroll = ref(null);
const setTabs = (value: string) => {
  document.getElementById(value)?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
};
const tabs = computed(() => docDefinition.value.content.map((item) => item.tittle));

const copyTable = (num: number) => {
  if (copyVal == null) copyVal = getDoc();
  const res = [];
  for (let i = 0; i < num; i++) {
    res.push(...cloneDeep(copyVal)!);
  }
  docDefinition.value.content.push(...res);
  preview();
};

const addTable = (field: 'content' | 'background') => {
  const uuid = buildUUID();
  const data = docDefinition.value[field];
  data.push({
    uuid,
    tittle: '表格' + (docDefinition.value.content.length + 1),
    table: {
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
    margin: [0, -1, 0, 0],
  });
  mergeDoc({ [field]: data });
  preview(uuid);
};

const addLine = (field: 'content' | 'background') => {
  const uuid = buildUUID();
  const data = docDefinition.value[field];

  data.push({
    uuid,
    tittle: '线',
    canvas: [
      {
        type: 'line',
        x1: -40,
        y1: 0,
        x2: 560,
        y2: 0,
        lineWidth: 1,
        lineColor: 'black',
        dash: { length: 5, space: 3 }, // 设置虚线的长度和间隔
      },
    ],
    margin: [0, -1, 0, 0],
  });
  mergeDoc({ [field]: data });
  preview(uuid);
};

const addHeader = () => {
  const uuid = buildUUID();
  docDefinition.value.content.push({
    uuid,
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
  preview(uuid);
};

const addGoods = () => {
  const uuid = buildUUID();

  docDefinition.value.content.push({
    uuid,
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
          { text: '这个是商品名称超长这个是商品名称超长', ...textPub(), fontSize: 12, alignment: 'left' },
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
    layout: '',
    margin: [0, -1, 0, 0],
  });
  preview(uuid);
};

const addBaseInfo = () => {
  const uuid = buildUUID();
  docDefinition.value.content.push({
    uuid,
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
    margin: [0, -1, 0, 0],
  });
  preview(uuid);
};

const addOther = () => {
  const uuid = buildUUID();
  const other = [
    {
      uuid,
      table: {
        tittle: '销售金额',
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
      layout: '',
      margin: [0, -1, 0, 0],
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
              type: '',
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
              type: '',
              bold: true,
              alignment: 'left',
              colSpan: 3,
              border: [true, false, true, false],
            },
          ],
        ],
        widths: [100, '*', 100],
      },
      layout: '',
      margin: [0, -1, 0, 0],
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
      margin: [0, -1, 0, 0],
    },
  ];
  docDefinition.value.content = docDefinition.value.content.concat(other);
  preview(uuid);
};

const addCash = () => {
  // docDefinition.value.content

  const cash = [
    {
      uuid: buildUUID(),
      tittle: '表格',
      table: {
        body: [
          [
            { text: '电子销售单', fontSize: 10, alignment: 'center', bold: false, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
            { text: '电子销售单', fontSize: 10, alignment: 'center', bold: false, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
            { text: '电子销售单', fontSize: 10, alignment: 'center', bold: false, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
            { text: '第一联 . 顾客联', alignment: 'center', fontSize: 8, bold: true, margin: [0, 0, 0, 0], colSpan: 1, rowSpan: 4, border: [false, false, false, false] },
          ],
          [
            { text: '电子销售单', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0], colSpan: 1, rowSpan: 1 },
            { text: '电子销售单', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0], colSpan: 1, rowSpan: 1 },
            { text: '电子销售单', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0], colSpan: 1, rowSpan: 1 },
            { text: '', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0], colSpan: 1, rowSpan: 1 },
          ],
          [
            { text: '电子销售单', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0], colSpan: 1, rowSpan: 1 },
            { text: '电子销售单', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0], colSpan: 1, rowSpan: 1 },
            { text: '电子销售单', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0], colSpan: 1, rowSpan: 1 },
            { text: '', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0], colSpan: 1, rowSpan: 1 },
          ],
          [
            { text: '电子销售单', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0], colSpan: 1, rowSpan: 1 },
            { text: '电子销售单', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0], colSpan: 1, rowSpan: 1 },
            { text: '电子销售单', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0], colSpan: 1, rowSpan: 1 },
            { text: '', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0], colSpan: 1, rowSpan: 1 },
          ],
        ],
        widths: ['*', '*', '*', 10],
        tabs: 0,
      },
      layout: '',
      margin: [0, -1, -10, 0],
    },
    {
      uuid: buildUUID(),
      tittle: '线',
      canvas: [{ type: 'line', x1: -40, y1: 0, x2: 560, y2: 0, lineWidth: 1, lineColor: 'black', dash: { length: 5, space: 3 } }],
      margin: [0, 10, 0, 0],
    },
  ];
  docDefinition.value.content.push(...cash)
  preview();
};

const clean = (field: 'content' | 'background') => {
  docDefinition.value[field] = [];
  if (field == 'background') docDefinition.value.pageMargins = [20, 20, 20, 20];
  preview();
};

const addBackground = () => {
  const background = [
    {
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
      margin: [40, 20, 40, 1],
    },
    {
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
      margin: [40, 0, 40, 0],
    },
  ];
  mergeDoc({ background, pageMargins: [40, 207, 40, 20] });
  preview();
};

const preview = debounce((uuid?: string) => {
  uuid &&
    nextTick(() => {
      const index = docDefinition.value.content.findIndex((item) => item.uuid == uuid);
      activeTable.value = 't-' + index;
      setTabs(activeTable.value);
    });
  copyVal = cloneDeep(toRaw(docDefinition.value).content);
  emit('preview');
}, 500);

const methods = { addHeader, addBaseInfo, addGoods, addOther, addBackground, addCash };

const addBlock = (value: keyof typeof methods) => methods[value]();

const initPdf = () => {
  addHeader();
  addBaseInfo();
  addGoods();
  addOther();
};
onMounted(() => preview());
</script>
