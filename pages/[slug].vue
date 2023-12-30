<script setup>
import { useSlugService } from "@/services/slug";
import { useExamsService } from "@/services/exams";
import config from "@/config";

const route = useRoute();
const router = useRouter();
const list = ref({});
const loading = ref(false);

const getSlug = async () => {
  try {
    loading.value = true;
    const res = await useSlugService().get(route.params.slug);
    if (res.data) {
      list.value = res.data;
      console.log(list.value.title);
    }
    loading.value = false;
  } catch (e) {
    console.log(e);
  }
};
const generateExam = async (slug) => {
  try {
    const res = await useExamsService().generate(slug);
    if (res.exam) {
      router.push(`/thi-trac-nghiem/${res.exam.id}`);
    }
  } catch (e) {
    console.log(e);
  }
};
onMounted(() => {
  getSlug();
});
</script>

<template>
  <NuxtLayout>
    <div v-if="loading" class="h-full flex items-center justify-center"><div class="loader"></div></div>
    <div v-else class="wrap-content h-full p-12">
      <div class="contact cursor-pointer" v-if="list.is_access_topic" @click="generateExam(list.slug.slug)">Vào thi!</div>
      <div class="block p-6" v-else>
        <div class="fs-36 fw-600 text-black-700 mb-8">Thi thử trắc nghiệm Kiến thức chung {{ list.title }}</div>
        <div class="fs-18 leading-5 fw-400 text-red-700 alert p-6 flex gap-2 items-center mb-8">
          <img src="@/assets/img/error.png" alt="" />
          Bạn cần được mở khoá để làm đề thi này!
        </div>
        <div class="leading-6 fs-16 fw-700 text-blue underline mb-8">Đăng ký mua đề thi với giá xxx/tháng!</div>
        <a :href="`tel:${config.phone}`" class="contact">Liên hệ Zalo: {{ config.phone }}</a>
      </div>
    </div>
  </NuxtLayout>
</template>

<style>
.wrap-content {
}
.block {
  height: max-content;
  border-radius: 20px;
  background: var(--white, #fff);
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.1);
}
.alert {
  border-radius: 6px;
  background: var(--red-50, #fef2f2);
}
.contact {
  border-radius: 12px;
  background: var(--Theme-Blue, #003c97);
  display: flex;
  padding: 16px 17px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  color: #fff;
}
</style>
