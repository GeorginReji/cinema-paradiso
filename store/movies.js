export const state = () => ({
    list: [],
    data: null,
    cast: [],
    crew: []
})

export const getters = {
    getList(state) {
        return state.list
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
    fetchList({ commit }) {
        this.$axios
            .get('movie/popular')
            .then((res) => {
                const topRatedMovies = res.data.results || []
                commit('setList', topRatedMovies)
            })
            .catch((error) => {
                console.error('Error fetching top-rated movies:', error)
            })
    },
    fetchData({ commit }, movieId) {
        this.$axios.get(`movie/${movieId}`).then((res) => {
            const movie = res.data
            commit('setData', movie)
        })
    },
    fetchCast({ commit }, movieId) {
        this.$axios.get(`movie/${movieId}/credits`).then((res) => {
            const { cast } = res.data
            commit('setCast', cast)
            const { crew } = res.data
            commit('setCrew', crew)
        })
    }
}
