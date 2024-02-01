import type { DiscordChannel } from './DiscordChannel'
import type { DiscordGuild } from './DiscordGuild'
import GuildNotAdminException from './GuildNotAdminException'
import GuildNotPresentException from './GuildNotPresentException'

export async function getDiscordGuildsAdmin(accessToken: string): Promise<DiscordGuild[]> {
    const { t } = useI18n()
    try {
        const appConfig = useAppConfig()

        const { data, error }: any = await useFetch(`${appConfig.backendUrl}discord/guilds/admin`, {
            headers: { accessToken },
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

export async function getDiscordGuild(guildId: string, accessToken: string): Promise<DiscordGuild> {
    const { t } = useI18n()
    try {
        const appConfig = useAppConfig()

        const { data, error }: any = await useFetch(
            `${appConfig.backendUrl}discord/guild/${guildId}`, {
                headers: {
                    accessToken,
                },
            },
        )

        if (error.value) {
            throw new ApiException(t('discord.api.error.get-guild'))
        }

        if (data.value.error) {
            if (data.value.error_code === 'guild-not-admin') {
                throw new GuildNotAdminException()
            }

            if (data.value.error_code === 'guild-not-present') {
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

export async function getTextChannels(guildId: string, accessToken: string): Promise<DiscordChannel[]> {
    try {
        const appConfig = useAppConfig()
        const { data }: any = await useFetch(`${appConfig.backendUrl}discord/guild/${guildId}/channels`, {
            headers: { accessToken },
        })

        return data.value as DiscordChannel[]
    } catch (e) {
        console.error(e)
        throw new ApiException(t('discord.api.error.get-guild'))
    }
}
