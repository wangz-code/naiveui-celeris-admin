<script setup lang="ts">
import Header from './header/index.vue';
import Content from './content/index.vue';
import Footer from './footer/index.vue';
import SearchDialog from '#/components/SearchDialog/src/SearchDialog.vue';
import SidebarLayout from '#/layouts/sidebar/index.vue';

const { getShouldShowFooter } = useAppSetting();
defineOptions({
  name: 'Layout',
});
</script>

<template>
  <NEl tag="div" class="flex flex-row flex-1 h-full w-full">
    <div>
      <SidebarLayout />
    </div>
    <div class="flex flex-col flex-1 h-full w-full">
      <header class="">
        <Header />
      </header>
      <div class="h-full w-full common-bg radis-box">
        <PageWrapper use-scrollbar>
          <Content />
        </PageWrapper>
      </div>
      <footer>
        <Footer v-if="getShouldShowFooter" />
      </footer>
    </div>
    <SearchDialog />
  </NEl>
</template>

<style scoped>
.radis-box {
  border-radius: 1rem 1rem 0rem 0rem;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10px 10px 0px 10px;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
}
</style>
