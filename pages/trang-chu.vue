<script setup>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const currentSlide = ref(0);

const next = () => {
  currentSlide.value++;
};
const prev = () => {
  currentSlide.value--;
};

onMounted(() => {
  const pcNav = document.querySelector("#pc-nav");
  const mobileNav = document.querySelector("#mobile-nav");
  mobileNav.innerHTML = pcNav.innerHTML;
});
</script>
<template>
  <div class="">
    <header class="fixed-header">
      <div class="content">
        <nav class="navbar">
          <label for="menu-checkbox" class="toggle-menu cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
              />
            </svg>
          </label>
          <a href="trang-chu">
            <!-- <div class="logo fs-36 leading-8 text-black-700 fw-800">Thicongchuc24h</div> -->
          </a>
          <ul id="pc-nav">
            <li><a href="#">Trang chủ</a></li>
            <li><a href="khoa-hoc">Khoá học</a></li>
            <li class="show-on-mobile separate">
              <a href="dang-ky">Đăng ký</a>
            </li>
            <li class="show-on-mobile"><a href="dang-nhap">Đăng nhập</a></li>
          </ul>
          <div class="actions">
            <a href="dang-ky" class="action-link">Đăng ký</a>
            <a href="dang-nhap" class="btn action-btn">Đăng nhập</a>
          </div>
        </nav>
      </div>
    </header>

    <!-- Tablet/mobile header -->
    <header class="mobile-header">
      <input type="checkbox" name="" id="menu-checkbox" class="menu-checkbox" hidden />
      <label for="menu-checkbox" class="menu-overlay"></label>
      <div class="menu-drawer">
        <a href="#">
          <img src="@/assets/img/logo.svg" alt="Besnik." />
        </a>
        <ul id="mobile-nav"></ul>
      </div>
    </header>
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

    <!-- Footer -->
    <footer class="footer">
      <div class="content">
        <div class="row row-top">
          <!-- Product column -->
          <div class="column">
            <h3 class="heading">Liên kết</h3>
            <ul class="list">
              <li class="item flex items-center gap-2">
                <img class="w-8 h-8" src="@/assets/img/facebook.svg" alt="" />
                <a class="text-black-700" href="https://www.facebook.com/">test123@gmail.com</a>
              </li>
              <li class="item flex items-center gap-2">
                <img class="w-8 h-8" src="@/assets/img/zalo.svg" alt="" />
                <a class="text-black-700" href="mailto::trungnguyen030999@gmail.com">test123@gmail.com</a>
              </li>
            </ul>
          </div>
          <div class="column">
            <h3 class="heading">Liên hệ</h3>
            <ul class="list">
              <li class="flex items-center gap-2">
                <img class="w-8 h-8" src="@/assets/img/telephone.png" alt="" />
                <a class="text-black-700" href="tel:0705908789">(+84) 070 590 8789 (24/7)</a>
              </li>
              <li class="item flex items-center gap-2">
                <img class="w-8 h-8" src="@/assets/img/mail.png" alt="" />
                <a class="text-black-700" href="mailto::trungnguyen030999@gmail.com">test123@gmail.com</a>
              </li>
            </ul>
          </div>
          <!-- Get in touch column -->
          <!-- <div class="column">
          <h3 class="heading">Liên hệ</h3>
          <div class="social">
            <a href="#!" class="social-link w-24">
              <img src="@/assets/img/facebook.svg" alt="" />
            </a>
            <a href="#!" class="social-link w-24">
              <img src="@/assets/img/zalo.svg" alt="" />
            </a>
          </div>
        </div> -->
        </div>
        <div class="row row-bottom">
          <div class="fs-36 leading-8 text-black-700 fw-800">Thicongchuc24h</div>
          <p class="copyright">Copyright 2023.com, All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
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

/* ======== Header ======== */
.fixed-header {
  background: #e6f0ff;
  padding-top: 1px;
  position: sticky;
  top: -1px;
  z-index: 1;
}

.hero-wrap {
  position: relative;
  height: 500px;
}

.navbar {
  display: flex;
  align-items: center;
  padding: 12px 0;
}

.navbar ul {
  display: flex;
  margin-left: 50px;
}

.navbar .actions {
  margin-left: auto;
}

.navbar ul a {
  font-weight: 500;
  font-size: 1.4rem;
  color: #4f5361;
  padding: 8px 14px;
}

.navbar ul a:hover {
  text-decoration: underline;
}

.navbar .action-link {
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--primary-color);
}

.navbar .action-btn {
  padding: 13px 16px;
  margin-left: 18px;
  border-radius: 8px;
}

