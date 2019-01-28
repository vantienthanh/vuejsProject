import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common.js'
import login from './modules/login.js'
import user from './modules/user.js'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    common,
    login,
    user
  },
  strict: debug
})

export default store
