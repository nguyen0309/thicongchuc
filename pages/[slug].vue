<script setup>
import { useSlugService } from "@/services/slug";
import { useExamsService } from "@/services/exams";
import config from "@/config";

const route = useRoute();
const router = useRouter();
const list = ref({});
const loading = ref(false);
const mustLogin = ref(true);
const listHistory = ref([]);

const getSlug = async () => {
  try {
    loading.value = true;
    if (process.client && !localStorage.getItem("congchuc24h_token")) {
      loading.value = false;
      return;
    }
    mustLogin.value = false;
    loading.value = true;
    const res = await useSlugService().get(route.params.slug);
    list.value = res.data;
    getHistory(route.params.slug);
    loading.value = false;
  } catch (e) {
    console.log(e);
  }
};
const getHistory = async () => {
  try {
    const res = await useExamsService().history(route.params.slug);
    if (res) {
      listHistory.value = res.list;
    }
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
    <div v-else class="wrap-content p-12">
      <div v-if="mustLogin" class="wrap-content p-12 fs-36 fw-600 text-black-700 mb-8">Bạn cần đăng nhập để thực hiện chức năng này!</div>
      <div v-else>
        <div class="fs-36 fw-600 text-black-700 mb-8">Trắc nghiệm Kiến thức chung {{ list.title }}</div>
        <div v-if="(list.is_free && route.query.type == 'free') || !list.is_free">
          <div class="contact cursor-pointer mb-8" @click="generateExam(list.slug.slug)">Vào thi!</div>
        </div>
        <div class="block p-6" v-else-if="list.is_free">
          <div class="fs-18 leading-5 fw-400 text-red-700 alert p-6 flex gap-2 items-center mb-8">
            <img src="@/assets/img/error.png" alt="" />
            Bạn cần được mở khoá để làm đề thi này!
          </div>
          <a :href="`tel:${config.phone}`" class="contact">Liên hệ Zalo: {{ config.phone }}</a>
        </div>
        <div class="fs-30 fw-600 text-black-700 mb-8 mt-8">Lịch sử những lần thi trước</div>
        <div class="list-history" v-if="listHistory.length > 0">
          <div class="block p-6" v-for="i in listHistory" :key="i.id">
            <div class="flex items-center justify-between mb-4">
              <div class="label">Kết quả</div>
              <div class="label" :class="i.score > 5 ? 'text-green' : 'text-red-500'">{{ i.score > 5 ? "Đậu" : "Trượt" }}</div>
            </div>
            <div class="flex items-center justify-between mb-4">
              <div class="label">Điểm</div>
              <div class="label">{{ i.score }}</div>
            </div>
            <div class="flex items-center justify-between mb-4">
              <div class="label">Số câu làm đúng</div>
              <div class="label">{{ i.total_correct_answer }}</div>
            </div>
            <div class="flex items-center justify-between mb-4">
              <div class="label">Thời gian làm bài</div>
              <div class="label">{{ i.total_minute_work }}</div>
            </div>
          </div>
        </div>
        <div v-else class="fs-20 text-gray-700 fw-400 leading-5">Bạn chưa có lịch sử thi ngành này!</div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
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
  background: var(--Theme-Blue, #ff9100);
  display: flex;
  padding: 16px 17px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  color: #fff;
}

.featured {
  // margin-top: 41px;
  // padding: 110px 0;
}

.sub-title {
  font-weight: 500;
  font-size: 24px;
  letter-spacing: 0.01em;
  color: #000339;
}

.featured .item {
  flex: 1;
  background: #fff;
  border-radius: 12px;
}

.thumb {
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}

.featured .item .body {
  width: 100%;
  padding: 17px 20px 24px;
  background: var(--gray-100, #f3f4f6);
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
}
.post-title {
  font-weight: 600;
  line-height: 1.5;
  color: #000339;
}

.featured .item .label {
  font-weight: 500;
  font-size: 1.4rem;
  letter-spacing: 0.01em;
}
.list-history {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}
.block {
  height: max-content;
  border-radius: 20px;
  background: var(--white, #fff);
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.1);
}
@media screen and (max-width: 1080px) {
  .list-history {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 767px) {
  .list-history {
    grid-template-columns: 1fr;
  }
}
</style>
