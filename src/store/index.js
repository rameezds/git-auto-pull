import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)
//vuex-persistedstate
import createPersistedState from "vuex-persistedstate";


const store = new Vuex.Store({

    state: {


        url_response: {},
        redirect_url: {}
    },


    mutations: {


        url_response(state, payload) {
            state.url_response = payload
        },
        redirect_url(state, payload) {
            state.redirect_url = payload
        },


    },
    actions: {


        url_response({ commit }, payload) {
            commit('url_response', payload)
        },
        redirect_url({ commit }, payload) {
            commit('redirect_url', payload)
        },




    },
    getters: {


        url_response(state) {

            return state.url_response
        },

        redirect_url(state) {

            return state.redirect_url
        },

    },
    plugins: [createPersistedState()]



})

export default store