<script setup lang="ts">
const route = useRoute()
const appConfig = useAppConfig()
const code = route.query.code

const apiError = useState("apiError", () => ({
    error: false,
    message: ''
}))

console.log("redirect")
async function discordLogin() {
    const {data, error}: any = await useFetch(
        appConfig.backendUrl + 'discord/login', {
            query: {
                code
            }
        })

    console.log({
        data: data.value,
        error: error.value
    })
    
    if (error.value) {
        apiError.value = {
            error: true,
            message: error.data?.message || 'Error on Discord Login'
        }
        return
    }

    console.log("apiError", apiError)
        
    const accessToken = useCookie(appConfig.discordAccessTokenCookieName, {
        maxAge: data.value.expires_in
    })

    accessToken.value = data.value.access_token

    const refreshToken = useCookie(appConfig.discordRefreshTokenCookieName)
    refreshToken.value = data.value.refresh_token


    navigateTo(`/dashboard/guild/${route.query.guild_id}`)
}

await discordLogin()
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