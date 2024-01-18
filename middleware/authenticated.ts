import { hasDiscordAuthToken } from "~/utils/discord/DiscordCookies"

export default defineNuxtRouteMiddleware((to, from) => {
    if (!hasDiscordAuthToken()) {
        return navigateTo('/login')
    }
})