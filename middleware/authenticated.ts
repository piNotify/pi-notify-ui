export default defineNuxtRouteMiddleware(() => {
    const cookie = useCookie('auth')

    if (!cookie.value) {
        return redirectTo('/login')
    }
})