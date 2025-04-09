export default defineEventHandler((event) => {
    const config = useRuntimeConfig();
    const key= config.privateApiKey;

    return {
        key
    }
});