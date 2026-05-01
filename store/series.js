import axios from 'axios'

export const state = () => ({
    list: [],
    data: null
  })
  
  export const getters = {
    getList(state) {
      return state.list.slice(0,5)
    }
  }
  
  export const mutations = {
    setList(state, payload) {
      state.list.push(...payload)
    }
  }
  
  export const actions = {
    async fetchList({commit}) {
        await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=8e451eb027127bd618d55a98471aa506',)
        .then ((res) => {
          const topRatedSeries = res.data.results || [];
          commit('setList', topRatedSeries);
        })
        .catch ((error) => {
        console.error('Error fetching top-rated series:', error);
      })
    },
  
  }