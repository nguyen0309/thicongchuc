<script setup>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Footer from "../components/footer.vue";
import { useCatgoriesService } from "@/services/categories";
import { useSlugService } from "@/services/slug";
import AnimationText from "@/components/animation-text.vue";
import AnimationText3 from "@/components/animation-text-3.vue";
import { useUsersService } from "@/services/users";
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";

const router = useRouter();
const currentSlide = ref(0);
const listCategories = ref(0);
const listPost = ref([]);
const hotNews = ref({});
const listRank = ref([]);
const open = ref(false);
const review = ref([
  {
    review: "Cảm ơn mọi người trong thời gian qua đã chỉ bảo và giúp đỡ tôi rất nhiều. Chúc mọi người đạt được nhiều thành công.",
    name: "Nguyễn Hương Giang",
    work: "Kế toán Hải quan Cà Mau",
  },
  {
    review:
      "Tôi thật may mắn khi được học với mọi người, những con người hòa đồng, dễ thương và nhiệt tình. Tôi đã được mọi người giúp đỡ nhiều và cũng đã học hỏi được rất nhiều. Cảm ơn mọi người rất nhiều!",
    name: "Lê Đình Bắc",
    work: "Kho bạc Nhà nước tỉnh Bắc Giang",
  },
  {
    review:
      "Được biết tới website,  nhận được sự tư vấn, hỗ trợ về kiến thức của website khi đi thi là một may mắn đối với em.Cảm ơn mọi người rất nhiều!",
    name: "Lê Minh Thư",
    work: "Kho bạc Nhà nước tỉnh Long An",
  },
]);
const tables = ref([
  { user_name: "kyluc", exam_score: 10, time_diff: "00:10:58", topic_title: "Hải Quan" },
  { user_name: "Lê Thị Khoa", exam_score: 10, time_diff: "00:11:35", topic_title: "Tiếng Anh" },
  { user_name: "sieunhan_zzz", exam_score: 10, time_diff: "00:13:53", topic_title: "Kho bạc nhà nước" },
  { user_name: "account", exam_score: 10, time_diff: "00:14:42", topic_title: "Ngân hàng nhà nước" },
  { user_name: "thuykhoa", exam_score: 10, time_diff: "00:15:24", topic_title: "Kho bạc nhà nước" },
  { user_name: "Nguyễn Lê Na", exam_score: 10, time_diff: "00:17:24", topic_title: "Thuế" },
  { user_name: "checkzzz@@@", exam_score: 10, time_diff: "00:18:24", topic_title: "Thuế" },
  { user_name: "Đinh Minh Thư", exam_score: 10, time_diff: "00:19:24", topic_title: "Thống kê" },
  { user_name: "meowmeow", exam_score: 10, time_diff: "00:20:43", topic_title: "Bảo hiểm xã hội" },
  { user_name: "La Thị Hà", exam_score: 10, time_diff: "00:21:53", topic_title: "Bảo hiểm xã hội" },
  { user_name: "sweet@@@", exam_score: 10, time_diff: "00:22:21", topic_title: "Tiếng Anh" },
]);

const counters = {
  counter_1: { current: 0, target: 500, increment: 10 },
  counter_2: { current: 0, target: 5000, increment: 100 },
  counter_3: { current: 0, target: 300, increment: 6 },
};

const updateCounter = (counterId) => {
  if (process.client) {
    let counterElement = document.getElementById(counterId);
    counterElement.textContent = counters[counterId].current + "+";
  }
};

const animateCounter = (counterId) => {
  const counter = counters[counterId];
  const animationInterval = setInterval(() => {
    counter.current += counter.increment;
    updateCounter(counterId);

    if (counter.current >= counter.target) {
      counter.current = counter.target;
      updateCounter(counterId);
      clearInterval(animationInterval);
      return;
    }
  }, 50);
};

