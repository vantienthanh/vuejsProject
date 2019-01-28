<template>
  <div class="hello">
    <button type="button" class="btn btn-primary" v-on:click="showText()">yes</button>
    <p v-show="isShowBtn">asdasdasdasds</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {
    isShowBtn: {
      get: function () {
        return this.$store.getters.isShowBtn
      }
    }
  },
  mounted: function () {
    console.log(this.isShowBtn, 'ss')
  },
  methods: {
    showText: function () {
      console.log(this.isShowBtn, 'ss')
      this.$store.dispatch('setShowBtn', false)
    },
    handleLogin: function () {
      this.$store.dispatch('login')
    }
  }
}

</script>
