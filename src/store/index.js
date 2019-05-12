import Vue from 'vue'
import Vuex from 'vuex'
import {postLogin, getUser} from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    showFooter: true
  },
  getters: {},
  mutations: {
    detailsText (state, payload) {
      state.showFooter = false
    }
  },
  actions: {
    async postLogin (context) {
      // 返回数据
      const result = await postLogin()
      if (result.code === 1) {
        console.log(result)
        localStorage.setItem('token', result.token)
      }
    },
    async getUser (context) {
      // 返回数据
      const result = await getUser()
      console.log(result)
    }
  }
})
export default store
