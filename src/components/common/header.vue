
<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <router-link class="nav-link" :to="{name:'home'}">Home</router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item" v-show="loginStatus1">
                <router-link class="nav-link" :to="{name: 'user'}">User</router-link>
              </li><li class="nav-item" v-show="loginStatus1">
                <router-link class="nav-link" :to="{name: 'calendar'}">Calendar</router-link>
              </li>
              <li class="nav-item" v-for="item in category.category__categories" :key="item.id">
                <a class="nav-link" href="#" >{{item.name}}</a>
              </li>
            </ul>
            <div class="form-inline my-2 my-lg-0" v-show="!loginStatus1">
              <router-link class="btn btn-danger mr-2" :to="{name: 'login'}">Login</router-link>
              <router-link class="btn btn-info" :to="{name: 'register'}">Register</router-link>
            </div>
            <div v-show="loginStatus1">
              <button class="btn btn-danger" @click="logout">Logout</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.component('c-header', {
  data: function () {
    return {
      token: null,
      category: []
    }
  },

  mounted () {
    this.$store.dispatch('getCategory')
      .then(() => {
        this.category = this.$store.getters.getCategory
      })
    this.token = localStorage.getItem('token')
  },
  computed: {
    loginStatus1: function () {
      return this.$store.getters.loginStatus
    },
    getCategory: function () {
      return this.category
    },
    getToken: function () {
      // console.log(localStorage.getItem('token') ? true:false)
      return !!localStorage.getItem('token')
    }
  },
  methods: {
    home: function () {
      this.$router.push({name: 'home'})
    },
    login: function () {
      this.$router.push({name: 'login'})
    },
    register: function () {
      this.$router.push({name: 'register'})
    },
    logout: function () {
      if (localStorage.getItem('token')) {
        localStorage.removeItem('token')
        this.$store.dispatch('setLoginStatus', false)
      }
    }
  }
})
</script>

<style scoped>

</style>
