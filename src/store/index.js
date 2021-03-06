import Vue from 'vue'
import Vuex from 'vuex'
import mock from './mock.json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: '',
    description: '',
    blocks: []
  },
  mutations: {
    SET_TITLE: (state, title) => {
      state.title = title
    },
    SET_DESCRIPTION: (state, description) => {
      state.description = description
    },
    SET_BLOCKS: (state, blocks) => {
      state.blocks = blocks
    }
  },
  getters: {
    getTitle: (state) => {
      return state.title
    },
    getDescription: (state) => {
      return state.description
    },
    getBlocks: (state) => {
      return state.blocks
    }
  },
  actions: {
    fetchData({ commit }) {
      commit('SET_TITLE', mock.title)
      commit('SET_DESCRIPTION', mock.description)
      commit('SET_BLOCKS', mock.blocks)
    },
    updateBlock({ state, commit }, data) {
      let udpated_blocks = state.blocks.map(function (block) {
        if (block.id === data.id && block.value !== 100) {
          block.value = 100
        }
        return block
      })
      commit('SET_BLOCKS', udpated_blocks)
    }
  }
})
