<script setup lang="ts">
import { getDiscordAuthToken } from '@/utils/discord/DiscordCookies';
import { getDiscordGuildsAdmin, type DiscordGuild } from '@/utils/discord/guilds/DiscordGuildsApi';

const discordGuilds: DiscordGuild[] = await getDiscordGuildsAdmin(getDiscordAuthToken()!)
</script>

<template>
    <NuxtLayout>
        <p>Dashboard Page</p>
        <div v-for="guild in discordGuilds" :key="guild.id" :class="$style.spacing">
            <p>{{ guild.id }}</p>
            <p>{{ guild.name }}</p>
            <p>{{ guild.botIsPresent }}</p>
        </div>
    </NuxtLayout>
</template>

<style module>
.spacing {
    margin-bottom: 25px;
}
</style>