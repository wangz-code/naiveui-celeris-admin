import { cloneDeep, debounce, merge, throttle } from 'lodash-es';
export const logo = ref('https://raw.githubusercontent.com/WangSunio/img/main/images/celeris.png');

export const docDefinition = ref({
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
