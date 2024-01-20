<script setup>
import { useAdminService } from "@/services/admin";
import { useCatgoriesService } from "@/services/categories";
import Success from "@/components/success.vue";
import AddTransaction from "@/pages/admin/components/addTransaction.vue";
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";

const list = ref([]);
const search = ref("");
const listCategories = ref([]);
const openSuccess = ref(false);
const limit = ref(10);
const page = ref(1);
const total = ref(0);
const id = ref(null);
const open = ref(false);

const getListUser = async () => {
  try {
    const res = await useAdminService().getListUser({}, limit.value, page.value, search.value.trim());
    if (res) {
      list.value = res.list;
      total.value = res.total;
    }
  } catch (e) {
    console.log(e);
  }
};
const getCategories = async () => {
  try {
    const res = await useCatgoriesService().list({ types: ["exam"] });
    if (res) {
      listCategories.value = res.list;
    }
  } catch (e) {
    console.log(e);
  }
};
const createTransaction = (value) => {
  id.value = value;
  open.value = true;
};
const addSuccess = () => {
  openSuccess.value = true;
  open.value = false;
};
watch(page, () => {
  getListUser();
});
definePageMeta({
  layout: "admin",
});
onMounted(() => {
  getListUser();
  getCategories();
});
</script>
<template>
  <ClientOnly>
    <NuxtLayout>
      <div class="relative">
        <success v-if="openSuccess" :text="'Thành công'"></success>
        <h2 class="fs-36 fw-600 text-black-700 mb-12">Danh sách người dùng</h2>
        <div class="flex items-center justify-end mb-12">
          <div class="flex items-center gap-2">
            <input v-model="search" type="text" placeholder="Tìm kiếm" />
            <button class="find" @click="getListUser">Tìm kiếm</button>
          </div>
        </div>
        <table class="mb-12">
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
        <div class="flex justify-end gap-3">
          <button v-if="page > 1" cursor-pointer @click="page--" class="find">Previous</button>
          <button v-if="limit * page < total" @click="page++" class="find">Next</button>
        </div>
      </div>
      <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-10" @close="open = false">
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
                <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white p-8 text-left shadow-xl transition-all mw-640 w-1/2">
                  <add-transaction @close="open = false" @add-success="addSuccess" :listCategories="listCategories" :id="id" />
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
    </NuxtLayout>
  </ClientOnly>
</template>
<style>
.find {
  font-size: 16px;
  background-color: #ff9100;
  color: #fff;
  border-radius: 6px;
  padding: 0 20px;
  height: 44px;
}
</style>
