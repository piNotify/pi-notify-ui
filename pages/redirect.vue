<script setup lang="ts">
import { discordLogin } from '@/utils/discord/auth/DiscordAuthUtils'

const route = useRoute()
const apiError = ref({
    error: false,
    message: ''
})

async function login() {
    await discordLogin(route.query.code as string)
    
    if(route.query.guild_id) {
        navigateTo(`/dashboard/guild/${route.query.guild_id}`)
        return
    }
    
    navigateTo('/dashboard')
}

try{
    await login()
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