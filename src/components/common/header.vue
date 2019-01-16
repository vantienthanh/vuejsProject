<!--suppress ALL -->
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
              <li class="nav-item">
                <a class="nav-link" href="#" >Item</a>
              </li> <li class="nav-item">
                <a class="nav-link" href="#" >Item</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <div class="form-inline my-2 my-lg-0" v-show="!loginStatus">
              <router-link class="btn btn-danger mr-2" :to="{name: 'login'}">Login</router-link>
              <router-link class="btn btn-info" :to="{name: 'register'}">Register</router-link>
            </div>
            <div v-show="loginStatus">
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
      token : localStorage.getItem('token')
    }
  },
  mounted() {
  },
  computed: {
    loginStatus: function() {
      return this.$store.getters.loginStatus
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
    getToken: function () {
      console.log('mounted token')
      this.token = localStorage.getItem('token')
    },
    logout: function () {
      if(localStorage.getItem('token')){
        localStorage.removeItem('token')
        this.$store.dispatch('setLoginStatus',false)
      }
    }
  },
  watch: {
    token: function () {

    }
  }
})
</script>

<style scoped>

</style>
