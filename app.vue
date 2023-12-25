<script setup>
useServerSeoMeta({
  title: "AutoXALE",
  ogTitle: "AutoXALE",
  description: "Get latest car prices and deals with exclusive buying advices in Sydney. We help you to find your next car easily on AutoXALE",
  ogDescription: "Get latest car prices and deals with exclusive buying advices in Sydney. We help you to find your next car easily on AutoXALE",
  ogImage:
    "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/f5/4b/0d/f54b0d3a-6bc4-380f-4260-6002f32ec9b5/AppIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
  twitterCard: "summary_large_image",
  twitterTitle: () => "AutoXALE",
  twitterDescription: () =>
    "Get latest car prices and deals with exclusive buying advices in Sydney. We help you to find your next car easily on AutoXALE",
  twitterImage: () =>
    "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/f5/4b/0d/f54b0d3a-6bc4-380f-4260-6002f32ec9b5/AppIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
});
</script>

<template>
  <div class="app">
    <Html>
      <Head>
        <Title>Thi Công Chức</Title>
      </Head>
      <Body>
        <NuxtPage />
      </Body>
    </Html>
  </div>
</template>
