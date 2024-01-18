export type DiscordLoginResponse = {
    accessToken: string
    accessTokenExpiresIn: number
    refreshToken: string
}

export async function getDiscordAuthToken(code: String): Promise<DiscordLoginResponse> {
    const appConfig = useAppConfig()

    const {data, error}: any = await useFetch(
        appConfig.backendUrl + 'discord/login', {
            query: {
                code
            }
        })

    if (error.value) {
        throw new ApiException("Error on Discord Login")
    }

    return {
        accessToken: data.value.access_token,
        accessTokenExpiresIn: data.value.expires_in,
        refreshToken: data.value.refresh_token
    } as DiscordLoginResponse
}

export async function refreshDiscordAuthToken(refreshToken: String): Promise<DiscordLoginResponse> {
    const appConfig = useAppConfig()

    const {data, error}: any = await useFetch(
        appConfig.backendUrl + 'discord/refresh', {
            query: {
                refreshToken
            }
        })

    if (error.value) {
        throw new ApiException("Error on Discord Login")
    }

    return {
        accessToken: data.value.access_token,
        accessTokenExpiresIn: data.value.expires_in,
        refreshToken: data.value.refresh_token
    } as DiscordLoginResponse
}