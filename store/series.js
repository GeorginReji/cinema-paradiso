export const state = () => ({
    list: [],
    data: null
})

export const getters = {
    getList(state) {
        return state.list
    }
}

export const mutations = {
    setList(state, payload) {
        state.list.push(...payload)
    }
}

export const actions = {
    fetchList({ commit }) {
        this.$axios
            .get(`tv/popular`)
            .then((res) => {
                const topRatedSeries = res.data.results || []
                commit('setList', topRatedSeries)
            })
            .catch((error) => {
                console.error('Error fetching top-rated series:', error)
            })
    }
}
