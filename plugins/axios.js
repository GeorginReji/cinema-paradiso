/**
 * $axios - pre-configured Axios instance from Nuxt module
 * $config - Runtime config
 * @returns {Object} - Axios instance
 */
export default function ({ $axios, $config }) {
  const errorHandler = (error) => {
    console.log("Error ==>", error);
  };

  const onRequestHandle = (config) => {
    config.params = {
      ...config.params,
      api_key: $config.apiKey,
    };
    console.log("request made to url", config);
    return config;
  };

  $axios.onRequest(onRequestHandle);
  $axios.onError(errorHandler);
}
