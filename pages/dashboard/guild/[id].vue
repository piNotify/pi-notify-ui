<script setup lang="ts">
const route = useRoute()
</script>

<template>
    <span>Guild {{ route.params.id }}</span>
</template>