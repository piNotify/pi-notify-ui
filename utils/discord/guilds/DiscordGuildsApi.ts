export type DiscordGuild = {
    id: string
    name: string
    icon: string
    owner: boolean
    permissions: number
    botIsPresent: boolean
}

export class GuildNotAdminException extends Error {}
export class GuildNotPresentException extends Error {}

export async function getDiscordGuildsAdmin(accessToken: string): Promise<DiscordGuild[]> {
    const { t } = useI18n()
    try{
        const appConfig = useAppConfig()
        
        const {data, error}: any = await useFetch(
            appConfig.backendUrl + 'discord/guilds/admin', {
                headers: {
                    accessToken
                }
            }
        )
        
        if (error.value) {
            throw new ApiException(t('discord.api.error.get-guilds'))
        }
        
        return data.value as DiscordGuild[]
    } catch (e) {
        console.error(e)
        throw new ApiException(t('discord.api.error.get-guilds'))
    }
    
}

export async function getDiscordGuild(guildId: string, accessToken: string): Promise<DiscordGuild> {
    const { t } = useI18n()
    try{
        const appConfig = useAppConfig()
        
        const {data, error}: any = await useFetch(
        appConfig.backendUrl + 'discord/guild/' + guildId, {
            headers: {
                accessToken
            }
        })
        
        if (error.value) {
            throw new ApiException(t('discord.api.error.get-guild'))
        }

        if(data.value.error) {
            if(data.value.error_code === 'guild-not-admin') {
                throw new GuildNotAdminException()
            }

            if(data.value.error_code === 'guild-not-present') {
                throw new GuildNotPresentException()
            }

            throw new ApiException(t('discord.api.error.get-guild'))
        }
        
        return data.value as DiscordGuild
    } catch (e) {
        console.error(e)
        throw new ApiException(t('discord.api.error.get-guild'))
    }
}