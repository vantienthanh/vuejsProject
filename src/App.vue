<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <c-header></c-header>
    <router-view/>
  </div>
</template>

<script>
import header from '@/components/common/header'

export default {
  name: 'App',
  component: {
    header
  }
}
</script>
