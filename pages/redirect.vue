<script setup lang="ts">
const route = useRoute()
const appConfig = useAppConfig()
const code = route.query.code

await callOnce(async () => {
    const discordAuth: any = await $fetch(
        appConfig.backendUrl + 'discord/login', {
            query: {
                code
            }
        })
        
    const accessToken = useCookie(appConfig.discordAccessTokenCookieName, {
        maxAge: discordAuth.expires_in
    })

    accessToken.value = discordAuth.access_token

    const refreshToken = useCookie(appConfig.discordRefreshTokenCookieName)
    refreshToken.value = discordAuth.refresh_token


    navigateTo('/dashboard')
})
</script>

<template>
    <span>Carregando...</span>
</template>