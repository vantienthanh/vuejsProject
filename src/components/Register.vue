<template>
  <div>
    <h1>Register form</h1>
    <div class="row">
      <div class="col-md-12">
        <input type="email" name="email" id="email" class="form-control mt-3" placeholder="Email" v-model="dataRegister.email">
        <input type="password" name="password" id="password" class="form-control mt-3" placeholder="Password" v-model="dataRegister.password">
        <input type="text" name="firts_name" id="firts_name" class="form-control mt-3" placeholder="First name" v-model="dataRegister.firts_name">
        <input type="text" name="last_name" id="last_name" class="form-control mt-3" placeholder="Last name" v-model="dataRegister.last_name">
        <button class="btn btn-primary mt-4" @click="registerSubmit">Register</button>
      </div>
      <p>{{data }}aaa</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data: function () {
    return {
      dataRegister: {
        email: '',
        password: '',
        firts_name: '',
        last_name: ''
      }
    }
  },
  methods: {
    registerSubmit: function () {
      console.log(this.dataRegister)
      this.$store.dispatch('postRegister', this.dataRegister)
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
