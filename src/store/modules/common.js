import * as types from '../mutation-types'
import http from '../../utils/http.js'
const state = {
  isShowBtn: true,
  loginStatus: !!localStorage.getItem('token'),
  category: []
}

const getters = {
  isShowBtn: state => state.isShowBtn,
  loginStatus: state => state.loginStatus,
  getCategory: state => state.category
}

const actions = {
  setShowBtn ({ commit }, status) {
    commit(types.SET_SHOW_BTN, status)
  },
  setLoginStatus ({commit}, status) {
    commit(types.LOGIN_STATUS, status)
  },
  getCategory ({commit}) {
    return new Promise(function (resolve, reject) {
      http.axiosCus
        .get('category')
        .then(res => {
          commit(types.GET_CATEGORY, res.data)
          resolve()
        })
        .catch(err => reject(err))
    })
  }
}

const mutations = {
  [types.SET_SHOW_BTN] (state, status) {
    state.isShowBtn = status
  },
  [types.LOGIN_STATUS] (state, status) {
    state.loginStatus = status
  },
  [types.GET_CATEGORY] (state, status) {
    state.category = status
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
