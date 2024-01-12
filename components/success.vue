<script setup>
const props = defineProps(["text"]);
</script>
<template>
  <div class="toast-notify flex gap-2 p-4">
    <img class="img" src="@/assets/img/success.png" />
    <div class="text">{{ props.text }}</div>
  </div>
</template>
<style lang="scss" scoped>
.toast-notify {
  background: #ecfdf5;
  border-radius: 6px;
  position: absolute;
  top: 50px;
  right: 0;
  z-index: 3;
  width: 350px;
}
.text {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #065f46;
}
</style>
