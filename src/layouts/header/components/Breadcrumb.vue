<script setup>
import { useI18n } from "vue-i18n";
import { isNil } from "@/utils";
import { renderIcon } from "@/components/Iconx";
import { getCurrentParent } from "@/router/menus";
import { HomeOutline } from "@vicons/ionicons5";

defineOptions({
  name: "LayoutBreadcrumb",
});

const { t, te } = useI18n();
const router = useRouter();
const route = useRoute();
const { currentRoute } = useRouter();
const breadcrumbs = ref([]);

function navigateTo(page) {
  const { name, path } = page;
  if (name && name !== route.name) {
    router.push({ name });
  } else if (path && path !== route.path) {
    router.push({ path });
  }
}

watchEffect(() => {
  const parentPath = getCurrentParent(currentRoute.value.path);
  if (parentPath) {
    breadcrumbs.value = parentPath.map(item => ({
      ...item,
      options: item.children?.map(child => ({
        ...child,
        key: isNil(child?.redirect) ? child.path : child?.redirect,
        children: undefined,
        label: localize(child.name),
        icon: renderIcon(child.icon),
      })),
    }));
  }
});

function localize(key) {
  return te(key) ? t(key) : key;
}

function selectDropdown(key) {
  navigateTo({ path: key });
}
</script>

<template>
  <NBreadcrumb class="breadcrumb">
    <NBreadcrumbItem @click="navigateTo({ path: '/' })">
      <Iconx :component="HomeOutline" :size="16" />
    </NBreadcrumbItem>
    <TransitionGroup name="breadcrumbAnimation">
      <template v-for="breadcrumb in breadcrumbs" :key="breadcrumb.path">
        <NBreadcrumbItem>
          <NDropdown v-if="breadcrumb.children" :options="breadcrumb.options" @select="selectDropdown">
            <span>
              <!-- <Iconx v-if="breadcrumb.icon" :component="breadcrumb.icon" :size="16" class="inline-block align-text-bottom mr-4px text-16px" /> -->
              <span>{{ localize(breadcrumb.name) }}</span>
            </span>
          </NDropdown>
          <template v-else>
            <!-- <Iconx v-if="breadcrumb.icon" :component="breadcrumb.icon" :size="16" class="inline-block align-text-bottom mr-2" /> -->
            <span>{{ localize(breadcrumb.name) }}</span>
          </template>
        </NBreadcrumbItem>
      </template>
    </TransitionGroup>
  </NBreadcrumb>
</template>

<style scoped>
.breadcrumbAnimation-move,
.breadcrumbAnimation-enter-active {
  transition: all 0.5s cubic-bezier(0.76, 0, 0.24, 1);
}

.breadcrumbAnimation-leave-active {
  display: none;
}

.breadcrumbAnimation-enter-from {
  opacity: 0;
  transform: translateX(-5px);
}
</style>
