<script setup>
const clickImg = (type) => {
  if (process.client) {
    var link = document.createElement("a");
    if (type == "ios") link.href = `https://apps.apple.com/au/app/autoxale/id1628960783`;
    if (type == "android") link.href = `https://play.google.com/store/apps/details?id=au.com.autoxale`;
    link.target = "_blank";
    link.click();
  }
};
</script>
<template>
  <div class="wrap-content flex items-center flex-col justify-center">
    <img src="@/assets/images/logo.png" class="mb-5 logo" alt="" />
    <div class="title mb-2">Great, your account is ready!</div>
    <div class="notify mb-6">Download the AutoXale app to get started.</div>
    <div class="flex items-center gap-4">
      <img @click="clickImg('ios')" class="cursor-pointer img" src="@/assets/images/App_Store_Black.png" alt="" />
      <img @click="clickImg('android')" class="cursor-pointer img" src="@/assets/images/Google_Play_Black.png" alt="" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrap-content {
  width: 512px;
  padding: 24px;
  border-radius: 8px;
  background: var(--theme-white-default, #fff);
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.1);
}
.logo {
  width: 97.525px;
  height: 48px;
}
.title {
  color: var(--text-navy, #002d74);
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
}
.notify {
  color: var(--text-gray, #4a5568);
  font-size: 16px;
  font-weight: 325;
  line-height: 20px; /* 125% */
  letter-spacing: 0.2px;
}
.img {
  width: 126.397px;
  height: 46px;
}
</style>
