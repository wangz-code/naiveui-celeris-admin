import { $t } from '../locale';

/**
 * post提交防抖延迟毫秒
 */
export const debounceDely = 500;

/**
 * @description userMessagePro延迟
 */
export const messageDely = 3500;

/**账户类型 0.系统级; 1.客户; 9.接口 */
export const UserTypeList = () => [
  {
    label: $t('naive.userType.system'),
    value: '0',
  },
  {
    label: $t('naive.userType.customer'),
    value: '1',
  },
  {
    label: $t('naive.userType.api'),
    value: '9',
  },
];
