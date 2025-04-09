export default defineEventHandler(async (event) => {
    try {
        const config = useRuntimeConfig();

        const comments = await $fetch(config.public.API_URL + '/comments', {
            query: {
                postId: config.privateApiKey,
            }
        });

        return {
            comments
        }
    } catch (error) {
        throw createError({
            status: 500,
            message: "Server Error"
        });
    }
});