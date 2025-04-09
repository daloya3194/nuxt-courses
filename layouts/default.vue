<script setup lang="ts">

</script>

<template>
    <div>
        <div>
            <ul>
                <li>
                    <NuxtLink to="">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="">Articles</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="">Register</NuxtLink>
                </li>
            </ul>
        </div>

        <div>
            <slot></slot>
        </div>

        <br>
        <br>
        <br>
        <br>

        <div>
            <h1>This is the footer</h1>
        </div>
    </div>
</template>

<style scoped>

</style>