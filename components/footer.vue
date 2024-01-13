<script setup>
import config from "@/config";
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";
const open = ref(false);
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
              <a class="text-black-700 fw-700" href="https://www.facebook.com/hoccungcs?locale=vi_VN">Fanpage hỗ trợ</a>
            </li>
            <li class="item flex items-center gap-2">
              <img class="w-8 h-8" src="@/assets/img/zalo.svg" alt="" />
              <a class="text-black-700 cursor-pointer" @click="open = true">{{ config.phone }}</a>
            </li>
          </ul>
        </div>
        <div class="column">
          <h3 class="heading">Liên hệ</h3>
          <ul class="list">
            <li class="flex items-center gap-2">
              <img class="w-8 h-8" src="@/assets/img/telephone.png" alt="" />
              <a class="text-black-700" :href="`tel:${config.phone}`">{{ config.phone }}</a>
            </li>
            <li class="item flex items-center gap-2">
              <img class="w-8 h-8" src="@/assets/img/mail.png" alt="" />
              <a class="text-black-700" href="`mailto::${config.mail}`">{{ config.mail }}</a>
            </li>
          </ul>
        </div>
        <div class="column">
          <h3 class="heading">Tài khoản ngân hàng</h3>
          <ul class="list">
            <div class="about-us text-black-700 text-justify">STK: 1012955333</div>
            <div class="about-us text-black-700 text-justify item">Ngần hàng: Vietcombank</div>
          </ul>
        </div>
        <div class="column">
          <h3 class="heading">Về chúng tôi</h3>
          <div class="list about-us text-black-700 text-justify">
            Website ôn thi Công chức, viên chức với người tài liệu phong phú với bề dày kinh nghiệm chúng tôi cam kết sẽ mang đến những trải nghiệm
            chất lượng, giúp bạn sớm chinh phục kỳ thi mà bạn hằng mong muốn.
          </div>
        </div>
      </div>
      <div class="row row-bottom">
        <div class="fs-36 leading-8 text-black-700 fw-800">Thicongchuc24h</div>
        <p class="copyright">Copyright 2023.com, All rights reserved.</p>
      </div>
    </div>
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
              <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white p-8 text-left shadow-xl transition-all mw-640">
                <div class="flex items-center justify-center"><img class="mb-3 mt-3 contact-zalo" src="@/assets/img/contact-zalo.jpg" alt="" /></div>
                <div class="flex justify-end">
                  <div class="cursor-pointer" @click="open = false">Thoát</div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </footer>
</template>
<style scoped>
.contact-zalo {
  width: 300px;
}
.footer {
  margin-top: 55px;
  padding: 50px 48px 58px;
}
.about-us {
  max-width: 300px;
}
.footer .row {
  display: flex;
}

.footer .row-top {
  justify-content: space-between;
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
