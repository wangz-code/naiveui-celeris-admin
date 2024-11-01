<script setup lang="ts">
import ChatHistorySidebarActionBar from '#/views/chat/components/ChatHistorySidebar/components/ChatHistorySidebarActionBar.vue';
import ChatList from '#/views/chat/components/ChatHistorySidebar/components/ChatList.vue';

defineOptions({
  name: 'ChatHistorySidebar',
});
</script>

<template>
  <div class="flex flex-col">
    <ChatHistorySidebarActionBar />
    <ChatList />
  </div>
</template>

<style scoped></style>
