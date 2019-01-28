<template>
  <div>
    <h1>Register form</h1>
    <div class="row">
      <div class="col-md-12">
        <input type="email" name="username" id="username" class="form-control mt-3" placeholder="Email" v-model="dataRegister.username">
        <input type="password" name="password" id="password" class="form-control mt-3" placeholder="Password" v-model="dataRegister.password">
        <input type="text" name="fullName" id="fullName" class="form-control mt-3" placeholder="Full name" v-model="dataRegister.fullName">
        <p class="text-danger" v-show="showError">Error when create user</p>
        <button class="btn btn-primary mt-4" @click="registerSubmit">Register</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data: function () {
    return {
      dataRegister: {
        username: '',
        password: '',
        fullName: ''
      },
      showError: false
    }
  },
  methods: {
    registerSubmit: function () {
      this.$store.dispatch('postRegister', this.dataRegister)
        .then(() => {
          if (!this.data.success) {
            this.showError = true
          } else {
            this.$store.dispatch('getToken', this.dataRegister).then(() => {
              this.$router.push({name: 'user'})
            })
          }
        })
    }
  },
  computed: {
    data: {
      get: function () {
        return this.$store.getters.getRegisterStatus
      }
    }
  }
}
</script>

<style scoped>

</style>
