export default defineNuxtRouteMiddleware((to, from) => {
    console.log("🚀 ~ defineNuxtRouteMiddleware ~ from:", from)
    console.log("🚀 ~ defineNuxtRouteMiddleware ~ to:", to)
    const isAdmin = false; 

    if(!isAdmin) {
        return navigateTo('/login')
    }
})