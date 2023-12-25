<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const openMenu = ref(false);
const route = useRoute();
// console.log("route", route.query.dl);
const clickImg = () => {
  if (process.client) {
    const appKey = localStorage.getItem("appKey");
    var link = document.createElement("a");
    link.href = `https://autoxale.onelink.me/Fv0S/${route.query.dl || appKey}`;
    link.target = "_blank";
    link.click();
  }
};
onMounted(() => {
  if (route.query.dl && process.client) localStorage.setItem("appKey", route.query.dl);
});
</script>

<template>
  <div class="layout-container relative">
    <div class="layout-header">
      <div class="wrap-header flex items-center justify-between relative">
        <div class="cursor-pointer">
          <img class="logo" src="@/assets/images/logo.png" alt="logo" @click="clickLogo" />
        </div>
        <div class="list-app cursor-pointer flex items-center gap-4">
          <img @click="clickImg" class="img" src="@/assets/images/App_Store_Black.png" alt="logo" />
          <img @click="clickImg" class="img" src="@/assets/images/Google_Play_Black.png" alt="logo" />
        </div>
        <div class="menu cursor-pointer" @click="openMenu = true">
          <img src="@/assets/images/menu.png" alt="" />
        </div>
        <div v-if="openMenu" class="absolute">
          <div class="wrap-menu">
            <div class="menu-header flex items-center justify-between mb-2">
              <div class="cursor-pointer">
                <img class="logo" src="@/assets/images/logo.png" alt="logo" @click="clickLogo" />
              </div>
              <div class="cursor-pointer">
                <img class="close" src="@/assets/images/close.png" alt="logo" @click="openMenu = false" />
              </div>
            </div>
            <div class="cursor-pointer flex items-center justify-center gap-4">
              <img @click="clickImg" class="img" src="@/assets/images/App_Store_Black.png" alt="logo" />
              <img @click="clickImg" class="img" src="@/assets/images/Google_Play_Black.png" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="layout-content">
      <slot />
    </div>
    <div class="app-footer">
      <div class="footer">
        <div class="top-footer flex justify-between"></div>
        <div class="mt-4">
          <div class="flex items-center justify-between h-full fw-325">
            <div>© 2022 <span style="font-weight: 400">AutoXALE </span>- Copyright. All rights reserved.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
.layout-container {
  width: 100vw;
  margin: auto;
  background: #ffffff;
  overflow: hidden;
  overflow-y: auto;
  min-height: 100vh;
}
.layout-header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
}
.layout-content {
  padding: 154px 135px 60px;
  min-height: calc(100vh - 214px);
  background: var(--theme-gray-50, #fafafa);
}
.fw-325 {
  font-weight: 325 !important;
}

::-webkit-scrollbar {
  display: none;
}
.wrap-header {
  height: 94px;
  padding: 24px 135px;
  background: #ffffff;
}

.logo {
  width: 56.89px;
  height: 28px;
}
.img {
  width: 123.419px;
  height: 46px;
}
.menu {
  display: none;
}
.menu-header {
  padding: 0 12px;
}
.wrap-menu {
  top: 32px;
  width: calc(100vw - 16px);
  left: -8px;
  padding: 16px 8px 12px;
  border-radius: 8px;
  background: var(--white, #fff);
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.1);
}
.close {
  width: 48px;
  height: 48px;
}
.footer {
  padding: 24px 135px 64px 135px;
  background: var(--theme-gray-50, #fafafa);
  color: var(--theme-gray-600, #718096);
  font-size: 16px;
  font-weight: 325;
  line-height: 20px;
  letter-spacing: 0.2px;
}
.top-footer {
  border-bottom: 1px solid #cbd5e0;
}
@media (max-width: 1080px) {
  .wrap-header {
    height: 76px;
    padding: 24px 16px 12px;
  }
  .footer {
    padding: 24px 16px 64px;
  }
}
@media (max-width: 640px) {
  .list-app {
    display: none;
  }
  .menu {
    display: block;
  }
}
@media (max-width: 1280px) {
  .layout-content {
    padding: 100px 16px 44px;
    min-height: calc(100vh - 144px);
    background: var(--theme-gray-50, #fafafa);
  }
}
</style>
