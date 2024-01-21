<script setup>
import { useUsersService } from "@/services/users";

const route = useRoute();
const router = useRouter();
const Menu = ref([
  {
    route: "/admin",
    label: "Người dùng",
  },
  {
    route: "/admin/tai-lieu",
    label: "Tài Liệu",
  },
  {
    route: "/admin/goi-cuoc",
    label: "Gói Cước",
  },
]);

const getUser = async () => {
  try {
    const res = await useUsersService().get();
    if (res) {
      if (route.name.includes("admin") && res.role != "admin") router.push("/");
    }
  } catch (e) {
    console.log(e);
  }
};
onMounted(() => {
  getUser();
});
</script>
<template>
  <div class="layout w-screen h-screen flex">
    <div class="menu h-full relative">
      <div class="px-4 py-12 list-menu">
        <div
          class="menu-item flex items-center gap-3 p-3 cursor-pointer mb-2 text-black-600 fs-14 fw-600 lh-22"
          v-for="i in Menu"
          :key="i.route"
          :class="{ active: i.route === route.path }"
          @click="router.push(i.route)"
        >
          <div>{{ i.label }}</div>
        </div>
      </div>
    </div>
    <div class="wrap-content py-6 px-8">
      <slot />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.layout {
  overflow: hidden;
}
.menu {
  width: 145px;
  background: var(--white, #fff);
}
.logo {
  width: 143px;
  height: 32px;
}
.wrap-content {
  background: var(--text-black-100, #f9f9f9);
  width: calc(100% - 256px);
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
}

.list-menu {
  //   height: calc(100% - 225px);
}
.menu-item {
  &:hover {
    border-radius: 6px;
    background: var(--color-scheme-light-purple, #ece1ff);
    color: var(--color-scheme-dark-purple, #544da3);
  }
}
.active {
  border-radius: 6px;
  background: var(--color-scheme-light-purple, #ece1ff);
  color: var(--color-scheme-dark-purple, #544da3);
}
.line {
  height: 1px;
  background: var(--color-scheme-light-purple, #ece1ff);
}
</style>
