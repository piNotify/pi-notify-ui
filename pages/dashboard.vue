<script setup lang="ts">
definePageMeta({
    layout: 'panel',
    middleware: ['authenticated'],
})
</script>

<template>
    <NuxtPage />
</template>
