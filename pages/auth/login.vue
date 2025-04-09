<script setup lang="ts">
definePageMeta({
    layout: 'auth',
});
</script>

<template>
    <div>
        <h1>Login Page</h1>
        <br>
        <NuxtLink to="/auth/register">Move to Register Page</NuxtLink>
        <br>
        <NuxtLink to="/admin/dashboard">Move to Dashboard Page</NuxtLink>
    </div>
</template>

<style scoped>

</style>