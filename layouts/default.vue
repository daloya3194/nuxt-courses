<script setup lang="ts">

</script>

<template>
    <div>
        <div style="background-color: gainsboro;">
            <ul>
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="">Articles</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/blog/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/blog/contact">Contact</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/auth/login">Login</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/auth/register">Register</NuxtLink>
                </li>
            </ul>
        </div>

        <div>
            <NuxtPage></NuxtPage>
        </div>

        <br>
        <br>
        <br>
        <br>

        <div style="background-color: gainsboro;">
            <h1>Footer</h1>
        </div>
    </div>
</template>

<style scoped>

</style>