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
        <div class="container">
            <h3 class="text-center">{{t('servers-title')}}</h3>
            <p class="alert alert-warning">{{t('adm-warning')}}</p>
            <div :class="$style.servers">
                <div v-for="guild in discordGuilds" :key="guild.id" class="card card-default">
                    <div class="card-body d-flex flex-col">
                    <div class="col" :class="$style.serverImage">
                        <img v-if="guild.icon" :src="`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=128`" alt="guild icon" />
                        <img v-else src="/discord.png" alt="default discord logo" />
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
    </div>
    </NuxtLayout>
</template>

<style module>
.servers {
    display: grid;
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
        "servers-title": "Servers",
        "adm-warning": "You need to be owner or administrator of a server to configure the bot.",
        "add-to-server": "Add to server",
        "go-to-dashboard": "Go to dashboard"
    },
    "pt-BR": {
        "servers-title": "Servidores",
        "adm-warning": "Você precisa ser dono ou administrador de um servidor para configurar o bot.",
        "add-to-server": "Adicionar ao servidor",
        "go-to-dashboard": "Ir para o dashboard"
    }
}
</i18n>