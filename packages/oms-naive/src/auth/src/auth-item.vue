<template>
  <n-space vertical>
    <n-card v-for="child in auths" :key="child.moduleNo" :title="child.title" size="small" :bordered="false">
      <div v-for="uri in child.functionList" :key="uri.functionPath">
        <n-checkbox :value="uri.functionPath" :label="uri.functionCaption"> </n-checkbox>
      </div>
      <n-space size="small" class="mt-2">
        <n-button size="small" @click="selectAll(child.functionList)"> {{ $t('naive.common.selectAll') }} </n-button>
        <n-button size="small" @click="selectNone(child.functionList)"> {{ $t('naive.common.selectNone') }} </n-button>
      </n-space>
    </n-card>
  </n-space>
</template>

<script lang="ts" setup>
import { $t, type AuthData, type Uri } from '@oms/naive';

const emit = defineEmits(['selectAll', 'selectNone']);
defineProps<{
  auths: AuthData[];
}>();

const selectAll = (uris: Uri[]) => emit('selectAll', uris);
const selectNone = (uris: Uri[]) => emit('selectNone', uris);
</script>
