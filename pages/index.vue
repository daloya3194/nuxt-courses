<script lang="ts" setup>
definePageMeta({
    layout: 'default',
});

const articles: number[] = [1,2,3,4,5,6];
</script>

<template>
    <div>
        <h1>Welcome Page</h1>

        <h1>List of articles</h1>

        <div v-for="(index, article) in articles" :key="index">
            <h2>Article - {{ article }}</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolore eaque, fugit id incidunt iure libero, necessitatibus quod quos sapiente similique tempora temporibus, totam! Architecto commodi corporis delectus, eum iure laborum, minima non nostrum nulla optio pariatur repudiandae sapiente veritatis. Aliquid ducimus explicabo iure nostrum perferendis quos sed tempore! Eveniet!
            </p>
        </div>
    </div>
</template>