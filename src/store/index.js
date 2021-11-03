import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const SET_EDITOR = 'SET_EDITOR'

export default new Vuex.Store({
  state: {
    editor: {}
  },
  mutations: {
    [SET_EDITOR](state, payload){
      state.editor = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
