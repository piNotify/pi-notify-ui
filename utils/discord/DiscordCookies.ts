export function hasDiscordAuthToken(): boolean {
    const appConfig = useAppConfig()
    const cookie = useCookie(appConfig.discordAccessTokenCookieName)
    return !!cookie.value
}

export function hasDiscordRefreshToken(): boolean {
    const appConfig = useAppConfig()
    const cookie = useCookie(appConfig.discordRefreshTokenCookieName)
    return !!cookie.value
}

export function setDiscordCookies(accessToken: string, accessTokenMaxAge: number, refreshToken: string): void {
    const appConfig = useAppConfig()

    const accessTokenCookie = useCookie(appConfig.discordAccessTokenCookieName, {
        maxAge: accessTokenMaxAge,
    })

    accessTokenCookie.value = accessToken

    const refreshTokenCookie = useCookie(appConfig.discordRefreshTokenCookieName, {
        maxAge: appConfig.discordRefreshTokenCookieMaxAge,
    })

    refreshTokenCookie.value = refreshToken
}

export function getDiscordAuthToken(): string | null | undefined {
    const appConfig = useAppConfig()
    const cookie = useCookie(appConfig.discordAccessTokenCookieName)
    return cookie.value
}

export function getDiscordRefreshToken(): string | null | undefined {
    const appConfig = useAppConfig()
    const cookie = useCookie(appConfig.discordRefreshTokenCookieName)
    return cookie.value
}
