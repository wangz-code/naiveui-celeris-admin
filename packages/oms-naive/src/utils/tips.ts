/*
 * @Author: wangqz
 * @Date: 2024-09-10
 * @LastEditTime: 2024-10-22
 * @Description: 扩展原始提醒函数
 */
import { NTag, useDialog, useMessage, type MessageOptions } from 'naive-ui';
import type { DialogApiInjection, DialogOptions } from 'naive-ui/es/dialog/src/DialogProvider';
import type { MessageApiInjection } from 'naive-ui/es/message/src/MessageProvider';

import { h, type VNodeChild } from 'vue';
import { $t } from '../locale';
import type { Message } from '../types/api-type';
// 扩展Message
interface MessagePro {
  /** 接口错误 轻提示, */
  errorApi: (content: Message, opt?: MessageOptions) => void;
  /** 主要用于Api响应成功提示 目前仅封装, 如果后面需要定制可以直接修改这里 */
  successApi: (content: string | (() => VNodeChild), opt?: MessageOptions) => void;
  /** 基本等同于message.warning 仅把返回值设为true */
  warnTrue: (content: string | (() => VNodeChild), opt?: MessageOptions) => true;
}
/**
 * @descript 基于useMessage扩展
 * @descript 已加入自动导入
 */
export const useMessagePro = () => {
  const message = useMessage() as MessageApiInjection & MessagePro;
  message.successApi = (content, opt) => message.success(content, { ...opt });
  message.errorApi = ({ code, info }: Message, opt) => message.error(`${code} ${info}`, { ...opt });
  message.warnTrue = (content, opt) => {
    message.warning(content, opt);
    return true;
  };
  return message;
};

// 扩展Dialog
interface DialogPro {
  delConfirm: (opt: DialogOptions & { title?: string; content?: string; positiveText?: string; negativeText?: string }) => void;
  errorApi: (opt: Message) => void;
}

/**
 * @descript 基于useDialog扩展
 * @descript 已加入自动导入
 */
export const useDialogPro = () => {
  const dialog = useDialog() as DialogApiInjection & DialogPro;

  // 弹出框 确认删除
  dialog.delConfirm = (opt: DialogOptions) => {
    dialog.warning({ title: $t('naive.msg.pleaseConfirm'), content: $t('naive.msg.delete'), positiveText: $t('naive.msg.confirmDelete'), negativeText: $t('naive.msg.cancel'), ...opt });
  };
  // 主要用于Api错误弹出框,如果后续有定制可以直接修改这里 NTag 组件使用 ()=>[内容]性能更好
  dialog.errorApi = ({ code, info }) => {
    dialog.error({
      title: $t('naive.msg.tip'),
      content: () => h('div', null, [h(NTag, { round: true, type: 'error', size: 'small' }, () => [code]), h('span', { class: 'ml-2' }, info)]),
    });
  };
  return dialog;
};
