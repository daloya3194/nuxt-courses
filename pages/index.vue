<script lang="ts" setup>
definePageMeta({
    layout: 'default',
});

const config = useRuntimeConfig();

const { data } = await useFetch(config.public.API_URL + '/posts');
</script>

<template>
    <div>
        <h1>Welcome Page</h1>

        <h1>List of articles</h1>

        <div v-for="article in data" :key="article.id">
            <h2>{{ article.title }}</h2>

<!--            v-html in order to intepretate html -->
<!--            <div v-html="article.body"></div>-->
            <p>
                {{ article.body }}
            </p>
        </div>
    </div>
</template>