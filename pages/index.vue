<script setup lang="ts">
const { t } = useI18n({useScope: 'local'})
</script>

<template>
    <NuxtLayout>
        <main :class="$style.main">
            <div :class="$style.container">
                <h1 :class="$style.title">{{ $t('app-name') }}</h1>
                <p>{{ t('subtitle') }}</p>
                <div :class="$style.buttons">
                    <NuxtLink></NuxtLink>
                    <NuxtLink></NuxtLink>
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
}

.title{
    font-family: Poppins, Arial, sans-serif;
    display: block;
}
</style>

<i18n lang="json">
{
    "en-US": {
        "subtitle": "PiNotify Subtitle"
    },
    "pt-BR": {
        "subtitle": "Saiba quando seus criadores favoritos estão online!"
    }
}
</i18n>