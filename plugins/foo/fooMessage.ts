export default defineNuxtPlugin(() => {
    return {
        provide: {
            fooMessage: (message: string) => 'Foo ' + message,
        }
    }
})