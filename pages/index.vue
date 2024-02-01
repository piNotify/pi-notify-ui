<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })

function addToServer() {
    const appConfig = useAppConfig()
    navigateTo(appConfig.discordAddToServerUrl, { external: true })
}
</script>

<template>
    <NuxtLayout>
        <main :class="$style.main">
            <div :class="$style.container">
                <h1 :class="$style.title">
                    {{ $t('app-name') }}
                </h1>
                <p :class="$style.subtitle">
                    {{ t('subtitle') }}
                </p>
                <div :class="$style.buttons">
                    <button type="button" @click="addToServer">
                        {{ t('add-to-server') }}
                    </button>
                    <NuxtLink to="dashboard">
                        {{ t('go-to-dashboard') }}
                    </NuxtLink>
                </div>
            </div>
        </main>
    </NuxtLayout>
</template>

<style module>
.main {
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(100deg, #1d1d1d, #393939);
    color: #ddd;
}

.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    padding: 0 2rem;
    text-align: center;
}

.title{
    font-family: Poppins, Arial, sans-serif;
    display: block;
    font-size: 3rem;
    margin: 0;
}

.subtitle{
    font-size: 1.5rem;
    margin: 0;
    margin-top: 2.5rem;
}

.buttons{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 2.5rem;
    gap: 2rem;
}
</style>

<i18n lang="json">
{
    "en-US": {
        "subtitle": "PiNotify Subtitle",
        "add-to-server": "Add to server",
        "go-to-dashboard": "Go to dashboard"
    },
    "pt-BR": {
        "subtitle": "Saiba quando seus criadores favoritos estão online!",
        "add-to-server": "Adicionar ao servidor",
        "go-to-dashboard": "Ir para o dashboard"
    }
}
</i18n>
