export type DiscordGuild = {
    id: string
    name: string
    icon: string
    owner: boolean
    permissions: number
    botIsPresent: boolean
}

export async function getDiscordGuildsAdmin(accessToken: string): Promise<DiscordGuild[]> {
    const { t } = useI18n()
    try{
        const appConfig = useAppConfig()
        
        const {data, error}: any = await useFetch(
        appConfig.backendUrl + 'discord/guilds/admin', {
            headers: {
                accessToken
            }
        })
        
        if (error.value) {
            throw new ApiException(t('discord.api.error.get-guilds'))
        }
        
        return data.value as DiscordGuild[]
    } catch (e) {
        console.error(e)
        throw new ApiException(t('discord.api.error.get-guilds'))
    }
    
}