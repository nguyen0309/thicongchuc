<script setup>
import { useMediaService } from "@/services/media";

const loading = ref(false);
const list = ref([]);
const search = ref("");

const getList = async () => {
  try {
    console.log("search.value", search.value);
    loading.value = true;
    const res = await useMediaService().list({ types: [".doc", ".docx", ".xlxs"] }, search.value);
    if (res) {
      list.value = res.list;
    }
    loading.value = false;
  } catch (e) {
    console.log(e);
  }
};

onMounted(() => {
  getList();
});
</script>

<template>
  <NuxtLayout>
    <div v-if="loading" class="h-full flex items-center justify-center"><div class="loader"></div></div>
    <div v-else class="h-full p-12 white-bg">
      <div class="w-full">
        <ClientOnly>
          <div class="content">
            <div class="flex items-center justify-between mb-8">
              <h2 class="fs-30 fw-600 text-black-700">Tài liệu tham khảo</h2>
              <div class="flex items-center gap-2">
                <input v-model="search" type="text" placeholder="Tìm kiếm" />
                <button class="find" @click="getList()">Tìm kiếm</button>
              </div>
            </div>
            <table v-if="list.length > 0">
              <tr>
                <th>STT</th>
                <th>Tên Tài Liệu</th>
                <th></th>
              </tr>
              <tr v-for="(i, index) in list" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ i.name }}</td>
                <td>
                  <a :href="`${i.src}`" class="text-blue">Tải xuống</a>
                </td>
              </tr>
            </table>
            <div v-else class="fs-20 text-gray-700 fw-400 leading-5">Không có tài liệu phù hợp với nội dung bạn tìm kiếm!</div>
          </div>
        </ClientOnly>
      </div>
    </div>
  </NuxtLayout>
</template>
<style>
table {
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 16px;
}
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
