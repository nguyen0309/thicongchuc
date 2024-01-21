<script setup>
import WebButton from "@/components/button.vue";
import { useAuthService } from "@/services/auth";

const router = useRouter();
const new_password = ref("");
const old_password = ref("");
const error_new_password = ref("");
const error_old_password = ref("");
const success = ref(false);

const changePassword = async () => {
  try {
    if (!old_password.value || !new_password.value) {
      if (!old_password.value) {
        error_old_password.value = "Mật khẩu cũ không được bỏ trống";
      }
      if (!new_password.value) {
        error_new_password.value = "Mật khẩu mới không được bỏ trống";
      }
      setTimeout(() => clearError(), 3000);
      return;
    }

    const res = await useAuthService().changePassword(old_password.value, new_password.value);
    if (res.success) {
      success.value = true;
    }
    if (res.success == false) {
      error_old_password.value = "Mật khẩu cũ không hơp lệ!";
      setTimeout(() => clearError(), 3000);
    }
  } catch (e) {
    console.log(e);
  }
};

const clearError = () => {
  error_old_password.value = "";
  error_new_password.value = "";
};
</script>
<template>
  <div class="relative w-full h-screen">
    <div class="absolute modal white-bg py-8 px-10">
      <div class="leading-10 fw-800 fs-36 text-black mb-10">Đổi mật khẩu</div>
      <div v-if="success" class="flex items-center justify-center flex-col">
        <div class="mb-6 flex justify-center"><img src="@/assets/img/confirm-success.png" alt="success" /></div>
        <div class="fw-500 mb-2 fs-18 leading-6 text center text-black-500">Đổi mật khẩu thành công</div>
      </div>
      <div v-else>
        <div class="fs-14 leading-5 fw-500 mb-2 text-gray-700">Mật khẩu cũ <span class="text-red-700">*</span></div>
        <input
          v-model="old_password"
          class="w-full"
          type="password"
          :class="{ 'invalid-input': error_old_password, 'text-red-700': error_old_password }"
        />
        <div v-if="error_old_password" class="text-red-500 fs-14 leading-5 fw-500 mt-2">{{ error_old_password }}</div>
        <div :class="{ 'mt-5': error_old_password }" class="fs-14 leading-5 fw-500 mb-2 mt-12 text-gray-700">
          Mật khẩu mới<span class="text-red-700">*</span>
        </div>
        <input
          v-model="new_password"
          class="w-full"
          type="password"
          :class="{ 'invalid-input': error_new_password, 'text-red-700': error_new_password }"
        />
        <div v-if="error_new_password" class="text-red-500 fs-14 leading-5 fw-500 mt-2">{{ error_new_password }}</div>
      </div>
      <WebButton v-if="success" :text="'Quay về trang chủ'" @custom-event="router.push('/')" class="mt-12 mb-8"></WebButton>
      <WebButton v-else :class="{ 'mt-5': error_new_password }" :text="'Đổi mật khẩu'" @custom-event="changePassword" class="mt-12 mb-8"></WebButton>
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
