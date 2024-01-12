<script setup>
import { useAdminService } from "@/services/admin";
import Success from "@/components/success.vue";

const list = ref([]);
const search = ref("");
const listTopic = [1, 2, 4, 5, 6, 7, 8];
const open = ref(false);
const limit = ref(10);
const page = ref(1);
const total = ref(0);

const getListTransaction = async () => {
  try {
    const res = await useAdminService().listTransaction({}, limit.value, page.value, search.value);
    if (res) {
      list.value = res.list;
      total.value = res.total;
    }
  } catch (e) {
    console.log(e);
  }
};
const deleteTransaction = async (user_id) => {
  try {
    const res = await useAdminService().createTransaction(user_id, 1, 0, listTopic);
    if (res) {
      open.value = true;
      setTimeout(() => {
        open.value = false;
      }, 3000);
    }
  } catch (e) {
    console.log(e);
  }
};
watch(page, () => {
  getListTransaction();
});
definePageMeta({
  layout: "admin",
});
onMounted(() => {
  getListTransaction();
});
</script>
<template>
  <ClientOnly>
    <NuxtLayout>
      <div class="relative">
        <success v-if="open" :text="'Thành công'"></success>
        <h2 class="fs-36 fw-600 text-black-700 mb-12">Danh sách gói cước</h2>
        <div class="flex items-center justify-end mb-12">
          <div class="flex items-center gap-2">
            <input v-model="search" type="text" placeholder="Tìm kiếm" />
            <button class="find" @click="getListTransaction">Tìm kiếm</button>
          </div>
        </div>
        <table class="mb-12">
          <tr>
            <th>STT</th>
            <th>Email</th>
            <th>Tên Ngành</th>
            <th></th>
          </tr>
          <tr v-for="(i, index) in list" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ i.user.email }}</td>
            <td>{{ i.topic.title }}</td>
            <td>
              <div @click="deleteTransaction(i.id)" class="text-blue cursor-pointer">Xoá</div>
            </td>
          </tr>
        </table>
        <div class="flex justify-end gap-3">
          <button v-if="page > 1" cursor-pointer @click="page--" class="find">Previous</button>
          <button v-if="limit * page < total" @click="page++" class="find">Next</button>
        </div>
      </div>
    </NuxtLayout>
  </ClientOnly>
</template>
<style>
.find {
  width: 100%;
  font-size: 16px;
  background-color: #ff9100;
  color: #fff;
  border-radius: 6px;
  padding: 0 20px;
  height: 44px;
  width: max-content;
}
</style>
