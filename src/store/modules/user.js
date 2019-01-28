import * as types from '../mutation-types'
import http from '../../utils/http.js'

const state = {
  listUser: [],
  userInfo: []
}

const getters = {
  listUser: state => state.listUser,
  userInfo: state => state.userInfo
}

const actions = {
  getAllUser: function ({commit}) {
    return new Promise(function (resolve, reject) {
      http.axiosCus
        .get('user', {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        })
        .then(res => {
          commit(types.GET_ALL_USER, res.data)
          resolve()
        })
        .catch(err => reject(err))
    })
  },
  deleteUser: function ({commit}, id) {
    return new Promise(function (resolve, reject) {
      let urlCustom = 'user/' + id
      http.axiosCus
        .delete(urlCustom)
        .then(res => {
          // console.log(res.data, 'delete')
          resolve()
        })
        .catch(err => reject(err))
    })
  },
  getUserInfo: function ({commit}, id) {
    return new Promise(function (resolve, reject) {
      let urlCustom = 'user/' + id
      http.axiosCus
        .get(urlCustom)
        .then(res => {
          commit(types.GET_USER_INFO, res.data)
          resolve()
        })
        .catch(err => reject(err))
    })
  },
  updateUser: function ({commit}, params) {
    return new Promise(function (resolve, reject) {
      let urlCustom = 'user/' + params.id
      http.axiosCus
        .put(urlCustom, params.formData)
        .then(res => {
          // console.log(res.data, 'update user')
          // commit(types.GET_USER_INFO, res.data)
          resolve()
        })
        .catch(err => reject(err))
    })
  }
}

const mutations = {
  [types.GET_ALL_USER] (state, status) {
    state.listUser = status
  },
  [types.GET_USER_INFO] (state, status) {
    state.userInfo = status
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
