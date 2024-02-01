<script setup lang="ts">
import { getDiscordAuthToken } from '~/utils/discord/DiscordCookies'
import { getTextChannels, type DiscordChannel } from '~/utils/discord/guilds/DiscordGuildsApi'

const route = useRoute()

const channels: DiscordChannel[] = await getTextChannels(route.params.id as string, getDiscordAuthToken()!)
</script>

<template>
    <NuxtLayout>
        <h1>Add Channel: </h1>
        <ul>
            <li v-for="channel in channels" :key="channel.id">
                {{ channel.name }} - {{ channel.id }} - {{ channel.type }} - {{ channel.position }}
            </li>
        </ul>
    </NuxtLayout>
</template>
