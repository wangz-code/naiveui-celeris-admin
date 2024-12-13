import { debounce, merge } from 'lodash-es';
export const logo = ref('https://raw.githubusercontent.com/WangSunio/img/main/images/celeris.png');

export const docDefinition = ref({
  pageMargins: [20, 40, 20, 40],
  background: [] as any[],
  content: [] as any[],
  images: { logo: logo.value },
  styles: {},
  defaultStyle: {
    font: 'SySt',
    fontSize: 15,
    bold: false,
  },
  footer: function (currentPage: number, pageCount: number) {
    return {
      text: '第' + currentPage.toString() + '页 / 共' + pageCount + '页',
      alignment: 'center',
      fontSize: 10,
    };
  },
});
export const previewRef = ref();

export const colPub = () => {
  return {
    alignment: 'center',
    bold: false,
    colSpan: 1,
    rowSpan: 1,
    margin: [0, 0, 0, 0],
    border: [true, true, true, true],
  };
};
export const textPub = () => {
  return {
    fontSize: 10,
    ...colPub(),
  };
};
export const setColType = (type: 'text' | 'image' | 'qr', cols: any[], colsIdx: number) => {
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
      ...textPub(),
      ol: ['列表内容。'],
      alignment: 'left',
      type: '',
    },
    svg: {
      svg: '',
      ...colPub(),
      width: 20,
      height: 20,
    },
    columns: {
      ...colPub(),
      columns: [
        { ...textPub(), text: '文本' },
        { ...textPub(), text: '文本' },
      ],
    },
    rect: {
      tittle: '矩形',
      canvas: [
        {
          type: 'rect',
          x: 0,
          y: 0, // y 坐标自下而上
          w: 20, // 矩形宽度
          h: 20, // 矩形高度
          lineColor: 'black', // 边框颜色
          lineWidth: 2, // 边框宽度
        },
      ],
      margin: [0, 0, 0, 0],
    },
    string: '',
  };
  cols[colsIdx] = item[type];
};
/**
 *
 * @param key string
 * @param value any
 * 设置doc: doc[key] = value
 */
export const mergeDoc = (value: { [k: string]: any } = {}) => {
  docDefinition.value = { ...merge(docDefinition.value, value) };
  console.log('docDefinition.value log==>', docDefinition.value);
};

/**
 * 获取doc当前值
 * @returns
 */
export const getDoc = () => toRaw(docDefinition.value);
/**
 * 预览
 */
export const preview = debounce(() => {
  previewRef.value && previewRef.value.preview();
}, 1300);
