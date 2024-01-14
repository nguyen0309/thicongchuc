<script setup>
import { useUsersService } from "@/services/users";
import { useAuthService } from "@/services/auth";
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";

const showMenu = ref(false);
const user = ref({});
const loading = ref(false);
const router = useRouter();
const route = useRoute();
const open = ref(false);

const hoverShowMenu = () => {
  showMenu.value = true;
};
const hideMenu = () => {
  setTimeout(() => {
    showMenu.value = false;
  }, 1000);
};
const getUser = async () => {
  try {
    loading.value = true;
    const res = await useUsersService().get();
    if (res) {
      user.value = res;
      if (route.name.includes("admin") && user.value.role != "admin") router.push("/trang-chu");
    }
    loading.value = false;
  } catch (e) {
    console.log(e);
  }
};
const logout = async () => {
  try {
    await useAuthService().logout();
    router.push("/");
  } catch (e) {
    console.log(e);
  }
};
onMounted(() => {
  if (process.client && localStorage.getItem("congchuc24h_token")) getUser();
});
</script>
<template>
  <div v-if="loading" class="h-full flex items-center justify-center"><div class="loader"></div></div>
  <div v-else class="relative h-screen">
    <div @click="open = true" class="icon-zalo">
      <img class="w-full h-full" src="@/assets/img/zalo.svg" alt="" />
    </div>
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
            <div class="logo"><img class="w-full h-full" src="@/assets/img/logo.png" alt="" /></div>
          </a>
          <ul id="pc-nav">
            <li><a class="title" href="/trang-chu">Trang chủ</a></li>
            <li class="relative" @mouseleave="hideMenu">
              <a class="title" @mouseover="hoverShowMenu">Thi kiến thức chung</a>
              <div class="block-menu flex flex-col" v-if="showMenu">
                <a href="/bao-hiem-xa-hoi" class="p-4 cursor-pointer menu-title">Bảo hiểm xã hội</a>
                <a href="/hai-quan" class="p-4 cursor-pointer menu-title">Hải quan</a>
                <a href="/kho-bac-nha-nuoc" class="p-4 cursor-pointer menu-title">Kho bạc nhà nước</a>
                <a href="/ngan-hang-nha-nuoc" class="p-4 cursor-pointer menu-title">Ngân hàng nhà nước</a>
                <a href="/thong-ke" class="p-4 cursor-pointer menu-title">Thống kê</a>
                <a href="/thue" class="p-4 cursor-pointer menu-title">Thuế</a>
                <a href="/tieng-anh" class="p-4 cursor-pointer menu-title">Tiếng anh</a>
              </div>
            </li>
            <li><a class="title" href="tai-lieu">Tài liệu ôn thi</a></li>
            <li><a class="title" href="tin-tuc">Tin tức</a></li>
            <li><a class="title" href="thong-ke-thong-tin">Thống kê</a></li>
            <li><a class="title" href="thi-thu">Vào thi thử</a></li>
          </ul>
          <div class="user-name" v-if="Object.keys(user).length > 0 && user.name">
            Xin chào, {{ user.name }}!<span v-if="user.role == 'admin'"><a href="admin" class="cursor-pointer text-yellow">[Quản lý]</a></span
            ><span class="cursor-pointer text-blue" @click="logout">[Đăng xuất]</span>
          </div>
          <div v-else class="actions">
            <a href="dang-ky" class="action-link">Đăng ký</a>
            <a href="dang-nhap" class="btn action-btn">Đăng nhập</a>
          </div>
        </nav>
      </div>
    </header>
    <header class="mobile-header">
      <input type="checkbox" name="" id="menu-checkbox" class="menu-checkbox" hidden />
      <label for="menu-checkbox" class="menu-overlay"></label>
      <div class="menu-drawer">
        <a href="trang-chu">
          <div class="flex items-center gap-2">
            <div class="logo"><img class="w-auto h-full" src="@/assets/img/logo.png" alt="" /></div>
            <div class="fs-20 fw-500">Thicongchuc24h</div>
          </div>
        </a>
        <ul id="mobile-nav">
          <li><a class="title" href="/trang-chu">Trang chủ</a></li>
          <li class="relative" @mouseover="hoverShowMenu" @mouseleave="hideMenu">
            <a class="title">Thi kiến thức chung</a>
            <div class="block-menu flex flex-col" v-if="showMenu">
              <a href="/bao-hiem-xa-hoi" class="p-4 cursor-pointer menu-title">Bảo hiểm xã hội</a>
              <a href="/hai-quan" class="p-4 cursor-pointer menu-title">Hải quan</a>
              <a href="/kho-bac-nha-nuoc" class="p-4 cursor-pointer menu-title">Kho bạc nhà nước</a>
              <a href="/ngan-hang-nha-nuoc" class="p-4 cursor-pointer menu-title">Ngân hàng nhà nước</a>
              <a href="/thong-ke" class="p-4 cursor-pointer menu-title">Thống kê</a>
              <a href="/thue" class="p-4 cursor-pointer menu-title">Thuế</a>
              <a href="/tieng-anh" class="p-4 cursor-pointer menu-title">Tiếng anh</a>
            </div>
          </li>
          <li><a class="title" href="tai-lieu">Tài liệu</a></li>
          <li><a class="title" href="tin-tuc">Tin tức</a></li>
          <li><a class="title" href="thong-ke-thong-tin">Thống kê</a></li>
          <li><a class="title" href="thi-thu">Vào thi thử</a></li>
          <div v-if="Object.keys(user).length > 0 && user.name">
            <div class="user-name separate py-6">Xin chào, {{ user.name }}!</div>
            <li v-if="user.role == 'admin'"><a href="admin" class="title">Quản lý</a></li>
            <div class="cursor-pointer py-6" @click="logout">Đăng xuất</div>
          </div>
          <div v-else>
            <li><a class="title" href="dang-ky">Đăng ký</a></li>
            <li><a class="title" href="dang-nhap">Đăng nhập</a></li>
          </div>
        </ul>
      </div>
    </header>
    <main class="h-content">
      <slot />
    </main>
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
                <div class="mb-4 fs-16">Liên hệ tới zalo: <span class="text-yellow underline"> 0844311767</span></div>
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
  </div>
