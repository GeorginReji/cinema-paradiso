/**
 * @typedef {import('../types/tmdb').TVSeries} TVSeries
 * @typedef {import('../types').SeriesState} SeriesState
 */

/** @returns {SeriesState} */
export const state = () => ({
    list: [],
    data: null
})

export const getters = {
    /** @param {SeriesState} state @param {number} count */
    getList(state, count) {
        return state.list.slice(0, count)
    },

    /** @param {SeriesState} state */
    getTrendingList(state) {
        const LIST_COUNT = 20
        return state.list.slice(0, LIST_COUNT)
    },

    /** @param {SeriesState} state */
    getData(state) {
        return state.data
    }
}

export const mutations = {
    /** @param {SeriesState} state @param {TVSeries[]} payload */
    setList(state, payload) {
        state.list.push(...payload)
    },

    /** @param {SeriesState} state @param {TVSeries} payload */
    setData(state, payload) {
        state.data = payload
    }
}

export const actions = {
    /**
     * Fetches the popular TV series list from TMDB.
     */
    async fetchList({ commit }) {
        try {
            const res = await this.$axios.get('tv/popular')
            const series = res.data.results
            commit('setList', series)
        } catch (error) {
            console.error('Error fetching popular series:', error)
        }
    }
}
