<script setup lang="ts">
import { hasDiscordRefreshToken, hasDiscordAuthToken } from '@/utils/discord/DiscordCookies'
import { refreshDiscordToken } from '@/utils/discord/auth/DiscordAuthUtils'

const { t } = useI18n({ useScope: 'local' })

const apiError = ref({
    error: false,
    message: '',
})

async function refreshTokenAndLogin(): Promise<void> {
    if (hasDiscordRefreshToken()) {
        await refreshDiscordToken()
    }

    if (hasDiscordAuthToken()) {
        navigateTo('/dashboard')
        return
    }

    const appConfig = useAppConfig()
    navigateTo(appConfig.discordLoginUrl, { external: true })
}

try {
    await refreshTokenAndLogin()
} catch (e) {
    apiError.value = {
        error: true,
        message: (e as Error).message,
    }
}
</script>

<template>
    <div>
        <div v-if="apiError.error">
            <span>{{ apiError.message }}</span>
        </div>
        <div v-else>
            <span>{{ t('redirecting') }}</span>
        </div>
    </div>
</template>

<i18n lang="json">
    {
        "en-US": {
            "redirecting": "Redirecting..."
        },
        "pt-BR": {
            "redirecting": "Redirecionando..."
        }
    }
</i18n>
