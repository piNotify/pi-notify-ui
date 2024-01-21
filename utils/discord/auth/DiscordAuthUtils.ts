import { getDiscordAuthToken, type DiscordLoginResponse, refreshDiscordAuthToken } from "./DiscordAuthApi";
import { getDiscordRefreshToken, hasDiscordRefreshToken, setDiscordCookies } from "../DiscordCookies";

export async function discordLogin(code: String){
    const { t } = useI18n()
    try{
        const discordLoginResponse: DiscordLoginResponse = await getDiscordAuthToken(code)
        
        setDiscordCookies(
            discordLoginResponse.accessToken,
            discordLoginResponse.accessTokenExpiresIn,
            discordLoginResponse.refreshToken
        )
    } catch (e) {
        console.error(e)
        throw new ApiException(t('discord.api.error.login'))
    }
}

export async function refreshDiscordToken(){
    const { t } = useI18n()
    try{
        if(!hasDiscordRefreshToken()){
            return
        }

        const discordLoginResponse: DiscordLoginResponse = await refreshDiscordAuthToken(getDiscordRefreshToken() as string)
        
        setDiscordCookies(
            discordLoginResponse.accessToken,
            discordLoginResponse.accessTokenExpiresIn,
            discordLoginResponse.refreshToken
        )
    } catch (e) {
        console.error(e)
        throw new ApiException(t('discord.api.error.login'))
    }
}