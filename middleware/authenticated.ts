export default defineNuxtRouteMiddleware((to, from) => {
    const appConfig = useAppConfig()
    const cookie = useCookie(appConfig.discordAccessTokenCookieName)
    
    if (!cookie.value) {
        return navigateTo('/login')
    }
})