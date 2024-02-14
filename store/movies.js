import axios from 'axios'

export const state = () => ({
    list: [],
    data: null,
    cast: [],
    crew: []
  })
  
  export const getters = {
    getList(state) {
      return state.list.slice(0,5)
    },
    getData(state) {
      return state.data
    }
  }
  
  export const mutations = {
    setList(state, payload) {
      state.list.push(...payload)
    },
    setCrew(state, payload) {
      state.crew.push(...payload)
    },
    setCast(state, payload) {
      state.cast.push(...payload)
    },
    setData(state, payload) {
      state.data = payload
    }
  }
  
  export const actions = {
    async fetchList({commit}) {
        await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=8e451eb027127bd618d55a98471aa506')
        .then((res) => {
          const topRatedMovies = res.data.results || [];
          commit('setList', topRatedMovies);
        })
        .catch ((error)=> {
          console.error('Error fetching top-rated movies:', error);
        }) 
    },
    async fetchData({commit}, movieId) {
      await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=8e451eb027127bd618d55a98471aa506`)
      .then((res) => {
        console.log('movie obj',res);
        const movie = res.data
        commit('setData', movie)
      })
    },
    async fetchCast({commit}, movieId) {
      await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=8e451eb027127bd618d55a98471aa506`)
      .then((res) => {
        console.log('cast obj',res);
        const {cast} = res.data
        commit('setCast', cast)
        const {crew} = res.data
        commit('setCrew', crew)
      })
    }
  }