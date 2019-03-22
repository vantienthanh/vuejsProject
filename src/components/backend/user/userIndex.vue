<template>
  <div>
    <table class="table table-hover">
      <thead>
      <tr>
        <th>ID</th>
        <th>Email</th>
        <th>Full name</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in getAllUser.thanhuser__thanhusers" :key="item.id">
        <td>
          <a href="">{{item.id}}</a>
        </td>
        <td>
          <a href="">{{item.username}}</a>
        </td>
        <td>
          <a href="">{{item.fullName}}</a>
        </td>
        <td>
          <div>
            <!--<a href=""></a>-->
            <router-link :to="{name:'userDetail', params:{id:item.id}}"><i class="fas fa-pencil-alt"></i></router-link>
            <a href="#" @click.prevent="deleteUser1(item.id)"><i class="fas fa-trash-alt"></i></a>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'userIndex',
  data: function () {
    return {
      getAllUser: []
    }
  },
  mounted () {
    this.$store.dispatch('getAllUser')
      .then(() => {
        this.getAllUser = this.allUser
      })
  },
  computed: {
    allUser: {
      get: function () {
        return this.$store.getters.listUser
      }
    }
  },
  methods: {
    deleteUser1 (id) {
      let i = this.getAllUser.thanhuser__thanhusers.map(item => item.id).indexOf(id)
      this.getAllUser.thanhuser__thanhusers.splice(i, 1)
      this.$store.dispatch('deleteUser', id)
    }
  }
}
</script>

<style scoped>

</style>
