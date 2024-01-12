<script setup>
import { useAdminService } from "@/services/admin";
import Success from "@/components/success.vue";

const list = ref([]);
const search = ref("");
const listTopic = [1, 2, 4, 5, 6, 7, 8];
const open = ref(false);

const getListUser = async () => {
  try {
    const res = await useAdminService().getListUser(search.value);
    if (res) {
      list.value = res.list;
    }
  } catch (e) {
    console.log(e);
  }
};
const createTransaction = async (user_id) => {
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
definePageMeta({
  layout: "admin",
});
onMounted(() => {
  getListUser();
});
</script>
<template>
  <ClientOnly>
    <NuxtLayout>
      <div class="relative">
        <success v-if="open" :text="'Thành công'"></success>
        <h2 class="fs-36 fw-600 text-black-700 mb-12">Danh sách người dùng</h2>
        <div class="flex items-center justify-end mb-12">
          <div class="flex items-center gap-2">
            <input v-model="search" type="text" placeholder="Tìm kiếm" />
            <button class="find" @click="getListUser">Tìm kiếm</button>
          </div>
        </div>
        <table>
          <tr>
            <th>STT</th>
            <th>Email</th>
            <th>Tên Người Dùng</th>
            <th></th>
          </tr>
          <tr v-for="(i, index) in list" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ i.email }}</td>
            <td>{{ i.name }}</td>
            <td>
              <div @click="createTransaction(i.id)" class="text-blue cursor-pointer">Mở Thi Trắc Nghiệm</div>
            </td>
          </tr>
        </table>
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
}
</style>
