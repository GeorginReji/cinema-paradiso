// import Vue from 'vue'

export const state = () => ({
    type: 'movie',
    loader: false
})

export const getters = {
    getLoader(state) {
        return state.loader
    },

    getType(state) {
        return state.type
    }
}

export const mutations = {
    setLoader(state, value) {
        state.loader = value
    },

    setType(state, value) {
        state.type = value
    }
}

export const actions = {}
