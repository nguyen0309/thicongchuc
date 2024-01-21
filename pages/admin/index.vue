<script setup>
import { useAdminService } from "@/services/admin";
import { useCatgoriesService } from "@/services/categories";
import Success from "@/components/success.vue";
import AddTransaction from "@/pages/admin/components/addTransaction.vue";
import ChangePassword from "@/pages/admin/components/changePassword.vue";
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";

const list = ref([]);
const search = ref("");
const propsList = ref([]);
const listCategories = ref([]);
const openSuccess = ref(false);
const limit = ref(10);
const page = ref(1);
const total = ref(0);
const id = ref(null);
const open = ref(false);
const openChange = ref(false);

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
const createTransaction = (value, listTopic) => {
  listTopic = listTopic.map((i) => i.topic.id);
  propsList.value = listCategories.value.filter((i) => !listTopic.includes(i.id));
  id.value = value;
  open.value = true;
};

const addSuccess = () => {
  openSuccess.value = true;
  open.value = false;
  getListUser();
  setTimeout(() => {
    openSuccess.value = false;
  }, 2000);
};
const changeUserPassword = (value) => {
  id.value = value;
  openChange.value = true;
};
const changeSuccess = () => {
  openSuccess.value = true;
  openChange.value = false;
  setTimeout(() => {
    openSuccess.value = false;
  }, 2000);
};
const formatDate = (value) => {
  const timestamp = value;

  // Create a Date object from the timestamp
  const date = new Date(timestamp);

  // Extract components
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1; // Months are zero-indexed, so add 1
  const day = date.getUTCDate();
  const hours = date.getUTCHours() + 7;
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();
  const milliseconds = date.getUTCMilliseconds();
  // Format components as needed (add leading zeros if necessary)
  const formattedDate = `${String(day).padStart(2, "0")}-${String(month).padStart(2, "0")}-${year}`;
  const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  return formattedTime + " " + formattedDate;
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
            <th>Ngành đã mở</th>
            <th>Ngày đăng mở khoá</th>
            <th></th>
          </tr>
          <tr v-for="(i, index) in list" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ i.email }}</td>
            <td>{{ i.name }}</td>
            <td>
              <div class="mb-1" v-for="transaction in i.transactions" :key="transaction.id">+ {{ transaction.topic.title }}</div>
            </td>
            <td>{{ formatDate(i.created_at) }}</td>
            <td>
              <div @click="changeUserPassword(i.id)" class="text-blue cursor-pointer mb-3">Đổi mật khẩu</div>
              <div @click="createTransaction(i.id, i.transactions)" class="text-blue cursor-pointer">Mở Thi Trắc Nghiệm</div>
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
                  <add-transaction @close="open = false" @add-success="addSuccess" :listTopic="propsList" :id="id" />
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
      <TransitionRoot as="template" :show="openChange">
        <Dialog as="div" class="relative z-10" @close="openChange = false">
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
                  <change-password @close="openChange = false" @change-success="changeSuccess" :id="id" />
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
