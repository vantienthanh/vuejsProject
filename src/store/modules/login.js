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
  getToken ({commit}, params) {
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
          console.log(response, 'err')
        })
    })
  },
  postRegister ({commit}, data) {
    http.axiosCus
      .post('register', data)
      .then(r => r.data)
      .then(status => commit(types.POST_REGISTER, status))
      .catch(err => console.log(err.response.data.error, 'error'))
  }
}

const mutations = {
  [types.GET_TOKEN] (state, data) {
    // console.log(types.GET_TOKEN, 'cvcvcv')
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
