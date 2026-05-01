export default (context, inject) => {
    const utils = {
        getImageUrl(path, width) {
            const baseUrl = context.app.$config.imageBaseUrl
            return `${baseUrl}${width ? `${width}/` : ''}${path}`
        }
    }

    // Inject $auth in Vue, context and store.
    inject('utils', utils)
    // For Nuxt <= 2.12, also add 👇
    context.$utils = utils
}
