<template>
    <div>
      <input class="form-control mt-3" type="text" name="email" id="email" placeholder="Email" v-model="formData.username">
      <input class="form-control mt-3" type="text" name="fullName" id="fullName" placeholder="Full name" v-model="formData.fullName">
      <button class="btn btn-primary mt-3" @click="updateUser">Update</button>
    </div>
</template>

<script>
export default {
  name: 'userDetail',
  data: function () {
    return {
      id: '',
      formData: {
        username: '',
        fullName: ''
      }
    }
  },
  mounted () {
    this.id = (this.$route.params.id)
    this.$store.dispatch('getUserInfo', this.id)
      .then(() => {
        console.log(this.dataRes)
        this.formData.username = this.dataRes.username
        this.formData.fullName = this.dataRes.fullName
      }).catch(() => console.log('err'))
  },
  computed: {
    dataRes: {
      get: function () {
        return this.$store.getters.userInfo.data
      }
    }
  },
  methods: {
    updateUser: function () {
      let params = {
        id: this.id,
        formData: this.formData
      }
      this.$store.dispatch('updateUser', params).then(() => {
        this.$router.push({name: 'user'})
      })
    }
  }
}
</script>

<style scoped>

</style>
