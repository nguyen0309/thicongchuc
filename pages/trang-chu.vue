<script setup>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Footer from "../components/footer.vue";
import { useCatgoriesService } from "@/services/categories";

const currentSlide = ref(0);
const listCategories = ref(0);
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
  { name: "kyluc", score: 10, time: "00:10:58" },
  { name: "Lê Thị Khoa", score: 10, time: "00:11:35" },
  { name: "sieunhan_zzz", score: 10, time: "00:13:53" },
  { name: "account", score: 10, time: "00:14:42" },
  { name: "thuykhoa", score: 10, time: "00:15:24" },
  { name: "Nguyễn Lê Na", score: 10, time: "00:17:24" },
  { name: "checkzzz@@@", score: 10, time: "00:18:24" },
  { name: "Đinh Minh Thư", score: 10, time: "00:19:24" },
  { name: "meowmeow", score: 10, time: "00:20:43" },
  { name: "La Thị Hà", score: 10, time: "00:21:53" },
  { name: "sweet@@@", score: 10, time: "00:22:21" },
]);
const next = () => {
  currentSlide.value++;
};
const prev = () => {
  currentSlide.value--;
};
const getCategories = async () => {
  try {
    const res = await useCatgoriesService().list();
    if (res) {
      listCategories.value = res.list;
    }
  } catch (e) {
    console.log(e);
  }
};
onMounted(() => {
  getCategories();
});
</script>
<template>
  <NuxtLayout>
    <main>
      <!-- <div class="hero-wrap p-10 flex items-center gap-5 justify-center">
        <div class="mb-2 relative rounded-lg lg:w-4/5">
          <Carousel :items-to-show="1" :wrap-around="true" v-model="currentSlide">
            <Slide v-for="i in 10" :key="i">
              <div class="carousel__item h-420 rounded-lg">
                <img class="h-420" src="@/assets/img/banner.png" alt="Besnik." />
              </div>
            </Slide>
          </Carousel>

          <div class="absolute arrow-slide cursor-pointer left-arrow" @click="prev">
            <img src="@/assets/img/arrow-left.png" alt="" />
          </div>
          <div class="absolute arrow-slide cursor-pointer right-arrow" @click="next">
            <img src="@/assets/img/arrow-right.png" alt="" />
          </div>
        </div>
      </div> -->
      <div id="features" class="featured">
        <div class="content">
          <header class="flex items-center justify-between">
            <h2 class="sub-title">Thi kiến thức chung</h2>
          </header>
          <div class="list">
            <div class="item" v-for="i in listCategories" :key="i">
              <a :href="`/${i.slug.slug}`">
                <img src="@/assets/img/featured-1.jpg" alt="Nikko Apartments" class="thumb" />
              </a>
              <div class="body">
                <h3 class="title mb-2">
                  <a>{{ i.title }}</a>
                </h3>
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <!-- <img src="@/assets/img/beds.svg" alt="" class="icon" /> -->
                    <span class="label">{{ i.slug?.slug == "tieng-anh" ? 30 : 60 }} câu hỏi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="working features p-12">
        <div class="z-10">
          <header class="flex items-center justify-center mb-12">
            <h2 class="sub-title text-white text-center">Nhận xét của <span class="text-yellow">học viên</span></h2>
          </header>
          <div class="carousel flex items-center justify-around">
            <div v-for="(i, index) in review" :key="index" class="mb-6">
              <div class="z-10 carousel__item h-250 w-300 thanks bg-white mb-8">
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
                <th>Tên</th>
                <th>Điểm</th>
                <th>Thời gian</th>
              </tr>
              <tr v-for="(i, index) in tables" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ i.name }}</td>
                <td>{{ i.score }}</td>
                <td>{{ i.time }}</td>
              </tr>
            </table>
          </div>
        </ClientOnly>
      </div>
      <div id="resources" class="stats p-12">
        <div class="content z-10">
          <div class="row row-qty">
            <div class="qty-item text-center">
              <strong class="qty text-white">1500+</strong>
              <p class="qty-desc text-white">Người đã mua đề thi</p>
            </div>
            <div class="qty-item text-center">
              <strong class="qty text-white">5,000+</strong>
              <p class="qty-desc text-white">Đã tham gia cùng chúng tôi</p>
            </div>
            <div class="qty-item text-center">
              <strong class="qty text-white">1000+</strong>
              <p class="qty-desc text-white">Người đã đậu và có việc làm</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer></Footer>
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

.hero-wrap {
  position: relative;
  height: 500px;
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
  // box-shadow: 0 0 1px 1px #000000
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

/* Stats */
.stats {
  position: relative;
  // margin-top: 75px;
  // padding: 50px 0;
}
.stats::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
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
}

.stats .qty-desc {
  margin-top: 24px;
  font-weight: 500;
  font-size: 1.8rem;
}

.h-420 {
  height: 420px;
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
  // background: transparent url(@/assets/img/working.png) no-repeat center;
}
.working::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
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

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
