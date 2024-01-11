<script setup lang="ts">
import 'bootstrap/dist/css/bootstrap.css'
import BaseLayout from './BaseLayout.vue'

definePagemeta({
    middleware: 'authenticated',
})

</script>

<template>
    <BaseLayout>
        <slot />
    </BaseLayout>
</template>