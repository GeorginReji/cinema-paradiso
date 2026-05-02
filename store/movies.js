/**
 * @typedef {import('../types/tmdb').Movie} Movie
 * @typedef {import('../types/tmdb').MovieDetail} MovieDetail
 * @typedef {import('../types/tmdb').CastMember} CastMember
 * @typedef {import('../types/tmdb').CrewMember} CrewMember
 * @typedef {import('../types').MoviesState} MoviesState
 */

/** @returns {MoviesState} */
export const state = () => ({
    list: [],
    data: null,
    cast: [],
    crew: []
})

export const getters = {
    /** @param {MoviesState} state */
    getList(state) {
        return state.list
    },

    /** @param {MoviesState} state */
    getTrendingList(state) {
        const LIST_COUNT = 8
        return state.list.slice(0, LIST_COUNT)
    },

    /** @param {MoviesState} state */
    getData(state) {
        return state.data
    },

    /** @param {MoviesState} state */
    getCast(state) {
        return state.cast
    },

    /** @param {MoviesState} state */
    getCrew(state) {
        return state.crew
    }
}

export const mutations = {
    /** @param {MoviesState} state @param {Movie[]} payload */
    setList(state, payload) {
        state.list.push(...payload)
    },

    /** @param {MoviesState} state @param {MovieDetail} payload */
    setData(state, payload) {
        state.data = payload
    },

    /** @param {MoviesState} state @param {CastMember[]} payload */
    setCast(state, payload) {
        state.cast.push(...payload)
    },

    /** @param {MoviesState} state @param {CrewMember[]} payload */
    setCrew(state, payload) {
        state.crew.push(...payload)
    }
}

export const actions = {
    /**
     * Fetches the popular movies list from TMDB.
     * @param {{ commit: Function }} context
     */
    async fetchList({ commit }) {
        try {
            const res = await this.$axios.get('movie/popular')
            const movies = res.data.results || []
            commit('setList', movies)
        } catch (error) {
            console.error('Error fetching popular movies:', error)
        }
    },

    /**
     * Fetches full details for a single movie.
     * @param {{ commit: Function }} context
     * @param {number} movieId
     */
    async fetchData({ commit }, movieId) {
        try {
            const res = await this.$axios.get(`movie/${movieId}`)
            commit('setData', res.data)
        } catch (error) {
            console.error('Error fetching movie details:', error)
        }
    },

    /**
     * Fetches cast and crew for a single movie.
     * @param {{ commit: Function }} context
     * @param {number} movieId
     */
    async fetchCast({ commit }, movieId) {
        try {
            const res = await this.$axios.get(`movie/${movieId}/credits`)
            commit('setCast', res.data.cast)
            commit('setCrew', res.data.crew)
        } catch (error) {
            console.error('Error fetching movie credits:', error)
        }
    }
}
