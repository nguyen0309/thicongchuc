export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const authentication = localStorage.getItem("congchuc24h_token");
    if (!authentication && to.path == "/admin") {
      return navigateTo("/");
    } else if (authentication && to.path == "/") {
      return navigateTo("/");
    }
    return;
  }
});
