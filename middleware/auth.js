export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const authentication = localStorage.getItem("congchuc24h_token");
    if (!authentication && to.path == "/admin") {
      return navigateTo("/trang-chu");
    } else if (authentication && to.path == "/") {
      return navigateTo("/trang-chu");
    }
    return;
  }
});
