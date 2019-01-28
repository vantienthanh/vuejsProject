import * as types from '../mutation-types'
import http from '../../utils/http.js'

const state = {
  getToken: {},
  dataRes: {},
  registerStatus: ''
}

const getters = {
  getToken: state => state.getToken,
  getRegisterStatus: state => state.registerStatus
}

const actions = {
  getToken: function ({commit}, params) {
    return new Promise(function (resolve, reject) {
      let urlData = 'login'
      http.axiosCus.post(urlData, params, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(response => {
          if (response.data.token) {
            localStorage.setItem('token', response.data.token)
            commit(types.LOGIN_STATUS, true)
          }
          commit(types.GET_TOKEN, response.data)
          resolve()
        }, response => {
          reject(response)
          // console.log(response, 'err')
        })
    })
  },
  postRegister: function ({commit}, data) {
    return new Promise(function (resolve, reject) {
      http.axiosCus
        .post('register', data)
        .then(res => {
          commit(types.POST_REGISTER, res.data)
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

const mutations = {
  [types.GET_TOKEN] (state, data) {
    state.getToken = data
  },
  [types.POST_REGISTER] (state, data) {
    state.registerStatus = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
