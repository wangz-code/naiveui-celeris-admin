import { cloneDeep } from 'lodash-es';

export const lineTpl = (len = 1) => {
  const tpl = {
    content: [],
    images: { logo: 'https://raw.githubusercontent.com/WangSunio/img/main/images/celeris.png' },
    styles: {},
    defaultStyle: { font: 'SySt', fontSize: 15, bold: false },
  };
  const doc = [
    {
      table: {
        tittle: '头部',
        body: [
          [
            {
              alignment: 'left',
              bold: false,
              colSpan: 1,
              rowSpan: 1,
              margin: [0, 0, 0, 0],
              border: [true, true, true, true],
              image: 'logo',
              src: 'https://raw.githubusercontent.com/WangSunio/img/main/images/celeris.png',
              width: 50,
              height: 50,
            },
            { fontSize: 20, alignment: 'center', bold: true, colSpan: 1, rowSpan: 1, margin: [0, 10, 0, 0], border: [true, true, true, true], text: '电子销售单' },
            { alignment: 'right', bold: false, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true], qr: '二维码', fit: 80 },
          ],
          [
            { text: '【正常订单】', fontSize: 10, alignment: 'center', bold: true, colSpan: 3, rowSpan: 1, margin: [0, -20, 0, 0], border: [true, true, true, true] },
            { text: '', fontSize: 10, alignment: 'center', bold: false, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
            { text: '', fontSize: 10, alignment: 'center', bold: false, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
          ],
          [
            { text: '销售验证码：$[billno]', fontSize: 10, alignment: 'right', bold: true, colSpan: 3, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
            { text: '', fontSize: 10, alignment: 'center', bold: false, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
            { text: '', fontSize: 10, alignment: 'center', bold: false, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
          ],
          [
            {
              text: '温馨提示：为了有效保障顾客的合法权益，请详细阅读本单据购物须知，并确认单据内各项购物内容。',
              fontSize: 10,
              alignment: 'left',
              bold: true,
              colSpan: 3,
              rowSpan: 1,
              margin: [0, 0, 0, 0],
              border: [true, true, true, true],
            },
            { text: '', fontSize: 10, alignment: 'center', bold: false, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
            { text: '', fontSize: 10, alignment: 'center', bold: false, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
          ],
        ],
        widths: [100, '*', 100],
      },
      layout: 'noBorders',
      margin: [0, 0, 0, 1],
    },
    {
      table: {
        tittle: '顾客信息',
        body: [
          [
            { text: '甲方(买方)：', fontSize: 10, alignment: 'left', bold: true, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
            { text: '$[custname] / $[custcard]', fontSize: 10, alignment: 'left', bold: false, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
            { text: '甲方(买方)电话：', fontSize: 10, alignment: 'left', bold: true, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
            { text: '$[custtelephone]', fontSize: 10, alignment: 'left', bold: false, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
          ],
          [
            { text: '订货日期：', fontSize: 10, alignment: 'left', bold: true, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
            { text: '$[custname] / $[custcard]', fontSize: 10, alignment: 'left', bold: false, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
            { text: '送货时间/方式：', fontSize: 10, alignment: 'left', bold: true, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
            { text: '$[custname] / $[custcard]', fontSize: 10, alignment: 'left', bold: false, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
          ],
          [
            { text: '送货地址：', fontSize: 10, alignment: 'left', bold: true, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
            { text: '$[custname] / $[custcard]', fontSize: 10, alignment: 'left', bold: false, colSpan: 3, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
          ],
          [
            { text: '乙方(卖方)：', fontSize: 10, alignment: 'left', bold: true, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
            { text: '$[custname] / $[custcard]', fontSize: 10, alignment: 'left', bold: false, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
            { text: '乙方(卖方)电话：', fontSize: 10, alignment: 'left', bold: true, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
            { text: '$[custname] / $[custcard]', fontSize: 10, alignment: 'left', bold: false, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
          ],
        ],
        widths: [60, '*', 80, 160],
      },
      layout: '',
      margin: [0, 0, 0, -1],
    },
    {
      table: {
        tittle: '商品信息',
        body: [
          [
            { text: '商品名称', fontSize: 10, alignment: 'center', bold: true, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
            { text: '型号', fontSize: 10, alignment: 'center', bold: true, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
            { text: '规格', fontSize: 10, alignment: 'center', bold: true, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
            { text: '单价', fontSize: 10, alignment: 'center', bold: true, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
            { text: '数量', fontSize: 10, alignment: 'center', bold: true, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
            { text: '金额', fontSize: 10, alignment: 'center', bold: true, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
            { text: '备注', fontSize: 10, alignment: 'center', bold: true, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
          ],
          [
            {
              text: '这个是商品名称超长这个是商品名称超长这个是商品名称超长',
              fontSize: 10,
              alignment: 'left',
              bold: false,
              colSpan: 1,
              rowSpan: 1,
              margin: [0, 0, 0, 0],
              border: [true, true, true, true],
            },
            { text: 'XAS', fontSize: 10, alignment: 'center', bold: false, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
            { text: '100*100*100', fontSize: 10, alignment: 'center', bold: false, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
            { text: '1000', fontSize: 10, alignment: 'center', bold: false, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
            { text: '10', fontSize: 10, alignment: 'center', bold: false, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
            { text: '100000', fontSize: 10, alignment: 'center', bold: false, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
            { text: '红色', fontSize: 10, alignment: 'center', bold: false, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
          ],
        ],
        widths: ['*', 70, 70, 40, 40, 42, 60],
      },
      margin: [0, 0, 0, -1],
    },
    {
      table: {
        tittle: '销售单金额',
        body: [
          [
            { text: '销售单金额：', fontSize: 10, alignment: 'center', bold: true, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
            { text: '$ 1000', fontSize: 10, alignment: 'left', bold: false, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
            {
              text: '实际收款金额最终以收款单为准',
              fontSize: 10,
              alignment: 'center',
              bold: true,
              colSpan: 1,
              rowSpan: 2,
              margin: [0, 10, 0, 0],
              border: [true, true, true, true],
            },
          ],
          [
            { text: '销售单金额(大写)：', fontSize: 10, alignment: 'center', bold: true, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
            { text: '壹仟元整', fontSize: 10, alignment: 'left', bold: false, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
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
            {
              text: '销售单备注：',
              fontSize: 10,
              alignment: 'center',
              bold: true,
              colSpan: 1,
              rowSpan: 1,
              margin: [0, 0, 0, 0],
              border: [true, true, true, true],
              lineHeight: 3.5,
            },
            { text: '$memo', fontSize: 10, alignment: 'left', bold: false, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true], lineHeight: 3.5 },
            {
              ol: [
                { qr: 'text in QR', fit: 60, alignment: 'center', bold: false, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 2], border: [true, true, true, true] },
                {
                  text: '微信扫一扫,进行收货及评价',
                  fontSize: 10,
                  alignment: 'center',
                  bold: false,
                  colSpan: 1,
                  rowSpan: 1,
                  margin: [0, 0, 0, 0],
                  border: [true, true, true, true],
                },
              ],
              type: 'none',
              alignment: 'center',
              bold: false,
              colSpan: 1,
              rowSpan: 2,
              margin: [0, 10, 0, 0],
              border: [true, true, true, true],
            },
          ],
          [
            { text: '其他约定：', fontSize: 10, alignment: 'center', bold: true, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, true] },
            {
              ol: ['货款余额应由甲方(买方)在送货前_______天付清。', '本单销售单金额中已包含橱柜、移门等定制商品上门测量、设计、出图等费用_________元。'],
              fontSize: 10,
              alignment: 'left',
              bold: false,
              colSpan: 1,
              rowSpan: 1,
              margin: [0, 0, 0, 0],
              border: [true, true, true, true],
            },
          ],
          [{ text: '【购物须知】：', fontSize: 10, alignment: 'left', bold: true, colSpan: 3, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, true, true, false] }],
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
              fontSize: 10,
              alignment: 'left',
              bold: true,
              colSpan: 3,
              rowSpan: 1,
              margin: [0, 0, 0, 0],
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
            {
              text: '一经签字确认，将视同甲方(买方)对本单据所有内容均表示同意。 ',
              fontSize: 10,
              alignment: 'left',
              bold: true,
              colSpan: 1,
              rowSpan: 1,
              margin: [0, 0, 0, 0],
              border: [true, true, false, false],
            },
            { text: '', fontSize: 10, alignment: 'center', bold: false, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [false, true, true, false] },
          ],
          [
            { text: '甲方(买方)签字：', fontSize: 10, alignment: 'left', bold: true, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [true, false, false, true] },
            { text: '乙方(卖方)签字(盖章)：', fontSize: 10, alignment: 'left', bold: true, colSpan: 1, rowSpan: 1, margin: [0, 0, 0, 0], border: [false, false, true, true] },
          ],
        ],
        widths: ['*', 180],
      },
      layout: '',
      margin: [0, 0, 0, -1],
    },
  ];
  for (let i = 0; i < len; i++) {
    tpl.content.push(...cloneDeep(doc));
  }
  return tpl
};
