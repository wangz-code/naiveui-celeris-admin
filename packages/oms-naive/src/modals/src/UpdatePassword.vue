<template>
  <n-card :bordered="false" size="small" aria-modal="true">
    <n-form ref="formRef" :model="form" :rules="rules">
      <n-form-item path="origPass" :label="$t('naive.updatePassword.currPassword')">
        <n-input v-model:value="form.origPass" type="password" show-password-on="mousedown" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item path="newPass" :label="$t('naive.updatePassword.newPassword')">
        <n-input v-model:value="form.newPass" type="password" show-password-on="mousedown" @input="handlePasswordInput" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item ref="rPasswordFormItemRef" first path="reenteredPassword" :label="$t('naive.updatePassword.reenteredPassword')">
        <n-input v-model:value="form.reenteredPassword" type="password" show-password-on="mousedown" @keydown.enter.prevent />
      </n-form-item>
      <n-row :gutter="[0, 34]">
        <n-col :span="24">
          <n-flex justify="end">
            <n-button round type="primary" @click="handleValidateButtonClick">
              {{ $t('naive.msg.confirmUpdate') }}
            </n-button>
          </n-flex>
        </n-col>
      </n-row>
    </n-form>
  </n-card>
</template>
<script setup lang="ts">
import { $t, useDialogPro, useMessagePro, type DelRes, type OtherModalProps } from '@oms/naive';
import { type FormInst, type FormItemInst, type FormItemRule, type FormRules } from 'naive-ui';
import { ref, toRaw } from 'vue';

export interface ModelType {
  origPass: string | null;
  newPass: string | null;
  reenteredPassword: string | null;
}
const Dialog = useDialogPro();
const Msg = useMessagePro();

const { modalApi, options } = defineProps<
  OtherModalProps<{
    query: { modifyPassword: (p: ModelType) => Promise<DelRes> };
  }>
>();
const formRef = ref<FormInst | null>(null);
const rPasswordFormItemRef = ref<FormItemInst | null>(null);
const form = ref<ModelType>({
  origPass: null,
  newPass: null,
  reenteredPassword: null,
});
function validatePasswordStartWith(_rule: FormItemRule, value: string): boolean {
  return !!form.value.newPass && form.value.newPass.startsWith(value) && form.value.newPass.length >= value.length;
}
function validatePasswordSame(_rule: FormItemRule, value: string): boolean {
  return value === form.value.newPass;
}
const rules: FormRules = {
  origPass: [
    {
      required: true,
      message: $t('naive.msg.pleaseInput'),
    },
  ],
  newPass: [
    {
      required: true,
      message: $t('naive.msg.pleaseInput'),
    },
  ],
  reenteredPassword: [
    {
      required: true,
      message: $t('naive.msg.pleaseInputPasswordAgain'),
      trigger: ['input', 'blur'],
    },
    {
      validator: validatePasswordStartWith,
      message: $t('naive.msg.pleaseInputPasswordAgain'),
      trigger: 'input',
    },
    {
      validator: validatePasswordSame,
      message: $t('naive.msg.inputPasswordNotEqual'),
      trigger: ['blur', 'password-input'],
    },
  ],
};

const handlePasswordInput = () => {
  if (form.value.reenteredPassword) {
    rPasswordFormItemRef.value?.validate({ trigger: 'password-input' });
  }
};
const handleValidateButtonClick = (e: MouseEvent) => {
  e.preventDefault();
  formRef.value?.validate(async (errors) => {
    if (!errors) {
      console.log(form.value);
      const { status, message } = await options.query.modifyPassword(toRaw(form.value));
      if (status != 'success') {
        Dialog.errorApi(message);
        return;
      }
      Msg.successApi($t('naive.msg.updateSuccess'));
      modalApi.destroy();
    }
  });
};
</script>
