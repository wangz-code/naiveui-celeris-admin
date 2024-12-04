<!--
 * @Author: wangqz
 * @Date: 2024-12-03
 * @LastEditTime: 2024-12-03
 * @Description: content
-->
<template>
  <div>
    <n-button @click="preview">预览</n-button>
    <n-flex :size="[0, 0]">
      <div class="w-1/2">
        <div v-for="(item, idx) in docDefinition.content" :key="idx">
          <div v-if="item.table">
            <table>
              <tbody>
                <tr v-for="(t, tIdx) in item.table.body" :key="tIdx">
                  <td v-for="body in t" :colspan="body.colSpan" :rowspan="body.rowSpan">
                    <img v-if="body.image" :src="body.image" alt="" srcset="" />
                    <div v-if="body.text">
                      {{ body.text }}
                    </div>
                    <div v-if="body.qr">
                      {{ body.qr }}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div id="pdfBox" ref="pdfBox"></div>
    </n-flex>
  </div>
</template>

<script lang="ts" setup>
import pdfMake from 'pdfmake';
import * as PDFObject from 'pdfobject';
import { ref } from 'vue';
import { logo } from '../img';
import { SyStBold, SyStLight, SyStMedium, SyStSemiBold } from '../SC-index';
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
const docDefinition = ref({
  content: [
    {
      table: {
        body: [
          [
            {
              image: logo,
              width: 120,
              height: 50,
              alignment: 'left',
            },
            { text: '电子销售单', fontSize: 20, margin: [0, 10, 0, 0], alignment: 'center', bold: true },
            { qr: 'text in QR', alignment: 'right', fit: 80 },
          ],
        ],
        widths: [100, '*', 100],
      },
      layout: 'noBorders',
      margin: [0, 0, 0, 1],
    },
    { text: 'lstest-101010101', alignment: 'right', fontSize: 10, bold: true },
    { text: '温馨提示：为了有效保障顾客的合法权益，请详细阅读本单据购物须知，并确认单据内各项购物内容。', fontSize: 11, bold: true },
    {
      table: {
        body: [
          [
            { text: '甲方(买方)：', alignment: 'center', fontSize: 10, bold: true },
            { text: '$[custname] / $[custcard]', fontSize: 10 },
            { text: '甲方(买方)电话：', alignment: 'center', fontSize: 10, bold: true },
            { text: '$[custtelephone]', fontSize: 10 },
          ],
          [
            { text: '订货日期：', alignment: 'center', fontSize: 10, bold: true },
            { text: '$[custname] / $[custcard]', fontSize: 10 },
            { text: '送货时间/方式：', alignment: 'center', fontSize: 10, bold: true },
            { text: '$[custname] / $[custcard]', fontSize: 10 },
          ],
          [
            { text: '送货地址：', alignment: 'center', fontSize: 10, bold: true },
            { text: '$[custname] / $[custcard]', fontSize: 10, colSpan: 3 },
          ],
          [
            { text: '乙方(卖方)：', alignment: 'center', fontSize: 10, bold: true },
            { text: '$[custname] / $[custcard]', fontSize: 10 },
            { text: '乙方(卖方)电话：', alignment: 'center', fontSize: 10, bold: true },
            { text: '$[custname] / $[custcard]', fontSize: 10 },
          ],
        ],
        widths: [60, '*', 80, 160],
      },
      margin: [0, 0, 0, -1],
    },
    {
      table: {
        body: [
          [
            { text: '商品名称', alignment: 'center', fontSize: 10, bold: true },
            { text: '型号', alignment: 'center', fontSize: 10, bold: true },
            { text: '规格', alignment: 'center', fontSize: 10, bold: true },
            { text: '单价', alignment: 'center', fontSize: 10, bold: true },
            { text: '数量', alignment: 'center', fontSize: 10, bold: true },
            { text: '金额', alignment: 'center', fontSize: 10, bold: true },
            { text: '备注', alignment: 'center', fontSize: 10, bold: true },
          ],
          [
            { text: '这个是商品名称', alignment: 'left', fontSize: 10, bold: false },
            { text: 'XAS', alignment: 'center', fontSize: 10, bold: false },
            { text: '100*100*100', alignment: 'center', fontSize: 10, bold: false },
            { text: '1000', alignment: 'center', fontSize: 10, bold: false },
            { text: '10', alignment: 'center', fontSize: 10, bold: false },
            { text: '10000', alignment: 'center', fontSize: 10, bold: false },
            { text: '红色', alignment: 'center', fontSize: 10, bold: false },
          ],
          [
            { text: '这个是商品名称超长这个是商品名称超长这个是商品名称超长', alignment: 'left', fontSize: 10, bold: false },
            { text: 'XAS', alignment: 'center', fontSize: 10, bold: false },
            { text: '100*100*100', alignment: 'center', fontSize: 10, bold: false },
            { text: '1000', alignment: 'center', fontSize: 10, bold: false },
            { text: '10', alignment: 'center', fontSize: 10, bold: false },
            { text: '100000', alignment: 'center', fontSize: 10, bold: false },
            { text: '红色', alignment: 'center', fontSize: 10, bold: false },
          ],
        ],
        widths: ['*', 70, 70, 40, 40, 42, 60],
      },
      margin: [0, 0, 0, -1],
    },
    {
      table: {
        body: [
          [
            { text: '销售单金额：', alignment: 'center', fontSize: 10, bold: true },
            { text: '$ 1000', fontSize: 10 },
            { text: '实际收款金额最终以收款单为准', margin: 10, alignment: 'center', align: 'center', fontSize: 10, bold: true, rowSpan: 2 },
          ],
          [
            { text: '销售单金额(大写)：', alignment: 'center', fontSize: 10, bold: true },
            { text: '壹仟元整', fontSize: 10 },
          ],
        ],
        widths: [100, '*', 160],
      },
      margin: [0, 0, 0, -1],
    },
    {
      table: {
        body: [
          [
            { text: '销售单备注：', alignment: 'center', fontSize: 10, bold: true, lineHeight: 3.5 },
            { text: 'lallala', fontSize: 10, lineHeight: 3.5 },
            {
              ul: [
                {
                  qr: 'text in QR',
                  alignment: 'center',
                  fit: 80,
                  listType: 'none',
                  margin: [0, 0, 0, 2],
                },
                { text: '微信扫一扫,进行收货及评价', fontSize: 10, listType: 'none' },
              ],
              alignment: 'center',
              rowSpan: 2,
            },
          ],
          [
            { text: '其他约定：', alignment: 'center', fontSize: 10, bold: true },
            {
              ol: ['货款余额应由甲方(买方)在送货前      天付清。', '本单销售单金额中已包含橱柜、移门等定制商品上门测量、设计、出图等费用      元。'],
              fontSize: 10,
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
              bold: true,
              colSpan: 3,
            },
          ],
          [
            {
              text: `一经签字确认，将视同甲方(买方)对本单据所有内容均表示同意。 `,
              alignment: 'left',
              fontSize: 10,
              bold: true,
              colSpan: 3,
            },
          ],
        ],
        widths: [100, '*', 100],
      },
      margin: [0, 0, 0, -1],
    },
    {
      table: {
        body: [[{ text: '甲方(买方)签字：', alignment: 'left', fontSize: 10, bold: true }, {}, { text: ' 乙方(卖方)签字(盖章)：', alignment: 'left', fontSize: 10, bold: true }]],
        widths: [100, '*', 200],
        border: false,
      },
      layout: 'noBorders',
      margin: [0, 0, 0, -1],
    },
  ],
  styles: {},
  defaultStyle: {
    font: 'SySt',
    fontSize: 15,
    bold: false,
  },
});

const preview = () => {
  pdfMake.createPdf(toRaw(docDefinition.value)).getBuffer(function (buffer: ArrayBuffer) {
    URL.revokeObjectURL(pdfUrl.value);
    pdfUrl.value = URL.createObjectURL(new Blob([buffer], { type: 'application/pdf' }));
    PDFObject.embed(pdfUrl.value, pdfBox.value, {});
  });
};

onMounted(() => {
  watch(() => docDefinition.value, preview);
  preview();
  console.log('onMounted log==>', onMounted);
});
</script>
