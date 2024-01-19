<script setup>
import { useAdminService } from "@/services/admin";
import { ExclamationTriangleIcon } from "@heroicons/vue/24/outline";

const props = defineProps(["id"]);
const emit = defineEmits(["close", "delete-success"]);

const deleteTransaction = async () => {
  try {
    const res = await useAdminService().deleteTransaction(props.id);
    if (res) {
      emit("delete-success");
    }
  } catch (e) {
    console.log(e);
  }
};
</script>
<template>
  <div class="sm:flex sm:items-start">
    <div class="flex items-center gap-4">
      <ExclamationTriangleIcon class="h-8 w-8 text-red-600" aria-hidden="true" />
      <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
        <div as="h3" class="fs-24 font-semibold text-gray-900">Xoá gói cước</div>
        <div class="mt-2">
          <p class="fs-20 text-gray-500">Bạn có chắc chắn muốn xoá gói cước không?</p>
        </div>
      </div>
    </div>
  </div>
  <div class="flex gap-6 items-center justify-end mt-12">
    <div class="cursor-pointer" @click="emit('close')">Cancel</div>
    <button type="button" class="find" @click="deleteTransaction">Xoá</button>
  </div>
</template>
