<script setup>
import { useAdminService } from "@/services/admin";
const password = ref("");

const props = defineProps(["id"]);
const emit = defineEmits(["close", "change-success"]);

const changePassword = async () => {
  try {
    const res = await useAdminService().adminChangePassword(props.id, password.value);
    if (res) {
      emit("change-success");
    }
  } catch (e) {
    console.log(e);
  }
};
</script>
<template>
  <div as="h3" class="fs-24 font-semibold text-gray-900">Đổi mật khẩu</div>

  <div class="font-medium fs-16 text-gray-900 mt-6 mb-2">Mật khẩu</div>
  <input v-model="password" type="text" class="w-full" />

  <div class="flex gap-6 items-center justify-end mt-12">
    <div class="cursor-pointer" @click="emit('close')">Cancel</div>
    <button type="button" class="find" @click="changePassword">Ok</button>
  </div>
</template>
<style scoped></style>
