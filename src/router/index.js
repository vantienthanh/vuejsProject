import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import Login from '@/components/login'
import Register from '@/components/Register'
import userIndex from '../components/backend/user/userIndex'
import userDetail from '../components/backend/user/userDetail'
import Calendar from '../components/calendar'
import NProgress from 'nprogress'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        isLogin: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        isLogin: true
      }
    },
    {
      path: '/user',
      name: 'user',
      component: userIndex,
      meta: {
        permission: true
      }
    },
    {
      path: '/user/:id',
      name: 'userDetail',
      component: userDetail,
      meta: {
        permission: true
      }
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar
    }
  ]
})
router.beforeEach((to, from, next) => {
  NProgress.start()
  const tokenLocal = window.localStorage.getItem('token')
  if (to.meta.isLogin) {
    if (tokenLocal) {
      next({name: 'home'})
      NProgress.done()
    } else {
      next()
    }
  } else if (to.meta.permission) {
    if (tokenLocal) {
      next()
    } else {
      next({name: 'home'})
      NProgress.done()
    }
  } else {
    next()
  }
})
router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})
export default router
