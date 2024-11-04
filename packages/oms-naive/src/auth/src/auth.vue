<template>
  <n-skeleton v-if="skeleton" text :repeat="10" />
  <n-checkbox-group v-else v-model:value="checked" @update:value="handleUpdateValue">
    <n-tabs type="line" animated placement="left" v-model:value="tabs.one">
      <n-tab-pane v-for="one in currAuth" :key="one.moduleNo" :name="one.moduleNo" :tab="one.title">
        <!-- 二级菜单 -->
        <auth-item v-if="deep == '2'" :auths="one.child" @selectAll="selectAll" @selectNone="selectNone"></auth-item>
        <!-- 三级菜单 -->
        <n-tabs v-if="deep == '3'" type="line" animated placement="left" v-model:value="tabs.two">
          <n-tab-pane v-for="two in one.child" :key="two.moduleNo" :name="two.moduleNo" :tab="two.title">
            <auth-item :auths="two.child" @selectAll="selectAll" @selectNone="selectNone"></auth-item>
          </n-tab-pane>
        </n-tabs>
      </n-tab-pane>
    </n-tabs>
  </n-checkbox-group>
</template>

<script lang="ts" setup>
import { $t, useDialogPro, useMessagePro, useSkeleton, type AuthData, type OtherModalProps, type Uri } from '@oms/naive';
import { debounce } from 'lodash-es';
import AuthItem from './auth-item.vue';
import { onMounted, reactive, ref } from 'vue';
const dialogPro = useDialogPro();
const messagePro = useMessagePro();
const { skeleton, skeClose } = useSkeleton();

export type QueryParams = {
  api: {
    authList: Function;
    refresh: Function;
    remove: Function;
    add: Function;
  };
  deep: '2' | '3';
  params: {
    [x: string]: any;
  };
};

const { options } = defineProps<OtherModalProps<{ query: QueryParams }>>();
const { api, params, deep } = options.query;

const currAuth = ref<AuthData[]>();
const checked = ref<string[]>([]);
const tabs = reactive({
  one: '',
  two: '',
});

const onQuery = async () => {
  const { data, status, message } = await api.authList();
  if (status != 'success') {
    dialogPro.errorApi(message);
    return;
  }
  currAuth.value = data;
  // 默认选中第一个
  if (data.length) {
    tabs.one = data[0].moduleNo;
    if (data[0].child.length) tabs.two = data[0].child.moduleNo;
  }
};

const removeAuth = async (functionPath: string[]) => {
  const { status, message } = await api.remove({ ...params, functionPath });
  if (status != 'success') {
    dialogPro.errorApi(message);
    return;
  }
  messagePro.success($t('naive.msg.removeConfirmSuccess'));
  waitRefreshAuths();
};

const addAuth = async (functionPath: string[]) => {
  const { status, message } = await api.add({ ...params, functionPath });
  if (status != 'success') {
    dialogPro.errorApi(message);
    return;
  }
  messagePro.success($t('naive.msg.addSuccess'));
  waitRefreshAuths();
};

const selectAll = (uris: Uri[]) => addAuth(uris.map((item) => item.functionPath));

const selectNone = (uris: Uri[]) => removeAuth(uris.map((item) => item.functionPath));

const refreshAuths = async () => {
  const { data, status, message } = await api.refresh({ ...params });
  if (status != 'success') {
    dialogPro.errorApi(message);
    return;
  }
  const funcData: string[] = [];
  // 递归遍历权限
  const recursion = (data: AuthData[]) => {
    for (const item of data) {
      if (item.functionList) for (const uri of item.functionList) funcData.push(uri.functionPath);
      if (item.child.length) recursion(item.child);
    }
  };
  recursion(data);

  checked.value = funcData;
  skeClose()
};
const waitRefreshAuths = debounce(refreshAuths, 800);

const handleUpdateValue = (_: any, { actionType, value }: { actionType: 'check' | 'uncheck'; value: string | number }) => {
  const auths = [String(value)];
  actionType == 'check' ? addAuth(auths) : removeAuth(auths);
};

onMounted(() => {
  onQuery();
  refreshAuths();
});
</script>
