<script setup>
import WebButton from "@/components/button.vue";
import { useAuthService } from "@/services/auth";
import { validateEmail } from "@/library/helper.js";

const router = useRouter();
const email = ref("");
const password = ref("");
const error = ref("");
const errorEmail = ref("");
const errorPassword = ref("");

const signIn = async () => {
  try {
    if (!email.value || !password.value) {
      if (!email.value) {
        errorEmail.value = "Email không được bỏ trống";
      }
      if (!password.value) {
        errorPassword.value = "Mật khẩu không được bỏ trống";
      }
      setTimeout(() => clearError(), 3000);
      return;
    }
    if (!validateEmail(email.value)) {
      errorEmail.value = "Email không đúng định dạng";
      return;
    }

    const res = await useAuthService().signIn(email.value, password.value);
    if (res.data) {
      router.push("/");
    } else {
      error.value = "Email hoặc mật khẩu không đúng";
      setTimeout(() => (error.value = ""), 3000);
    }
  } catch (e) {
    console.log(e);
  }
};

const clearError = () => {
  errorEmail.value = "";
  errorPassword.value = "";
};
</script>
<template>
  <div class="relative w-full h-screen">
    <div class="absolute modal white-bg py-8 px-10">
      <div class="leading-10 fw-800 fs-36 text-black mb-10">Đăng nhập</div>
      <div class="fs-14 leading-5 fw-500 mb-2 text-gray-700">Email <span class="text-red-700">*</span></div>
      <input v-model="email" class="w-full" type="text" :class="{ 'invalid-input': errorEmail || error, 'text-red-700': errorEmail || error }" />
      <div v-if="errorEmail" class="text-red-500 fs-14 leading-5 fw-500 mt-2">{{ errorEmail }}</div>
      <div :class="{ 'mt-5': errorEmail }" class="fs-14 leading-5 fw-500 mb-2 mt-12 text-gray-700">Mật khẩu <span class="text-red-700">*</span></div>
      <input
        v-model="password"
        class="w-full"
        type="password"
        :class="{ 'invalid-input': errorPassword || error, 'text-red-700': errorPassword || error }"
      />
      <div v-if="errorPassword" class="text-red-500 fs-14 leading-5 fw-500 mt-2">{{ errorPassword }}</div>
      <div v-if="error" class="text-red-500 fs-14 leading-5 fw-500 mt-2">{{ error }}</div>
      <WebButton :class="{ 'mt-5': errorPassword || error }" :text="'Đăng nhập'" @custom-event="signIn" class="mt-12 mb-8"></WebButton>
      <div class="leading-7 fw-400 fs-16 tẽt-gray-700 text-center">Bạn chưa có tài khoản? <a href="dang-ky" class="text-blue">Đăng ký</a></div>
    </div>
  </div>
</template>
<style>
.modal {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 720px;
  height: max-content;
  border-radius: 16px;
}
@media only screen and (max-width: 720px) {
  .modal {
    width: 360px;
  }
}
</style>
