export type DiscordChannel = {
    id: string
    channelId: string
    name: string
    url: string
}

export type DiscordSubscription = {
    id: string
    channelId: string
    guildId: string
    textChannelId: boolean
    messageTemplate: number
    channel: DiscordChannel
}

export type AddDiscordSubscription = {
    url: string
    textChannelId: string
    messageTemplate: string
}

export async function getDiscordGuildSubscriptions(guildId: string, accessToken: string): Promise<DiscordSubscription[]> {
    const { t } = useI18n()
    try {
        const appConfig = useAppConfig()
        const { data }: any = await useFetch(`${appConfig.backendUrl}/discord/guild/${guildId}/subscriptions`, {
            headers: { accessToken },
        })

        return data.value as DiscordSubscription[]
    } catch (e) {
        console.error(e)
        throw new ApiException(t('discord.api.error.get-guilds'))
    }
}
