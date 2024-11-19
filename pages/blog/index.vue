<template>
    <h1>List des Articles</h1>

    <div v-if="status == 'pending'">
        Loading...
    </div>

    <ul v-else>
        <li v-for="i in data"><NuxtLink :to="'/blog/article-'+i.id">Article {{ i.title }}</NuxtLink></li>
    </ul>
</template>

<script lang="ts" setup>
    const { status, data } = await useFetch('https://jsonplaceholder.typicode.com/posts?_limit=5', {
        lazy: true,
    })
</script>
