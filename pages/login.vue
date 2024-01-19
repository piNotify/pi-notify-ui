<script setup lang="ts">
import { hasDiscordRefreshToken, hasDiscordAuthToken } from '@/utils/discord/DiscordCookies';
import { refreshDiscordToken } from '@/utils/discord/auth/DiscordAuthUtils';

const apiError = ref({
    error: false,
    message: ''
})

async function refreshTokenAndLogin() {
    if(hasDiscordRefreshToken()) {
        await refreshDiscordToken()
    }
    
    if(hasDiscordAuthToken()) {
        navigateTo('/dashboard')
        return
    }
    
    const appConfig = useAppConfig();
    navigateTo(appConfig.discordLoginUrl, { external: true })
}

try{
    await refreshTokenAndLogin()
} catch (e) {
    apiError.value = {
        error: true,
        message: (e as Error).message
    }
}
</script>

<template>
    <div>
        <div v-if="apiError.error">
            <span>{{ apiError.message }}</span>
        </div>
        <div v-else>
            <span>Redirecting...</span>
        </div>
    </div>
</template>