.hero-wrap .info {
  width: 51%;
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

.hero-cta {
  min-width: 170px;
  margin-top: 40px;
}

.hero-img {
  position: absolute;
  right: calc((100vw - 1110px) / 2 - 100px);
  bottom: 0;
}

/* ======== Clients ======== */
.clients {
  margin-top: 79px;
  padding: 43px 0 64px;
}

.clients .row {
  display: flex;
  justify-content: space-between;
}

.clients .desc {
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.25;
  color: #7d8589;
}

.clients .row-desc {
  margin-top: 23px;
}

.clients .images {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 70px;
}

.clients .images a {
  display: flex;
  align-items: center;
  height: 90px;
  padding: 0 42px;
  border-radius: 12px;
}

.clients .images a:hover {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
}

/* ======== Guides ======== */
.guides {
  margin-top: 40px;
  padding: 93px 0 79px;
}

.guides .sub-title {
  position: relative;
  font-weight: 600;
  font-size: 3.5rem;
  line-height: 1;
  text-align: center;
  color: #000339;
}

.guides .sub-title::before {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  content: "";
  display: inline-block;
  width: 41px;
  height: 4px;
  background: #000339;
  border-radius: 12px;
}

.guides .desc {
  width: 459px;
  max-width: 100%;
  margin: 20px auto 0;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.88;
  text-align: center;
  color: #5a6473;
}

.list-guide {
  display: flex;
  justify-content: center;
  margin-top: 70px;
}

.guide-item {
  margin: 0 70px;
  text-align: center;
}

.guide-item .title {
  margin-top: 26px;
  font-weight: 500;
  font-size: 2rem;
  line-height: 1.1;
  color: #3b3c45;
}

.guide-item .link {
  display: inline-block;
  margin-top: 10px;
  font-weight: 600;
  font-size: 1.4rem;
  color: #0689ff;
}

.guide-item .arrow {
  margin-left: 6px;
}

.guide-cta {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.guide-cta .btn {
  min-width: 170px;
}

/* ======== Featured ======== */
.featured {
  margin-top: 41px;
  padding: 110px 0;
  background: #f5fafe;
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

.featured .item .desc {
  margin-top: 11px;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.5;
  color: #a3a6ab;
  word-break: break-all;
}

.featured .item .info {
  display: flex;
  align-items: center;
  margin-top: 21px;
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
  margin-top: 75px;
  padding: 50px 0;
}

.stats .content {
  width: 1048px;
}

.stats .row {
  display: flex;
}

.stats .img-block,
.stats .info {
  width: 50%;
}

.stats .img-block {
  position: relative;
}

.stats .info {
  padding: 79px 0 0 165px;
}

.stats-trend {
  position: absolute;
  top: 0;
  left: 0;
  width: 239px;
  padding: 45px 22px 40px;
  border-radius: 0px 0px 12px 12px;
  background-color: #fff;
}

.stats-trend .value {
  font-weight: 700;
  font-size: 2.6rem;
  letter-spacing: 0.01em;
  color: #000339;
}

.stats-trend .icon {
  margin-left: auto;
}

.stats-trend .desc {
  margin-top: 8px;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.5;
  color: #a7a7a7;
}

.stats-trend .separate {
  height: 1.2px;
  margin-top: 25px;
  background: #e9e9e9;
}

.stats .avatar-block {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 14px;
  margin-top: 26px;
}

.stats .avatar-group {
  display: flex;
}

.stats .avatar {
  width: 16px;
  height: 16px;
  margin-left: -3px;
  object-fit: cover;
  border-radius: 50%;
  background: var(--bg-color, #fff);
  font-weight: 450;
  font-size: 0.7rem;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;
}

.stats .avatar:first-child {
  margin-left: 0;
}

.stats .img-block .image {
  display: block;
  margin-left: auto;
  width: 400px;
  height: 460px;
  border-radius: 12px;
  object-fit: cover;
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

.stats .info .desc {
  width: 309px;
  margin-top: 20px;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.88;
  color: #5a6473;
}

.stats .row-qty {
  justify-content: space-between;
  margin-top: 110px;
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

/* Subscription */
.subscription {
  margin-top: 90px;
}

.subscription .body {
  position: relative;
  display: flex;
  align-items: center;
  height: 370px;
  background: #063183;
  border-radius: 20px;
}

.subscription .info {
  width: 671px;
  padding: 0 80px;
}

.subscription .sub-title {
  font-weight: 600;
  font-size: 3.5rem;
  line-height: 1.5;
  color: #ffffff;
}

.subscription .desc {
  margin-top: 15px;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.88;
  color: #ffffff;
  opacity: 0.75;
}

.subscription .btn {
  margin-top: 20px;
  min-width: 151px;
  background: #fff;
  color: #002366;
}

.subscription .image {
  position: absolute;
  bottom: 0;
  right: 221px;
}

/* Footer */
.footer {
  margin-top: 55px;
  padding: 50px 0 58px;
}

.footer .row {
  display: flex;
}

.footer .row-top {
  column-gap: 185px;
}

.footer .heading {
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: #1c1c1d;
}

.footer .list,
.footer .desc {
  margin-top: 42px;
}

.footer .item {
  margin-top: 18px;
}

.footer .item a,
.footer .desc {
  font-weight: 400;
  font-size: 1.6rem;
  white-space: nowrap;
}

.footer .desc {
  white-space: normal;
  line-height: 1.75;
}

.footer .social {
  display: flex;
  margin-top: 40px;
}

.footer .social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 3px;
  background: #f9f9f9;
}

.footer .social-link + .social-link {
  margin-left: 16px;
}

.footer .social-link:hover {
  background: #ebebeb;
}

.footer .row-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 81px;
}

.footer .copyright {
  font-weight: 400;
  font-size: 1.4rem;
  color: #c2c2c2;
}

@media screen and (min-width: 992px) {
  .mobile-header {
    display: none;
  }

  .show-on-mobile {
    display: none;
  }
}

@media screen and (max-width: 991px) {
  .navbar {
    position: relative;
  }

  .navbar .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .navbar ul {
    display: none;
  }

  .toggle-menu svg {
    width: 24px;
    color: #666;
  }

  .menu-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transition: 0.5s ease;
  }

  .menu-drawer {
    position: fixed;
    inset: 0 40% 0 0;
    background: #fff;
    z-index: 2;
    padding: 60px;
    transform: translateX(-100%);
    transition: 0.5s ease;
  }

  .menu-drawer ul {
    margin-top: 32px;
  }

  .menu-drawer ul a {
    display: block;
    padding: 14px 0;
    color: #333;
    font-weight: 500;
  }

  .menu-checkbox:checked ~ .menu-overlay {
    opacity: 1;
    visibility: visible;
  }

  .menu-checkbox:checked ~ .menu-drawer {
    transform: translateX(0);
  }

  .separate {
    border-top: 1.5px solid #ebebeb;
  }

  .hero-img {
    display: none;
  }

  .hero-wrap .info {
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }

  .hero-wrap .desc {
    width: 80%;
    margin: 30px auto auto;
  }

  .clients .images {
    flex-wrap: wrap;
    justify-content: center;
  }

  .guide-item {
    flex: 1;
    margin: 0;
  }

  .featured .list {
    grid-template-columns: 1fr 1fr;
  }

  .stats .row {
    flex-direction: column;
  }

  .stats .img-block,
  .stats .info {
    width: 100%;
  }

  .stats .img-block {
    order: 2;
    margin-top: 80px;
  }

  .stats .info {
    order: 1;
    padding: 0;
  }

  .stats .sub-title {
    width: 70%;
  }

  .stats .info .desc {
    width: 100%;
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

  .subscription .image {
    display: none;
  }

  .footer .row-top {
    display: grid;
    grid-template-columns: 1fr 2fr;
    row-gap: 80px;
  }
}

/* Tablet */
@media screen and (min-width: 768px) and (max-width: 991px) {
  .show-on-mobile {
    display: none;
  }
}

/* Mobile */
@media screen and (max-width: 767px) {
  .hide-on-mobile {
    display: none;
  }

  .menu-drawer {
    inset: 0 25% 0 0;
    padding: 40px;
  }

  .navbar .actions {
    display: none;
  }
  .hero-wrap .title {
    margin-top: 20px;
    font-size: 5.2rem;
  }

  .hero-wrap .desc {
    width: 100%;
  }

  .clients .images {
    row-gap: 20px;
  }

  .list-guide {
    flex-direction: column;
    row-gap: 60px;
  }

  .guide-cta {
    margin-top: 60px;
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

  .stats .img-block .image {
    width: 100%;
  }

  .stats-trend {
    left: 20px;
  }

  .stats .row-qty {
    flex-direction: column;
    align-items: center;
    row-gap: 60px;
  }

  .subscription .info {
    padding: 32px;
  }

  .subscription .body {
    height: auto;
  }

  .footer .row-top {
    grid-template-columns: 1fr;
  }

  .footer .row-bottom {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 24px;
  }
}
.overflowx-hidden {
  overflow-x: hidden;
}
.h-500 {
  height: 500px;
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
</style>
