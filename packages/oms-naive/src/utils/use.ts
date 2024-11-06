import { cloneDeep, isObject } from 'lodash-es';
import { useModal, type DataTableRowKey, type ModalReactive } from 'naive-ui';
import { h, ref, type CSSProperties, type Component, type Ref } from 'vue';
import { $t } from '../locale';
import { uniArr } from './array';

export type ModalOpts<T = any> = {
  title?: string; // 开窗标题 优先级最高
  keys?: any[]; // 已存在的key, 如果传递了keys 不要获取rows, 单独key支持跨页但是rows会不存在, 两者会冲突
  query?: {};
  onConfirm?: (keys: any[], rows: T[]) => void; // 确认不关闭,一些异步添加需要
  onConfirmClose?: (keys: any[], rows: T[]) => void; // 确认并关闭
  onCancel?: () => void;
  onMaskClick?: () => void;
};

export type XModalOptions = {
  multiple?: boolean; // 不传为单选
  maskClosable?: boolean; // 遮罩层关闭 不传为true
  width?: string; // css尺寸 eg: 400px,40%
  title?: string; // 开窗标题 如果open()传递了title则会被覆盖
  content: Component; // 弹窗组件内容
  style?: CSSProperties; // 样式
};

export type ChooseModalProps = {
  modalApi: ModalReactive;
  options: ModalOpts;
  multiple?: boolean;
};

export type OtherModalProps<T extends any> = {
  modalApi: ModalReactive;
  options: T;
};
/**
 *
 * @param xModalOpt
 * @descript 使用方式参见选择账户 /M80/M8003/index
 * @descript 已加入自动导入
 */
export const useXModal = <T>(xModalOpt: XModalOptions) => {
  const { title = $t('naive.common.choose'), width = '400px', content, maskClosable = true, multiple, style = {} } = xModalOpt;
  let modalApi: ModalReactive;
  const modal = useModal();
  const open = (options: ModalOpts<T> = {}) => {
    modalApi = modal.create({
      title: options.title || title,
      preset: 'card',
      maskClosable,
      // zIndex:"999"
      style: { width, ...style },
      content: () => h(content, { modalApi, options, multiple }),
      onMaskClick: () => {
        if (maskClosable && options.onCancel) options.onCancel();
        if (options.onMaskClick) options.onMaskClick();
      },
      onClose: () => {
        options.onCancel && options.onCancel();
      },
    });
  };
  return { open, close: () => modalApi.destroy() };
};

/**
 * @descript modal首次弹窗骨架屏加载,没有骨架撑起来会抖动
 * @descript 已加入自动导入
 */
export const useSkeleton = () => {
  const skeleton = ref(true);
  const skeClose = (delay = 150) => {
    if (!skeleton.value) return;
    setTimeout(() => (skeleton.value = false), delay);
  };
  return { skeleton, skeClose };
};

/**
 *
 * @param key 唯一id
 * @descript 获取table的选中数据 keys 和 rows
 * @descript 已加入自动导入
 *
 */
export const useTableChecked = <T>(key: string) => {
  const cKeys = ref<DataTableRowKey[]>([]);
  const cRows = ref<T[]>([]);
  let cashRows = [] as any[]; // 缓存
  const handleCheck = (rowKeys: DataTableRowKey[], checkRows: any[]) => {
    cKeys.value = rowKeys;
    const newArr = checkRows.filter((item) => isObject(item));
    cashRows = uniArr(newArr.concat(cashRows), key);
    cRows.value = cashRows.filter((item) => rowKeys.includes(item[key]));
  };
  /** 清空table的选中的记录 */
  const cleanCheck = () => {
    cRows.value = [];
    cKeys.value = [];
  };
  return { handleCheck, cKeys, cRows, cleanCheck };
};

/**
 *
 * @descript 新增时缓存未提交的数据
 * @descript 已加入自动导入
 */
export const useResetForm = <T>() => {
  let isClean = false;
  let form: Ref;
  let cloneData: T;

  /**
   * @description 封装了ref<T>(value)
   * @returns ref(value)
   */
  const refForm = (value: T): Ref<T> => {
    form = ref<T>(value);
    cloneData = cloneDeep(value);
    return form;
  };
  /** @description 检查是否需要重置form, 放在onCreat函数内 */
  const checkRestForm = () => {
    if (isClean) form.value = cloneDeep(cloneData);
    isClean = false;
  };
  /** @description 下一次调用checkRestForm则会重置form,  */
  const nextRestForm = () => (isClean = true);
  return { refForm, nextRestForm, checkRestForm };
};

/**
 * @description 封装了查询常用的参数
 * @descript 已加入自动导入
 */
export const useListQuery = <T>({ data, reload }: { data: T; reload: Function }) => {
  const qParams = ref<T>(cloneDeep(data));
  const onReset = () => {
    qParams.value = cloneDeep(data);
    reload();
  };
  const onClear = () => {
    qParams.value.fuzzy = '';
    reload();
  };
  return { qParams, onClear, onReset };
};
