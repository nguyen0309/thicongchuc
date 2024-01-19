<script setup>
import WebButton from "@/components/button.vue";
import { useAuthService } from "@/services/auth";
import { validateEmail } from "@/library/helper.js";
import Success from "@/pages/components/registration-success.vue";
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";

const email = ref("");
const name = ref("");
const password = ref("");

const router = useRouter();
const open = ref(false);

const errorEmail = ref("");
const errorName = ref("");
const errorPassword = ref("");

const signUp = async () => {
  try {
    if (!email.value || !name.value || !password.value) {
      if (!email.value) {
        errorEmail.value = "Email không được bỏ trống";
      }
      if (!name.value) {
        errorName.value = "Tên người dùng không được bỏ trống";
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

    const res = await useAuthService().signUp(email.value, name.value, password.value);
    if (res.data) {
      open.value = true;
    } else {
      errorEmail.value = "Email đã tồn tại!";
    }
  } catch (e) {
    console.log(e);
  }
};

const clearError = () => {
  errorEmail.value = "";
  errorName.value = "";
  errorPassword.value = "";
};
</script>
<template>
  <div class="relative w-full h-screen">
    <div class="absolute modal white-bg py-8 px-10">
      <div class="leading-10 fw-800 fs-36 text-black mb-10">Đăng ký</div>
      <div class="fs-14 leading-5 fw-500 mb-2 text-gray-700">Email <span class="text-red-700">*</span></div>
      <input v-model="email" class="w-full" type="text" :class="{ 'invalid-input': errorEmail, 'text-red-700': errorEmail }" />
      <div v-if="errorEmail" class="text-red-500 fs-14 leading-5 fw-500 mt-2">{{ errorEmail }}</div>
      <div :class="{ 'mt-5': errorEmail }" class="fs-14 leading-5 fw-500 mb-2 mt-12 text-gray-700">
        Tên người dùng <span class="text-red-700">*</span>
      </div>
      <input v-model="name" class="w-full" type="text" :class="{ 'invalid-input': errorName }" />
      <div v-if="errorName" class="text-red-500 fs-14 leading-5 fw-500 mt-2">{{ errorName }}</div>
      <div :class="{ 'mt-5': errorName }" class="fs-14 leading-5 fw-500 mb-2 mt-12 text-gray-700">Mật khẩu <span class="text-red-700">*</span></div>
      <input v-model="password" class="w-full" type="password" :class="{ 'invalid-input': errorPassword }" />
      <div v-if="errorPassword" class="text-red-500 fs-14 leading-5 fw-500 mt-2">{{ errorPassword }}</div>
      <WebButton :class="{ 'mt-5': errorPassword }" :text="'Đăng ký'" @custom-event="signUp" class="mt-12 mb-8"></WebButton>
      <div class="leading-7 fw-400 fs-16 tẽt-gray-700 text-center">Bạn đã có tài khoản? <a href="dang-nhap" class="text-blue">Đăng nhập</a></div>
    </div>
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-10">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <success />
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
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
