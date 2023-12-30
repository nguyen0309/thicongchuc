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
    <div v-else class="wrap-content h-full p-12">
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
      <div v-if="type == 'posts'" class="wrap-content h-full p-12">
        <div class="featured">
          <div class="list">
            <div class="item" v-for="i in listPost" :key="i">
              <a :href="`/${i.slug.slug}`">
                <img :src="i.img" alt="Nikko Apartments" class="thumb" />
              </a>
              <div class="body">
                <h3 class="title mb-2">
                  <a>{{ i.title }}</a>
                </h3>
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <!-- <img src="@/assets/img/beds.svg" alt="" class="icon" /> -->
                    <span class="label">{{ i.description }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="type == 'post'" class="wrap-content h-full p-12">
        <img :src="post.img" alt="" />
        <h3>{{ post.title }}</h3>
        <p>{{ post.description }}</p>
        <p>{{ post.content }}</p>
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
  margin-top: 41px;
  padding: 110px 0;
}

.featured .sub-title {
  font-weight: 600;
  font-size: 3.5rem;
  line-height: 1;
  color: #000339;
}

.featured .row {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.featured .desc {
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.88;
  color: #5a6473;
}

.featured .link {
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.8rem;
  color: #0689ff;
}

.featured .link .arrow {
  margin-left: 8px;
}

.featured .list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 70px;
}

.featured .item {
  flex: 1;
  background: #fff;
  border-radius: 12px;
}

.featured .item .thumb {
  width: 100%;
  height: 227px;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.featured .item .body {
  padding: 17px 20px 24px;
}

.featured .item .title a {
  font-weight: 600;
  font-size: 2rem;
  line-height: 1.5;
  color: #000339;
}

.featured .item .icon {
  margin-left: 23px;
}

.featured .item .icon:first-child {
  margin-left: 0;
}

.featured .item .label {
  font-weight: 500;
  font-size: 1.4rem;
  letter-spacing: 0.01em;
}
</style>
