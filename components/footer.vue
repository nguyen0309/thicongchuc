<script setup>
import config from "@/config";
</script>
<template>
  <footer class="footer">
    <div class="content">
      <div class="row row-top">
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
              <a class="text-black-700" :href="`tel:${config.phone}`">(+84) {{ config.phone }} (24/7)</a>
            </li>
            <li class="item flex items-center gap-2">
              <img class="w-8 h-8" src="@/assets/img/mail.png" alt="" />
              <a class="text-black-700" href="mailto::trungnguyen030999@gmail.com">test123@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row row-bottom">
        <div class="fs-36 leading-8 text-black-700 fw-800">Thicongchuc24h</div>
        <p class="copyright">Copyright 2023.com, All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
<style scoped>
.footer {
  margin-top: 55px;
  padding: 50px 48px 58px;
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

.footer .item a {
  font-weight: 400;
  font-size: 1.6rem;
  white-space: nowrap;
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

@media screen and (max-width: 991px) {
  .footer .row-top {
    display: grid;
    grid-template-columns: 1fr 2fr;
    row-gap: 80px;
  }
}

/* Mobile */
@media screen and (max-width: 767px) {
  .footer .row-top {
    grid-template-columns: 1fr;
  }

  .footer .row-bottom {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 24px;
  }
}
</style>
