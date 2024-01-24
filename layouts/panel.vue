<script setup lang="ts">
import 'bootstrap/dist/css/bootstrap.css'
import BaseLayout from './BaseLayout.vue'
</script>

<template>
    <BaseLayout>
        <main>
            <slot />
        </main>
    </BaseLayout>
</template>