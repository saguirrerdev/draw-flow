import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const SET_EDITOR = 'SET_EDITOR'
export const SET_SAVE_DIALOG = 'SET_SAVE_DIALOG'
export const SET_PROGRAMS = 'SET_PROGRAMS'

export default new Vuex.Store({
  state: {
    editor: {},
    saveDialog: false,
    programs: [],
  },
  mutations: {
    [SET_EDITOR](state, payload){
      state.editor = payload;
    },
    [SET_SAVE_DIALOG](state, payload){
      state.saveDialog = payload;
    },
    [SET_PROGRAMS](state, payload){
      state.programs = payload;
    }
  },
  actions: {
    async saveProgram({ dispatch }, payload){
      return await DrawflowAPI.post('/nodes', payload).then(({data}) => {
        dispatch('getPrograms')
        return true
      }).catch(e => {
        console.warn(e)
        return false
      })
    },
    async getPrograms({ commit }){
      return DrawflowAPI.get('/nodes').then(({data}) => {
        commit(SET_PROGRAMS, data)
        return true
      }).catch((e) => {
        console.warn(e)
        return false
      })
    },
    async deleteProgram({ dispatch }, { uid }){
      return DrawflowAPI.delete(`/nodes/${uid}`).then(({data}) => {
        dispatch('getPrograms')
        return true
      }).catch((e) => {
        console.warn(e)
        return false
      })
    }
  }
})
