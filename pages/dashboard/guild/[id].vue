<script setup lang="ts">
import { getDiscordGuild, type DiscordGuild } from '@/utils/discord/guilds/DiscordGuildsApi';
import { getDiscordAuthToken } from '@/utils/discord/DiscordCookies';
const { t } = useI18n({useScope: 'local'})

const route = useRoute()
const discordGuild: DiscordGuild = await getDiscordGuild(route.params.id as string, getDiscordAuthToken()!)
</script>

<template>
    <NuxtLayout>
        <div class="container">
            <h3 class="text-center">{{discordGuild.name}}</h3>
            <NuxtLink :to="`dashboard/guild/${discordGuild.id}/channel/add`" class="btn btn-primary">{{t('add-channel')}}</NuxtLink>
            <div :class="$style.channels">
            </div>
        </div>
    </NuxtLayout>
</template>

<style module>
.channels{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 20px;
}
</style>

<i18n lang="json">
{
    "en-US": {
        "add-channel": "Add Channel"
    },
    "pt-BR": {
        "add-channel": "Adicionar Canal"
    }
}
</i18n>