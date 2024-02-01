/* eslint-disable consistent-return */
/* eslint-disable unused-imports/no-unused-vars */

import { hasDiscordAuthToken } from '~/utils/discord/DiscordCookies'

export default defineNuxtRouteMiddleware((to, from) => {
    if (!hasDiscordAuthToken()) {
        return navigateTo('/login')
    }
})
