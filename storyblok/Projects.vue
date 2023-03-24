<script setup>
    defineProps({
        blok: Object
    });
</script>
<template>
    <div class="container project-page">
        <div class="project-title">
            <h1>{{ blok.name || 'New project' }}</h1>
            <nuxt-link :to="{ name: 'index' }">Go Back</nuxt-link>
        </div>

        <div class="project-description">
            <img :src="blok?.image?.filename || 'https://picsum.photos/300/175'" :alt="blok?.image?.alt">
            <p>{{ blok?.description || 'New description'}}</p>
        </div>
    </div>
</template>