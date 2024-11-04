import { $t } from '../locale';
import { debounce, extend } from 'lodash-es';
import type { EllipsisProps, PaginationProps } from 'naive-ui';
import { reactive } from 'vue';

export const pageSizes = [5, 10, 20, 100];
type PaginationOpt = {
  onQuery?: () => void;
  count: string;
  props?: PaginationProps;
};

/**
 * @descript table分页  重置page必需使用reload, 当前页刷新使用onQuery
 * @descript 已加入自动导入
 */
export const usePagination = () => {
  const options: PaginationOpt = {
    onQuery: () => {},
    count: '',
  };
  const pagination: PaginationProps = reactive({
    page: 1,
    showSizePicker: true,
    pageSizes,
    itemCount: 0,
    pageSize: 10,
  });
  const setPageProps = (opt: PaginationOpt) => {
    pagination.itemCount = Number(opt.count);
    pagination.prefix = () => `${opt.count}${$t('naive.table.total')}`;

    pagination.onUpdatePage = (page: number) => {
      pagination.page = page;
      options.onQuery && options.onQuery();
    };

    pagination.onUpdatePageSize = (pageSize: number) => {
      pagination.pageSize = pageSize;
      pagination.page = 1;
      options.onQuery && options.onQuery();
    };
    if (opt.props) extend(pagination, opt.props);
    extend(options, opt);
  };

  /** 方便reload调用,  */
  const setQuery = (query: () => void) => {
    options.onQuery = query;
    return query;
  };

  /** 重置page=1,并调用 onQuery */
  const reload = debounce(() => {
    pagination.page = 1;
    options.onQuery && options.onQuery();
  }, 250);
  return { pagination, setPageProps, reload, setQuery };
};

type CommonColumnInfo = {
  fixed?: 'left' | 'right';
  width?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
  className?: string;
  align?: 'left' | 'center' | 'right';
  titleAlign?: 'left' | 'center' | 'right';
  ellipsis?: boolean | EllipsisProps;
  ellipsisComponent?: 'ellipsis' | 'performant-ellipsis';
  render?: any;
};
type Cols = [string, string, CommonColumnInfo?];

// 生成table col
export function tableGen(data: Cols[]) {
  return data.map(([key, title, opt]: Cols) => ({ key, title, ...opt }));
}
