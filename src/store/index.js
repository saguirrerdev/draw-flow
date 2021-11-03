import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const SET_EDITOR = 'SET_EDITOR'
export const SET_SAVE_DIALOG = 'SET_SAVE_DIALOG'

export default new Vuex.Store({
  state: {
    editor: {},
    saveDialog: false
  },
  mutations: {
    [SET_EDITOR](state, payload){
      state.editor = payload;
    },
    [SET_SAVE_DIALOG](state, payload){
      state.saveDialog = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
