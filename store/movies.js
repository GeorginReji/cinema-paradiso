import axios from 'axios'

export const state = () => ({
    movies: [],
    series: []
  })
  
  export const getters = {
    getTopMovies(state) {
      return state.movies.slice(0,5)
    },
    getTopSeries(state) {
      return state.series.slice(0,5)
    }
  }
  
  export const mutations = {
    setMovies(state, payload) {
      state.movies.push(...payload)
    },
    setSeries(state, payload) {
      state.series.push(...payload)
    }
  }
  
  export const actions = {
    async fetchMovies({commit}) {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular',
        {
          params: {
            api_key: '8e451eb027127bd618d55a98471aa506',
          },
        }
        );
        console.log(response);
  
        const topRatedMovies = response.data.results || [];
        commit('setMovies', topRatedMovies);
      } catch (error) {
        console.error('Error fetching top-rated movies:', error);
      }
    },
    async fetchSeries({commit}) {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/tv/popular',
        {
          params: {
            api_key: '8e451eb027127bd618d55a98471aa506',
          },
        }
        );
        console.log(response);
  
        const topRatedSeries = response.data.results || [];
        commit('setSeries', topRatedSeries);
      } catch (error) {
        console.error('Error fetching top-rated movies:', error);
      }
    }
  }