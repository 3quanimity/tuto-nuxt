<template>
    <h1>Article {{ id }}</h1>
    <p>Contenu de l'article {{ id }}</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus dicta blanditiis, quaerat, molestiae quidem, deserunt voluptatem quisquam deleniti sed iste molestias distinctio! Error quia autem, aut dolorum accusamus exercitationem nesciunt.</p>
    <NuxtLink to="/blog">Retour au blog</NuxtLink>
</template>

<script lang="ts" setup>
    const route = useRoute()
    const id = route.params.id
    // fetch API
</script>

