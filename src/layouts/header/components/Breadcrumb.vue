<script setup>
import { getCurrentParent } from "@/router/menus";
import { asyncRoutes } from "@/router/routes";
import { getFirstMatchingParent, isNil } from "@/utils";
import { HomeOutline } from "@vicons/ionicons5";
import { useI18n } from "vue-i18n";

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
	const root = currentRoute.value.matched[0];
	const res = root.children
		.filter((item) => currentRoute.value.path.includes(item.path))
		.map((item) => {
			if (!item.path.includes("/")) return { ...item, path: item.redirect };
			return item;
		});
	breadcrumbs.value = res;
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
			<template v-for="breadcrumb in breadcrumbs" :key="breadcrumb.name">
				<NBreadcrumbItem @click="navigateTo({ path: breadcrumb.path })">
					{{ localize(breadcrumb.meta.title) }}
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
