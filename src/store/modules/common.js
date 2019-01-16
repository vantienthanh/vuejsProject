import * as types from '../mutation-types'
// import Constant from '../../utils/const.js'
// import router from '../../router'

const state = {
  isShowBtn: true,
  loginStatus: !!localStorage.getItem('token')
}

const getters = {
  isShowBtn: state => state.isShowBtn,
  loginStatus: state => state.loginStatus
}

const actions = {
  setShowBtn ({ commit }, status) {
    commit(types.SET_SHOW_BTN, status)
  },
  setLoginStatus ({commit}, status) {
    commit(types.LOGIN_STATUS, status)
  }
}

const mutations = {
  [types.SET_SHOW_BTN] (state, status) {
    state.isShowBtn = status
  },
  [types.LOGIN_STATUS] (state, status) {
    state.loginStatus = status
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
