import { getDiscordAuthToken, type DiscordLoginResponse, refreshDiscordAuthToken } from "./DiscordApi";
import { getDiscordRefreshToken, hasDiscordRefreshToken, setDiscordCookies } from "./DiscordCookies";

export async function discordLogin(code: String){
    try{
        const discordLoginResponse: DiscordLoginResponse = await getDiscordAuthToken(code)
        console.log("discordLogin.discordLoginResponse", discordLoginResponse)
        
        setDiscordCookies(
            discordLoginResponse.accessToken,
            discordLoginResponse.accessTokenExpiresIn,
            discordLoginResponse.refreshToken
        )
    } catch (e) {
        console.error(e)
        throw new ApiException("Error on Discord Login")
    }
}

export async function refreshDiscordToken(){
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
        throw new ApiException("Error on Discord Login")
    }
}