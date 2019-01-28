// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store'
import FullCalendar from 'vue-full-calendar'

// import 'fullcalendar-scheduler'
// import 'fullcalendar/dist/fullcalendar.min.css'
import 'fullcalendar/dist/fullcalendar.min.css'

Vue.config.productionTip = false
// import './mixins/common.js'
Vue.use(FullCalendar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