const next = () => {
  currentSlide.value++;
};
const prev = () => {
  currentSlide.value--;
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
const getPost = async () => {
  try {
    // loading.value = true;
    const res = await useSlugService().get("tin-tuc");
    listPost.value = res.list;
    hotNews.value = res.list[0];

    // loading.value = false;
  } catch (e) {
    console.log(e);
  }
};
const getListRank = async () => {
  try {
    // loading.value = true;
    const res = await useUsersService().listRank();
    if (res) {
      listRank.value = res.list;
    }
    // loading.value = false;
  } catch (e) {
    console.log(e);
  }
};

onMounted(() => {
  getCategories();
  getPost();
  getListRank();
  setTimeout(() => {
    animateCounter("counter_1");
    animateCounter("counter_2");
    animateCounter("counter_3");
  }, 1000);
});
</script>
<template>
  <NuxtLayout>
    <main>
      <div class="marquee-container py-6 white-bg" v-if="listPost.length > 0" @click="router.push(hotNews.slug.slug)">
        <a :href="`${hotNews.slug.slug}`">
          <div class="flex gap-2 items-center marquee-text">
            <img class="w-24" src="@/assets/img/fire.png" alt="" />
            <div class="text-red-500">{{ hotNews.title }}</div>
            <img class="w-24" src="@/assets/img/fire.png" alt="" />
          </div>
        </a>
      </div>
      <div @click="open = true" class="docs fs-30 fw-600 text-white flex items-center justify-start w-max p-12 gap-4">
        <img class="w-24" src="@/assets/img/pow.gif" alt="" />
        <div>Tài liệu đầy đủ từng ngành</div>
        <img class="w-24" src="@/assets/img/pow.gif" alt="" />
      </div>
      <!-- <div class="dao-ly stats px-12 py-12 text-white fs-52 mb-12 flex items-center justify-center text-center">
        <div class="mw">
          Cách tốt nhất để <span class="text-yellow">dự đoán tương lai</span> là ngay từ bây giờ hãy <span class="text-yellow">tạo ra nó</span>.
        </div>
      </div> -->
      <animation-text-3 class="mb-12" />
      <div class="flex items-center wrap-news">
        <div class="flex flex-col w-1/3 h-full news-column">
          <div class="dao-ly stats welcome p-12 text-white fs-36 text-center h-1/2 flex items-center justify-center text-center">
            <div>Chào mừng bạn đến với website Thicongchuc24h!</div>
          </div>
          <div class="dao-ly stats book p-12 text-white fs-36 text-center h-1/2 flex items-center justify-center text-center">
            <div>Nơi tổng hợp kiến thức, tài liêu ôn thi các ngành, đề thi các năm</div>
          </div>
        </div>
        <div class="flex flex-col w-1/3 news-column">
          <div class="relative rounded-lg">
            <Carousel :items-to-show="1" :wrap-around="true" v-model="currentSlide">
              <Slide v-for="i in listPost" :key="i">
                <a class="flex flex-col w-full items-center carousel__item" :href="`/${i.slug.slug}`">
                  <div class="h-300 w-full rounded-lg">
                    <img class="h-300 w-full" :src="i.img" alt="Besnik." />
                  </div>
                  <div class="body-post">
                    <div class="post-title text-left fs-24 mb-2 line-clamp-1">
                      {{ i.title }}
                    </div>
                    <div class="label mh-130 text-left line-clamp-3">{{ i.description }}</div>
                  </div>
                </a>
              </Slide>
            </Carousel>
            <div class="absolute arrow-slide cursor-pointer left-arrow" @click="prev">
              <img src="@/assets/img/arrow-left.png" alt="" />
            </div>
            <div class="absolute arrow-slide cursor-pointer right-arrow" @click="next">
              <img src="@/assets/img/arrow-right.png" alt="" />
            </div>
          </div>
          <div class="dao-ly stats quiz notify p-12 text-white fs-36 flex items-center justify-center text-center">
            <div>
              <div class="mb-2">Luyên thi miễn phí trắc nghiệm công chức</div>
              <div class="mb-2">Thời gian áp dụng:</div>
              <div>15/01/2023 - 20/2/2023</div>
            </div>
          </div>
        </div>
        <div class="dao-ly stats contact p-12 text-white fs-36 text-center h-1/2 flex items-center justify-center text-center w-1/3 h-full">
          <div>
            Trợ giúp: Mọi thắc mắc của anh, chị xin hãy phản hồi cho chúng tôi qua số zalo:
            <span @click="open = true" class="text-yellow underline cursor-pointer">0844311767</span>
          </div>
        </div>
      </div>
      <div id="features" class="featured">
        <div class="content">
          <header class="flex items-center justify-between">
            <h2 class="sub-title">Thi kiến thức chung</h2>
          </header>
          <div class="list">
            <div class="item" v-for="i in listCategories" :key="i">
              <a :href="`/${i.slug.slug}`" class="flex justify-center wrap-thumb">
                <img :src="i.img" :alt="i.title" class="thumb" />
              </a>
              <div class="body">
                <div>
                  <h3 class="title mb-2">
                    <a>{{ i.title }}</a>
                  </h3>
                  <div class="flex items-center justify-between">
                    <span class="label">{{ i.slug?.slug == "tieng-anh" ? 30 : 60 }} câu hỏi</span>
                    <span class="label">{{ i.slug?.slug == "tieng-anh" ? 30 : 60 }} phút</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="working features px-12 py-150">
        <div class="z-10">
          <header class="flex items-center justify-center mb-12">
            <h2 class="sub-title text-white text-center">Nhận xét của <span class="text-yellow">học viên</span></h2>
          </header>
          <div class="carousel flex items-center justify-around">
            <div v-for="(i, index) in review" :key="index" class="mb-6">
              <div class="z-10 h-250 w-300 thanks bg-white mb-8">
                <div class="w-full h-full p-12">
                  <div class="flex w-full justify-center mb-5">
                    <img v-if="index % 2 == 0" class="w-48" src="@/assets/img/quotes.png" alt="" />
                    <img v-else class="w-48" src="@/assets/img/quotes_2.png" alt="" />
                  </div>
                  <div class="text-justify fs-16 fw-500 text-black-700 line-clamp w-full">
                    {{ i.review }}
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-center flex-col">
                <img class="w-48 br-50 mb-4 white-border" :src="`/avatar/avatar_${index}.png`" alt="" />
                <div class="fs-18 text-white fw-400 mb-4">{{ i.name }}</div>
                <div class="fs-14 text-white fw-400">{{ i.work }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="features" class="featured">
        <ClientOnly>
          <div class="content">
            <header class="flex items-center justify-between mb-8">
              <h2 class="sub-title">Bảng xếp hạng</h2>
            </header>
            <table>
              <tr>
                <th>STT</th>
                <th>Tên Người Dùng</th>
                <th>Ngành</th>
                <th>Điểm</th>
                <th>Thời gian</th>
              </tr>
              <tr v-for="(i, index) in listRank" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ i.user_name }}</td>
                <td>{{ i.topic_title }}</td>
                <td>{{ i.exam_score }}</td>
                <td>{{ i.time_diff }}</td>
              </tr>
            </table>
          </div>
        </ClientOnly>
      </div>
      <div id="resources" class="stats px-12 py-150">
        <div class="content z-10">
          <div class="row row-qty" id="list-counter">
            <div class="qty-item text-center">
              <strong class="qty text-white" id="counter_1">0</strong>
              <p class="qty-desc text-white">Người đã mua đề thi</p>
            </div>
            <div class="qty-item text-center">
              <strong class="qty text-white" id="counter_2">0</strong>
              <p class="qty-desc text-white">Đã tham gia cùng chúng tôi</p>
            </div>
            <div class="qty-item text-center">
              <strong class="qty text-white" id="counter_3">0</strong>
              <p class="qty-desc text-white">Người đã đậu và có việc làm</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer></Footer>
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
              <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white p-10 text-left shadow-xl transition-all">
                <div class="mb-4 fs-16">Liên hệ tới zalo: <span class="text-yellow underline"> 0844311767</span></div>
                <div class="flex items-center justify-center"><img class="modal mb-3" src="@/assets/img/contact-zalo.jpg" alt="" /></div>
                <div class="flex justify-end">
                  <div class="cursor-pointer" @click="open = false">Thoát</div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </NuxtLayout>
