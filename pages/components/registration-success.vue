<script setup>
const router = useRouter();
onMounted(() => {
  setTimeout(() => router.push("/dang-nhap"), 3000);
});
</script>
<template>
  <div class="wrap-content">
    <div class="mb-3 flex justify-center"><img src="@/assets/img/confirm-success.png" alt="success" /></div>
    <div class="title mb-2">Đăng ký thành công</div>
    <div class="description">Chúc mừng, tài khoản của bạn đã được tạo thành công.</div>
  </div>
</template>
<style lang="scss" scoped>
.wrap-content {
  width: 344px;
  height: max-content;
  background: #ffffff;
  box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  padding: 20px 16px;
}
.title {
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #111827;
}
.description {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #6b7280;
}
</style>
