<script setup lang="ts">
import { getDiscordAuthToken } from '@/utils/discord/DiscordCookies';
import { getDiscordGuildsAdmin, type DiscordGuild } from '@/utils/discord/guilds/DiscordGuildsApi';
const { t } = useI18n({useScope: 'local'})

const discordGuilds: DiscordGuild[] = await getDiscordGuildsAdmin(getDiscordAuthToken()!)

function addToServer(){
    const appConfig = useAppConfig()
    navigateTo(appConfig.discordAddToServerUrl, { external: true  })
}
</script>

<template>
    <NuxtLayout>
        <p>Dashboard Page</p>
        <div :class="$style.servers">
            <div v-for="guild in discordGuilds" :key="guild.id" class="card card-default">
                <div class="card-body d-flex flex-col">
                    <div class="col" :class="$style.serverImage">
                        <img v-if="guild.icon" :src="`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=128`" alt="guild icon" />
                    </div>
                    <div class="col">
                        <h2>{{ guild.name }}</h2>
                        <div>
                            <button v-if="!guild.botIsPresent" class="btn btn-primary" @click="addToServer">{{ t('add-to-server') }}</button>
                            <NuxtLink v-else class="btn btn-primary" :to="`dashboard/guild/${guild.id}`" >{{ t('go-to-dashboard') }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<style module>
.servers {
    display: grid;
    margin: 20px 50px;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 20px;
}

.serverImage{
    max-width: 92px;
    margin-right: 20px;
}

.serverImage img{
    width: 100%;

}
</style>

<i18n lang="json">
{
    "en-US": {
        "add-to-server": "Add to server",
        "go-to-dashboard": "Go to dashboard"
    },
    "pt-BR": {
        "add-to-server": "Adicionar ao servidor",
        "go-to-dashboard": "Ir para o dashboard"
    }
}
</i18n>