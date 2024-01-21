<script setup>
import { useAdminService } from "@/services/admin";
const category = ref([]);
const props = defineProps(["id", "listTopic"]);
const emit = defineEmits(["close", "add-success"]);

const createTransaction = async (user_id) => {
  try {
    const res = await useAdminService().createTransaction(props.id, 1, 0, category.value);
    if (res) {
      emit("add-success");
    }
  } catch (e) {
    console.log(e);
  }
};
</script>
<template>
  <div class="sm:flex sm:items-start">
    <div class="flex items-center gap-4">
      <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
        <div as="h3" class="fs-24 font-semibold text-gray-900">Mở ngành học</div>
        <div class="mt-6">
          <div class="relative flex items-start" v-for="(i, index) in props.listTopic" :key="i">
            <div class="flex h-6 items-center mb-3 gap-2">
              <input
                v-model="category"
                :id="'comments' + index"
                :value="i.id"
                :name="'comments' + index"
                type="checkbox"
                class="h-6 w-6 cursor-pointer"
              />
              <label for="comments" class="font-medium fs-16 text-gray-900">{{ i.title }}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex gap-6 items-center justify-end mt-12">
    <div class="cursor-pointer" @click="emit('close')">Cancel</div>
    <button type="button" class="find" @click="createTransaction">Thêm</button>
  </div>
</template>
<style scoped></style>
