<script setup>
import { useMediaService } from "@/services/media";
import SelectCategories from "@/components/selectCategories.vue";
import API from "@/api/category.json";

const loading = ref(false);
const list = ref([]);
const search = ref("");
const category = ref();

const getList = async () => {
  try {
    loading.value = true;
    const res = await useMediaService().list(
      { types: [".doc", ".docx", ".xlsx", "xls", ".pdf", "txt", ".ppt", ".pptx"], ref_type: "topic" },
      search.value
    );
    if (res) {
      list.value = res.list;
    }
    loading.value = false;
  } catch (e) {
    console.log(e);
  }
};
const getCategory = (value) => {
  category.value = value;
};
onMounted(() => {
  // getList();
});
</script>

<template>
  <NuxtLayout>
    <div v-if="loading" class="h-full flex items-center justify-center"><div class="loader"></div></div>
    <div v-else class="p-12 white-bg">
      <div class="w-full">
        <ClientOnly>
          <div class="content">
            <h2 class="fs-30 fw-600 text-black-700 mb-6">Danh mục ôn thi</h2>
            <select-categories class="w-full mb-6" @category="getCategory" :removeId="3"></select-categories>
            <div class="list-history" v-if="category == 8">
              <div class="block p-6" v-for="i in API.haiquan" :key="i">{{ i }}</div>
            </div>
            <div class="list-history" v-if="category == 22">
              <div class="block p-6" v-for="i in API.quanlythitruong" :key="i">{{ i }}</div>
            </div>
            <div class="list-history" v-if="category == 7">
              <div class="block p-6" v-for="i in API.thue" :key="i">{{ i }}</div>
            </div>
            <div class="list-history" v-if="category == 6">
              <div class="block p-6" v-for="i in API.khobacnhanuoc" :key="i">{{ i }}</div>
            </div>
            <div class="list-history" v-if="category == 2">
              <div class="block p-6" v-for="i in API.baohiemxahoi" :key="i">{{ i }}</div>
            </div>
            <div class="list-history" v-if="category == 4">
              <div class="block p-6" v-for="i in API.nganhangnhanuoc" :key="i">{{ i }}</div>
            </div>
            <div class="list-history" v-if="category == 1">
              <div class="block p-6" v-for="i in API.thongke" :key="i">{{ i }}</div>
            </div>
          </div>
        </ClientOnly>
      </div>
    </div>
  </NuxtLayout>
</template>
<style scoped>
.list-history {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
}
.block {
  height: max-content;
  border-radius: 8px;
  background: var(--white, #fff);
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.1);
}
</style>
