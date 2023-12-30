<script setup>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Footer from "../components/footer.vue";

const currentSlide = ref(0);

const next = () => {
  currentSlide.value++;
};
const prev = () => {
  currentSlide.value--;
};

onMounted(() => {});
</script>
<template>
  <NuxtLayout>
    <main>
      <div class="hero-wrap p-10 flex items-center gap-5 justify-center">
        <div class="mb-2 relative rounded-lg lg:w-4/5">
          <Carousel :items-to-show="1" :wrap-around="true" v-model="currentSlide">
            <Slide v-for="i in 10" :key="i">
              <div class="carousel__item h-420 rounded-lg">
                <img class="h-420" src="@/assets/img/banner.png" alt="Besnik." />
              </div>
            </Slide>
          </Carousel>

          <div class="absolute arrow-slide cursor-pointer left-arrow" @click="prev"><img src="@/assets/img/arrow-left.png" alt="" /></div>
          <div class="absolute arrow-slide cursor-pointer right-arrow" @click="next"><img src="@/assets/img/arrow-right.png" alt="" /></div>
        </div>
      </div>
      <div id="features" class="featured">
        <div class="content">
          <header class="flex items-center justify-between">
            <h2 class="sub-title">Đề thi <span class="text-yellow"> nổi bật</span></h2>
            <a href="#!" class="link">
              <span>Xem thêm</span>
              <img src="@/assets/img/arrow-right.svg" alt="Arrow right" class="arrow" />
            </a>
          </header>

          <div class="list">
            <div class="item" v-for="i in 6" :key="i">
              <a href="#!">
                <img src="@/assets/img/featured-1.jpg" alt="Nikko Apartments" class="thumb" />
              </a>
              <div class="body">
                <h3 class="title mb-2">
                  <a href="#!">Quyết định 89</a>
                </h3>
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <!-- <img src="@/assets/img/beds.svg" alt="" class="icon" /> -->
                    <span class="label">30 câu hỏi</span>
                  </div>
                  <div class="flex items-center">
                    <!-- <img src="@/assets/img/both.svg" alt="" class="icon" /> -->
                    <span class="label text-red-700">300.000đ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="view-all show-on-mobile">
            <a href="#!" class="btn">Xem thêm</a>
          </div>
        </div>
      </div>
      <div id="features" class="featured">
        <div class="content">
          <header class="flex items-center justify-between">
            <h2 class="sub-title">Thuế</h2>
            <a href="#!" class="link">
              <span>Xem thêm</span>
              <img src="@/assets/img/arrow-right.svg" alt="Arrow right" class="arrow" />
            </a>
          </header>

          <div class="list">
            <div class="item" v-for="i in 6" :key="i">
              <a href="#!">
                <img src="@/assets/img/featured-1.jpg" alt="Nikko Apartments" class="thumb" />
              </a>
              <div class="body">
                <h3 class="title mb-2">
                  <a href="#!">Quyết định 89</a>
                </h3>
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <!-- <img src="@/assets/img/beds.svg" alt="" class="icon" /> -->
                    <span class="label">30 câu hỏi</span>
                  </div>
                  <div class="flex items-center">
                    <!-- <img src="@/assets/img/both.svg" alt="" class="icon" /> -->
                    <span class="label text-red-700">300.000đ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="view-all show-on-mobile">
            <a href="#!" class="btn">Xem thêm</a>
          </div>
        </div>
      </div>
      <!-- Guides -->
      <!-- <div id="services" class="guides">
        <div class="content">
          <h2 class="sub-title">How its works?</h2>
          <p class="desc">Everything you need to know when you're looking to buy, rent, or sell - all in one place.</p>
          <ul class="list-guide">
            <li class="guide-item">
              <img src="@/assets/img/buyer.svg" alt="Buyer" class="icon" />
              <h3 class="title">Buyer Guides</h3>
              <a href="#!" class="link">
                <span>How to buy</span>
                <img src="@/assets/img/arrow-right.svg" alt="Arrow right" class="arrow" />
              </a>
            </li>
            <li class="guide-item">
              <img src="@/assets/img/renter.svg" alt="Renter" class="icon" />
              <h3 class="title">Renter Guides</h3>
              <a href="#!" class="link">
                <span>How to rent</span>
                <img src="@/assets/img/arrow-right.svg" alt="Arrow right" class="arrow" />
              </a>
            </li>
            <li class="guide-item">
              <img src="@/assets/img/seller.svg" alt="Seller" class="icon" />
              <h3 class="title">Seller Guides</h3>
              <a href="#!" class="link">
                <span>How to sell</span>
                <img src="@/assets/img/arrow-right.svg" alt="Arrow right" class="arrow" />
              </a>
            </li>
          </ul>

          <div class="guide-cta">
            <a href="#!" class="btn">Sell Full Guidelines</a>
          </div>
        </div>
      </div> -->

      <!-- Featured -->
      <div id="features" class="featured">
        <div class="content">
          <header class="flex items-center justify-between">
            <h2 class="sub-title">Bảo hiểm xã hội</h2>
            <a href="#!" class="link">
              <span>Xem thêm</span>
              <img src="@/assets/img/arrow-right.svg" alt="Arrow right" class="arrow" />
            </a>
          </header>

          <div class="list">
            <div class="item" v-for="i in 6" :key="i">
              <a href="#!">
                <img src="@/assets/img/featured-1.jpg" alt="Nikko Apartments" class="thumb" />
              </a>
              <div class="body">
                <h3 class="title mb-2">
                  <a href="#!">Quyết định 89</a>
                </h3>
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <!-- <img src="@/assets/img/beds.svg" alt="" class="icon" /> -->
                    <span class="label">30 câu hỏi</span>
                  </div>
                  <div class="flex items-center">
                    <!-- <img src="@/assets/img/both.svg" alt="" class="icon" /> -->
                    <span class="label text-red-700">300.000đ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="view-all show-on-mobile">
            <a href="#!" class="btn">Xem thêm</a>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div id="resources" class="stats">
        <div class="content">
          <!-- <div class="row">
            <div class="img-block">
              <img class="image" src="@/assets/img/stats-img.jpg" alt="You’ve found a neighborhood you love." />
              <div class="stats-trend">
                <div class="row">
                  <strong class="value">40,000+</strong>
                  <img src="@/assets/img/arrow-trend-up.svg" alt="" class="icon" />
                </div>
                <p class="desc">By avarage for 2 bedroom apments in San Francisco, CA</p>
                <div class="separate"></div>
                <div class="avatar-block">
                  <div class="avatar-group">
                    <img src="@/assets/img/avatar-1.jpg" alt="" class="avatar" />
                    <img src="@/assets/img/avatar-2.jpg" alt="" class="avatar" />
                  </div>
                  <div class="avatar-group">
                    <img src="@/assets/img/avatar-3.jpg" alt="" class="avatar" />
                    <img src="@/assets/img/avatar-4.webp" alt="" class="avatar" />
                    <img src="@/assets/img/avatar-5.jpg" alt="" class="avatar" />
                    <div class="avatar" style="--bg-color: #1f3bb1">R</div>
                  </div>
                  <div class="avatar-group">
                    <div class="avatar" style="--bg-color: #24d6d9">FJ</div>
                    <img src="@/assets/img/avatar-6.jpg" alt="" class="avatar" />
                    <div class="avatar" style="--bg-color: #f8c120">S</div>
                  </div>
                  <div class="avatar-group">
                    <img src="@/assets/img/avatar-7.jpeg" alt="" class="avatar" />
                    <img src="@/assets/img/avatar-8.jpg" alt="" class="avatar" />
                    <img src="@/assets/img/avatar-9.jpg" alt="" class="avatar" />
                    <div class="avatar" style="--bg-color: #f97f6b">JJ</div>
                  </div>
                  <div class="avatar-group">
                    <img src="@/assets/img/avatar-10.jpg" alt="" class="avatar" />
                    <div class="avatar" style="--bg-color: #73a242">QV</div>
                  </div>
                  <div class="avatar-group">
                    <img src="@/assets/img/avatar-11.jpg" alt="" class="avatar" />
                    <img src="@/assets/img/avatar-12.jpg" alt="" class="avatar" />
                  </div>
                  <div class="avatar-group">
                    <img src="@/assets/img/avatar-13.jfif" alt="" class="avatar" />
                    <div class="avatar" style="--bg-color: #1f3bb0">UI</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="info">
              <h2 class="sub-title">You’ve found a neighborhood you love.</h2>
              <p class="desc">
                When you own a home, you’re committing to living in one location for a while. In a recent Trulia survey, we found that five out of six
                respondents said finding the right neighborhood
              </p>
            </div>
          </div> -->
          <div class="row row-qty">
            <div class="qty-item text-center">
              <strong class="qty">1500+</strong>
              <p class="qty-desc">Người đã mua đề thi</p>
            </div>
            <div class="qty-item text-center">
              <strong class="qty">5,000+</strong>
              <p class="qty-desc">Đã tham gia cùng chúng tôi</p>
            </div>
            <div class="qty-item text-center">
              <strong class="qty">1000+</strong>
              <p class="qty-desc">Người đã đậu và có việc làm</p>
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

.btn {
  display: inline-block;
  min-width: 98px;
  padding: 18px 16px;
  background: var(--primary-color);
  border-radius: 12px;
  font-weight: 500;
  font-size: 1.4rem;
  text-align: center;
  color: #ffffff;
}

.btn:hover {
  opacity: 0.9;
}

.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: var(--line-clamp, 2);
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
  // margin-top: 75px;
  // padding: 50px 0;
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
  color: #000000;
}

.stats .qty-desc {
  margin-top: 24px;
  font-weight: 500;
  font-size: 1.8rem;
  color: #7b8087;
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
@media screen and (min-width: 992px) {
  .show-on-mobile {
    display: none;
  }
}

@media screen and (max-width: 991px) {
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
</style>
