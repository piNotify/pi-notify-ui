<script setup lang="ts">
import { getDiscordGuild, type DiscordGuild } from '@/utils/discord/guilds/DiscordGuildsApi';
import { getDiscordAuthToken } from '@/utils/discord/DiscordCookies';

const route = useRoute()
const discordGuild: DiscordGuild = await getDiscordGuild(route.params.id as string, getDiscordAuthToken()!)
</script>

<template>
    <span>Guild {{ route.params.id }}</span>
    <span>name {{ discordGuild.name }}</span>
</template>