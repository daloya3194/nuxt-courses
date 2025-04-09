// https://nuxt.com/docs/api/configuration/nuxt-config
import {process} from "std-env";

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    components: [
        {
            path: '~/components',
            pathPrefix: true
        }
    ],
    runtimeConfig: {
        privateApiKey: process.env.API_PRIVATE_KEY,
        public: {
            API_URL: process.env.API_URL,
            API_BASE_URL: process.env.API_BASE_URL
        }
    },
    plugins: [
        '~/plugins/foo/fooMessage',
        '~/plugins/foo/baz/baz',
    ]
})
