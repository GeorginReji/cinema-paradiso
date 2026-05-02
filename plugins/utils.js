/** @typedef {import('../types').Utils} Utils */

/**
 * Nuxt plugin that injects a `$utils` helper into the Vue instance,
 * the Nuxt context, and the Vuex store.
 *
 * @param {Object} context - The Nuxt context object.
 * @param {Function} inject - Nuxt's inject function.
 * @returns {void}
 */
export default (context, inject) => {
    /** @type {Utils} */
    const utils = {
        /**
         * Builds a full TMDB image URL from a relative path.
         *
         * @param {string} path - The relative image path from TMDB.
         * @param {string} [width] - Optional TMDB size prefix.
         * @returns {string} The full image URL.
         */
        getImageUrl(path, width) {
            const baseUrl = context.app.$config.imageBaseUrl
            return `${baseUrl}${width ? `w${width}` : ''}${path}`
        }
    }

    // Inject $auth in Vue, context and store.
    inject('utils', utils)
}