</template>
<style lang="scss" scoped>
.content {
  width: 1110px;
  max-width: calc(100% - 48px);
  margin-left: auto;
  margin-right: auto;
}

.line-clamp {
  // white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.marquee-container {
  width: 100%;
  overflow: hidden;
}

/* Style the marquee text */
.marquee-text {
  font-size: 24px;
  white-space: nowrap;
  animation: marqueeAnimation 12s linear infinite;
}

/* Animation for the marquee text */
@keyframes marqueeAnimation {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.hero-wrap {
  position: relative;
}

.hero-wrap .sub-title {
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 1.5;
  letter-spacing: 0.01em;
  color: #687690;
}

.hero-wrap .title {
  margin-top: 8px;
  font-weight: 700;
  font-size: 6.2rem;
  line-height: 1.19;
  color: #000336;
}

.hero-wrap .desc {
  margin-top: 30px;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 1.78;
  color: #5a6473;
}

/* ======== Featured ======== */
.featured {
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
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 70px;
}

.featured .item {
  flex: 1;
  background: #fff;
  border-radius: 12px;
  // box-shadow: 0 0 1px 1px #000000
}

.wrap-thumb {
  border: 1px solid #f3f4f6;
}
.featured .item .thumb {
  height: 227px;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.featured .item .body {
  padding: 17px 20px 24px;
  background: #f3f4f6;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
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

.dao-ly {
  background: transparent url(@/assets/img/working_4.jpg) no-repeat center !important;
  background-color: #1f0e00eb;
}
/* Stats */
.stats {
  position: relative;
  background: transparent url(@/assets/img/working.png) no-repeat center;
  background-size: cover;
}
.welcome {
  background: transparent url(@/assets/img/welcome.jpg) no-repeat center !important;
}
.book {
  background: transparent url(@/assets/img/book.jpg) no-repeat center !important;
}
.contact {
  background: transparent url(@/assets/img/contact.jpg) no-repeat center !important;
}
.quiz {
  background: transparent url(@/assets/img/quiz.jpg) no-repeat center !important;
}
.stats::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1f0e00eb;
}

.stats .content {
  width: 1048px;
}

.stats .row {
  display: flex;
}

.stats .sub-title {
  position: relative;
  width: 269px;
  font-weight: 600;
  font-size: 3.5rem;
  line-height: 1.29;
  color: #000339;
}

.stats .sub-title::before {
  position: absolute;
  top: -10px;
  left: 0;
  content: "";
  display: block;
  width: 41px;
  height: 4px;
  background: #000339;
  border-radius: 12px;
}

.stats .row-qty {
  justify-content: space-between;
  // margin-top: 110px;
  padding: 0 32px;
}

.stats .qty {
  font-weight: 600;
  font-size: 6.4rem;
  animation: count-up 10s linear forwards;
}

@keyframes count-up {
  from {
    content: 0;
  }
  to {
    content: 5000;
  }
}

.stats .qty-desc {
  margin-top: 24px;
  font-weight: 500;
  font-size: 1.8rem;
}

.h-300 {
  height: 300px;
}
.arrow-slide {
  border-radius: 60px;
  background: rgba(0, 0, 0, 0.4);
  padding: 8px;
  top: 50%;
  img {
    width: 16px;
    height: 16px;
  }
}
.left-arrow {
  left: 20px;
}
.right-arrow {
  right: 20px;
}
.working {
  width: calc(100vw - 5px);
  // height: 500px;
  position: relative;
  background: transparent url(@/assets/img/working_3.jpg) no-repeat center;
  background-size: cover;
}
.working::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1f0e00eb;
}
.working .sub-title {
  font-weight: 600;
  font-size: 3.5rem;
  line-height: 1;
}

@media screen and (max-width: 991px) {
  .carousel {
    flex-direction: column !important;
  }
  .featured .list {
    grid-template-columns: 1fr 1fr;
  }

  .stats .row {
    flex-direction: column;
  }

  .stats .sub-title {
    width: 70%;
  }

  .stats .row-qty {
    flex-direction: row;
  }

  .stats .qty {
    font-size: 5rem;
  }

  .stats .qty-desc {
    font-size: 1.5rem;
  }
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  .show-on-mobile {
    display: none;
  }
}

/* Mobile */
@media screen and (max-width: 767px) {
  .hero-wrap .title {
    margin-top: 20px;
    font-size: 5.2rem;
  }

  .featured .link {
    display: none;
  }

  .featured .list {
    grid-template-columns: 1fr;
  }

  .featured .view-all {
    display: flex;
    justify-content: center;
    margin-top: 60px;
  }

  .stats .sub-title {
    width: 100%;
  }

  .stats .row-qty {
    flex-direction: column;
    align-items: center;
    row-gap: 60px;
  }
}
.w-300 {
  width: 300px;
}
.h-250 {
  height: 250px;
}
.thanks {
  border-radius: 36px;
}
.post-title {
  font-weight: 600;
  line-height: 1.5;
  color: #000339;
}
.body-post {
  width: 100%;
  padding: 17px 20px 24px;
  background: #f3f4f6;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  height: 130px;
}

.carousel__item {
  max-width: max-content;
}
.mh-130 {
  max-height: 130px;
}
.wrap-news {
  height: 675px !important;
}
.notify {
  height: 245px !important;
}
.center-div {
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
@media screen and (max-width: 1180px) {
  .wrap-news {
    flex-direction: column;
    height: max-content !important;
  }
  .news-column {
    width: 100%;
  }
  .hide-column {
    display: none;
  }
  .carousel__item {
    max-width: 600px;
  }
}
.mw {
  max-width: 770px;
}
.modal {
  width: 300px;
}
.docs {
  background: #ff9100;
  cursor: pointer;
}
</style>
