export default defineNuxtPlugin({
    name: 'hello',
    parallel: true,
    async setup (nuxtApp) {
        nuxtApp.provide('hello', 'Hello world')
    }
})