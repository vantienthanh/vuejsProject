<template>
  <div>
    <!--<c-header></c-header>-->
    <div>
      <input type="text" name="search" id="search" class="form-control" v-bind:hidden="showSearchBox">
      <button class="mt-2" @click="search">Search</button>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
               placeholder="Enter email" v-model="dataLogin.username">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
               v-model="dataLogin.password">
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
        <p class="text-danger" v-if="error">Login fail</p>
      </div>
      <button type="submit" class="btn btn-primary" @click="login">Submit</button>
      <button class="btn btn-primary" @click="reset">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data: function () {
    return {
      dataLogin: {
        username: '',
        password: ''
      },
      showSearchBox: true,
      token: 'no data',
      error: false
    }
  },
  computed: {
    data: {
      get: function () {
        return this.$store.getters.getToken
      }
    }
  },
  mounted: function () {
    // console.log(this.data, 'mmm')
  },
  methods: {
    login: function () {
      if (this.dataLogin.username === '' && this.dataLogin.password === '') {
      } else {
        this.$store.dispatch('getToken', this.dataLogin)
          .then(() => {
            // console.log(this.data)
            if (this.data.success) {
              this.$router.push({name: 'home'})
            } else {
              this.error = true
            }
          })
      }
    },
    reset: function () {
      this.dataLogin.username = this.dataLogin.password = ''
      this.error = false
    },
    search: function () {
      this.showSearchBox = !this.showSearchBox
    }
  }
  // component: {
  //   header
  // }
}
</script>

<style scoped>

</style>
