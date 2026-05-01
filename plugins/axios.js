export default function ({ $axios }, inject) {
    $axios.defaults.baseURL = process.env.baseUrl;
    console.log('axios url', $axios.baseURL);
    const errorHandler = (error) => {
      console.log('Error ==>', error);
    };

    const onRequestHandle = (config) => {
      config.params = {
        api_key: process.env.apiKey
      };
      console.log("request made to url", config);
      return config;
    };
  
    $axios.onRequest(onRequestHandle);
    $axios.onError(errorHandler);
  }
  