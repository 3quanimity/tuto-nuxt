<template>
    <h1>List des Articles</h1>

    <ul>
        <li v-for="i in 5"><NuxtLink :to="'/blog/article-'+i">Article {{ i }}</NuxtLink></li>
    </ul>
</template>
