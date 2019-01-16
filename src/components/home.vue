<template>
  <div>
    <h1>Welcome to home page</h1>
    <button class="btn btn-primary mr-3" @click="loginPage">Login</button>
    <button class="btn btn-primary" @click="registerPage">Register</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    loginPage: function () {
      this.$router.push({name: 'login'})
    },
    registerPage: function () {
    this.$router.push({name: 'register'})
    }
  }
}
</script>

<style scoped>

</style>
