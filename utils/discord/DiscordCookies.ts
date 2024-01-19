export function hasDiscordAuthToken() {
    const appConfig = useAppConfig()
    const cookie = useCookie(appConfig.discordAccessTokenCookieName)
    return !!cookie.value
}

export function hasDiscordRefreshToken() {
    const appConfig = useAppConfig()
    const cookie = useCookie(appConfig.discordRefreshTokenCookieName)
    return !!cookie.value
}

export function setDiscordCookies(accessToken: string, accessTokenMaxAge: number, refreshToken: string) {
    const appConfig = useAppConfig()
   
    const accessTokenCookie = useCookie(appConfig.discordAccessTokenCookieName, {
        maxAge: accessTokenMaxAge
    })

    accessTokenCookie.value = accessToken

    const refreshTokenCookie = useCookie(appConfig.discordRefreshTokenCookieName, {
        maxAge: appConfig.discordRefreshTokenCookieMaxAge
    })
    
    refreshTokenCookie.value = refreshToken
}

export function getDiscordAuthToken(){
    const appConfig = useAppConfig()
    const cookie = useCookie(appConfig.discordAccessTokenCookieName)
    return cookie.value
}

export function getDiscordRefreshToken(){
    const appConfig = useAppConfig()
    const cookie = useCookie(appConfig.discordRefreshTokenCookieName)
    return cookie.value
}