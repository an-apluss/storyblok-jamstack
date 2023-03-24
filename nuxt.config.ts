// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["@/assets/css/main.css"],
    modules: [
        ["@storyblok/nuxt", {
            accessToken: "5FQ3mhsV9hwEDgKP5SPjiwtt",
            apiOptions: {
                region: "us",
            },
        }]
    ],
});