</template>
<style lang="scss" scoped>
.contact-zalo {
  width: 300px;
}
.content {
  width: 100%;
  padding: 0 50px 0 50px;
  margin-left: auto;
  margin-right: auto;
}
.h-content {
  height: calc(100% - 65px);
  overflow-y: auto;
  background: #fff;
}

.btn {
  display: inline-block;
  min-width: 98px;
  padding: 18px 16px;
  background: #ff9100;
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
  background: #fff7f0;
  padding-top: 1px;
  position: sticky;
  top: -1px;
  z-index: 1;
}

.navbar {
  display: flex;
  align-items: center;
  padding: 12px 0;
  height: 64px;
}

.logo {
  height: 64px;
  width: auto;
}
.navbar ul {
  display: flex;
}

.navbar .actions {
  margin-left: auto;
}
.navbar .user-name {
  margin-left: auto;
}

.title {
  padding: 24px 12px;
}
.menu-title {
  z-index: 11;
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

.icon-zalo {
  width: 64px;
  height: 64px;
  position: fixed;
  right: 30px;
  bottom: 60px;
  z-index: 5;
  cursor: pointer;
}

.icon-facebook {
  width: 64px;
  height: 64px;
  position: fixed;
  right: 30px;
  bottom: 100px;
  z-index: 5;
  cursor: pointer;
}
.block-menu {
  position: absolute;
  height: max-content;
  // border-radius: 6px;
  background: var(--white, #fff);
  width: 185px;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  top: 40px;
  z-index: 100;
  transition: 0.5s ease;
} /* Tablet */
@media screen and (min-width: 1151px) {
  .mobile-header {
    display: none;
  }

  .show-on-mobile {
    display: none;
  }
}

@media screen and (max-width: 1150px) {
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
    width: 300px;
    background: #fff;
    z-index: 11;
    padding: 40px;
    transform: translateX(-100%);
    transition: 0.5s ease;
    height: 100vh;
    top: 0;
    padding-right: 0;
  }
  .block-menu {
    z-index: 100;
    top: 0;
    left: 260px;
  }
  .menu-drawer ul {
    margin-top: 12px;
  }

  .title {
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

  .footer .row-top {
    display: grid;
    grid-template-columns: 1fr 2fr;
    row-gap: 80px;
  }
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  .show-on-mobile {
    display: none;
  }
  .block-menu {
    top: 0;
    left: 260px;
  }
}

/* Mobile */
@media screen and (max-width: 767px) {
  .navbar .actions {
    display: none;
  }

  .footer .row-top {
    grid-template-columns: 1fr;
  }

  .footer .row-bottom {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 24px;
  }
  .block-menu {
    top: 0;
    left: 260px;
  }
}
@media screen and (max-width: 480px) {
  .navbar .user-name {
    display: none;
  }
}

.menu-title:hover {
  font-weight: 700;
}
</style>
