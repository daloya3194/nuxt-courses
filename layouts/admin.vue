<script lang="ts" setup>

</script>

<template>
    <div>
        <h1>
            <NuxtLink to="/">Home</NuxtLink>
        </h1>

        <NuxtLink to="/admin/articles">Move to Articles Page</NuxtLink>
        <br>
        <NuxtLink to="/admin/create-post">Move to Create Post Page</NuxtLink>

        <div>
            <slot></slot>
        </div>

        <br>
        <br>
        <br>
        <br>

        <div style="background-color: gainsboro;">
            <h1>
                Admin Footer
            </h1>
        </div>
    </div>
</template>