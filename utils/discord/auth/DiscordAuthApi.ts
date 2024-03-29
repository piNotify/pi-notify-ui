import ApiException from '~/utils/BackendApi'

export interface DiscordLoginResponse {
    accessToken: string
    accessTokenExpiresIn: number
    refreshToken: string
}

export async function getDiscordAuthToken(code: String): Promise<DiscordLoginResponse> {
    const { t } = useI18n()
    const appConfig = useAppConfig()

    const { data, error }: any = await useFetch(
        `${appConfig.backendUrl}discord/auth/login`, {
            query: {
                code,
            },
        },
    )

    if (error.value) {
        throw new ApiException(t('discord.api.error.login'))
    }

    return {
        accessToken: data.value.access_token,
        accessTokenExpiresIn: data.value.expires_in,
        refreshToken: data.value.refresh_token,
    } as DiscordLoginResponse
}

export async function refreshDiscordAuthToken(refreshToken: String): Promise<DiscordLoginResponse> {
    const { t } = useI18n()
    const appConfig = useAppConfig()

    const { data, error }: any = await useFetch(
        `${appConfig.backendUrl}discord/auth/refresh`, {
            query: {
                refreshToken,
            },
        },
    )

    if (error.value) {
        throw new ApiException(t('discord.api.error.login'))
    }

    return {
        accessToken: data.value.access_token,
        accessTokenExpiresIn: data.value.expires_in,
        refreshToken: data.value.refresh_token,
    } as DiscordLoginResponse
}
