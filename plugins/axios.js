/**
 * Nuxt plugin that configures the global `$axios` instance.
 * Automatically appends the TMDB `api_key` to every request.
 *
 * @param {Object} nuxtContext
 * @param {Object} nuxtContext.$axios - The Nuxt Axios instance.
 * @param {Object} nuxtContext.$config - Nuxt public runtime config.
 * @param {string} nuxtContext.$config.apiKey - The TMDB API key.
 * @returns {void}
 */
export default function ({ $axios, $config }) {
    /**
     * Intercepts every request and injects the API key into params.
     *
     * @param {Object} config - The Axios request config.
     * @returns {Object} The mutated config.
     */
    const onRequestHandle = (config) => {
        config.params = {
            ...config.params,
            api_key: $config.apiKey
        }
        console.log('Request made to URL:', config.url)
        return config
    }

    /**
     * Handles Axios errors globally.
     *
     * @param {Object} error - The Axios error object.
     * @returns {void}
     */
    const errorHandler = (error) => {
        console.error('Axios Error ==>', error.message)
    }

    $axios.onRequest(onRequestHandle)
    $axios.onError(errorHandler)
}
