<script setup>
useServerSeoMeta({
  title: "Thi Công Chức 24h",
  ogTitle: "Thi Công Chức 24h",
  description:
    "Thi công chức 24h cung cấp tài liệu, thi thử, viên chức ngành dọc của Tổng cục Thuế, Kho bạc Nhà nước, Tổng cục Hải quan, Tổng cục Thống kê,... chất lượng hàng đầu Viêt Nam",
  ogDescription:
    "Thi công chức 24h cung cấp tài liệu, thi thử, viên chức ngành dọc của Tổng cục Thuế, Kho bạc Nhà nước, Tổng cục Hải quan, Tổng cục Thống kê,... chất lượng hàng đầu Viêt Nam",
  keyword: "Thi công chức, Công chức, Viên chức, Ôn thi, Thi công chức 24h",
  ogImage: "http://api-dev.thicongchuc24h.com/static/files-1705157852717-288670294logo.png",
});
if (process.client) {
  // document.addEventListener("keydown", function (e) {
  //   if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
  //     alert("Developer tools are disabled on this website.");
  //     e.preventDefault();
  //   }
  // });
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
}
</script>

<template>
  <div class="app h-screen">
    <Html>
      <Head>
        <Title>Thi Công Chức 24h</Title>
      </Head>
      <Body>
        <NuxtPage />
      </Body>
    </Html>
  </div>
</template>
