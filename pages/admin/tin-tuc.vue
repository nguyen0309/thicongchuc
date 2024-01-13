<script setup>
import { useAdminService } from "@/services/admin";
import EditPost from "@/pages/admin/components/editPost.vue";
import DeletePost from "@/pages/admin/components/deletePost.vue";
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";

const list = ref([]);
const search = ref("");
const open = ref(false);
const limit = ref(10);
const page = ref(1);
const total = ref(0);
const id = ref(null);
const openDelete = ref(false);

const getListPost = async () => {
  try {
    const res = await useAdminService().listPost({}, limit.value, page.value, search.value);
    if (res) {
      list.value = res.list;
    }
  } catch (e) {
    console.log(e);
  }
};
const createTransaction = async (user_id) => {
  try {
    // const res = await useAdminService().createTransaction(user_id, 1, 0, listTopic);
    // if (res) {
    //   open.value = true;
    //   setTimeout(() => {
    //     open.value = false;
    //   }, 3000);
    // }
  } catch (e) {
    console.log(e);
  }
};
const addPost = () => {
  id.value = null;
  open.value = true;
};
const actionSuccess = () => {
  open.value = false;
  getListPost();
};
const confirmDeletePost = (value) => {
  console.log("id", value);
  id.value = value;
  openDelete.value = true;
};
const deleteSuccess = () => {
  openDelete.value = false;
  getListPost();
};
definePageMeta({
  layout: "admin",
});
onMounted(() => {
  getListPost();
});
</script>
<template>
  <ClientOnly>
    <NuxtLayout>
      <div class="relative">
        <h2 class="fs-36 fw-600 text-black-700 mb-12">Danh sách người dùng</h2>
        <div class="flex items-center justify-between mb-12">
          <button @click="addPost" class="find">Thêm</button>
          <div class="flex items-center gap-2">
            <input v-model="search" type="text" placeholder="Tìm kiếm" />
            <button class="find" @click="getListPost">Tìm kiếm</button>
          </div>
        </div>
        <table class="mb-12">
          <tr>
            <th>STT</th>
            <th>Ảnh</th>
            <th>Tiều Đề</th>
            <th>Mô tả</th>
            <th>Nội dung</th>
            <th></th>
            <th></th>
          </tr>
          <tr v-for="(i, index) in list" :key="index">
            <td>{{ index + 1 }}</td>
            <td class="w-1/6"><img v-if="i.img" class="w-full" :src="i.img" alt="" /></td>
            <td style="vertical-align: top">
              <div>{{ i.title }}</div>
            </td>
            <td style="vertical-align: top">{{ i.description }}</td>
            <td style="vertical-align: top">{{ i.content }}</td>
            <td style="vertical-align: top">
              <div @click="createTransaction(i.id)" class="text-blue cursor-pointer">Chỉnh sửa</div>
            </td>
            <td style="vertical-align: top">
              <div @click="confirmDeletePost(i.id)" class="text-blue cursor-pointer">Xoá</div>
            </td>
          </tr>
        </table>
        <div class="flex justify-end gap-3">
          <button v-if="page > 1" @click="page--" class="find">Previous</button>
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
                  <edit-post @close="open = false" @action-success="actionSuccess" :id="id" />
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
      <TransitionRoot as="template" :show="openDelete">
        <Dialog as="div" class="relative z-10" @close="openDelete = false">
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
                  <delete-post @close="openDelete = false" @delete-success="deleteSuccess" :id="id" />
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
  width: max-content;
  font-size: 16px;
  background-color: #ff9100;
  color: #fff;
  border-radius: 6px;
  padding: 0 20px;
  height: 44px;
}
</style>
