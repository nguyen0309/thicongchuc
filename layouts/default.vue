<script setup>
const showMenu = ref(false);

const hoverShowMenu = () => {
  showMenu.value = true;
};
const hideMenu = () => {
  setTimeout(() => {
    showMenu.value = false;
  }, 1000);
};
</script>
<template>
  <div class="relative">
    <a href="tel:0705908789" class="icon-zalo">
      <img class="w-full h-full" src="@/assets/img/zalo.svg" alt="" />
    </a>
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
            <li><a class="title" href="/trang-chu">Trang chủ</a></li>
            <li class="relative" @mouseleave="hideMenu">
              <a class="title" @mouseover="hoverShowMenu">Thi</a>
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
            <!-- <li><a class="title" href="tai-lieu">Tài liệu</a></li> -->
            <!-- <li><a class="title" href="gioi-thieu">Giới thiệu</a></li> -->
            <li class="show-on-mobile separate">
              <a class="title" href="dang-ky">Đăng ký</a>
            </li>
            <li class="show-on-mobile"><a class="title" href="dang-nhap">Đăng nhập</a></li>
          </ul>
          <div class="actions">
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
          <!-- <div class="fs-36 leading-8 text-black-700 fw-800">Thicongchuc24h</div> -->
        </a>
        <ul id="mobile-nav">
          <li><a class="title" href="/trang-chu">Trang chủ</a></li>
          <li class="relative" @mouseover="hoverShowMenu" @mouseleave="hideMenu">
            <a class="title">Thi</a>
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
          <!-- <li><a class="title" href="tai-lieu">Tài liệu</a></li> -->
          <!-- <li><a class="title" href="gioi-thieu">Giới thiệu</a></li> -->
          <li><a class="title" href="dang-ky">Đăng ký</a></li>
          <li><a class="title" href="dang-nhap">Đăng nhập</a></li>
        </ul>
      </div>
    </header>
    <main class="h-content">
      <slot />
    </main>
  </div>
</template>
<style lang="scss" scoped>
.content {
  width: 100%;
  padding: 0 50px 0 50px;
  margin-left: auto;
  margin-right: auto;
}
.h-content {
  height: calc(100vh - 66px);
  overflow-y: auto;
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

.title {
  padding: 24px 12px;
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
  transition: 0.5s ease;
} /* Tablet */
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
    width: 300px;
    background: #fff;
    z-index: 2;
    padding: 40px;
    transform: translateX(-100%);
    transition: 0.5s ease;
    height: 100vh;
    top: 0;
    padding-right: 0;
  }
  .block-menu {
    top: 0;
    left: 260px;
  }
  .menu-drawer ul {
    margin-top: 32px;
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
.menu-title:hover {
  font-weight: 700;
}
</style>
