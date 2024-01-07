<script setup>
import { useSlugService } from "@/services/slug";
import { useExamsService } from "@/services/exams";
import config from "@/config";

const route = useRoute();
const router = useRouter();
const list = ref({});
const loading = ref(false);
const type = ref("");
const post = ref({});
const listPost = ref([]);

const getSlug = async () => {
  try {
    loading.value = true;
    const res = await useSlugService().get(route.params.slug);
    console.log(res);
    type.value = res.type;
    if (type.value == "exam") {
      list.value = res.data;
      console.log(list.value.title);
    }
    if (type.value == "posts") {
      listPost.value = res.list;
    }
    if (type.value == "post") {
      post.value = res.data;
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
    <div v-else class="wrap-content h-full p-12 white-bg">
      <div v-if="type == 'exam'">
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
      <div v-if="type == 'posts'" class="wrap-content h-full">
        <div class="featured">
          <div class="fs-36 fw-600 text-black-700 mb-8">Tổng hợp tin tức</div>
          <div class="flex flex-col gap-4">
            <a class="item flex" v-for="i in listPost" :key="i" :href="`/${i.slug.slug}`">
              <img :src="i.img" :alt="i.title" class="thumb w-full" />
              <div class="body">
                <div class="sub-title mb-2 line-clamp-1">
                  {{ i.title }}
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <!-- <img src="@/assets/img/beds.svg" alt="" class="icon" /> -->
                    <span class="label line-clamp-3">{{ i.description }}</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div v-if="type == 'post'" class="wrap-content h-full">
        <h3 class="fs-28 post-title mb-2">{{ post.title }}</h3>
        <div class="fs-16 mb-4 text-gray-500 leading-6 fw-500">{{ post.description }}</div>
        <div class="flex justify-center mb-4"><img :src="post.img" alt="" /></div>
        <p class="text-black-600 fs-16 leading-6 fw-400">{{ post.content }}</p>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
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
  background: var(--gray-100, #F3F4F6);
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
</style>
