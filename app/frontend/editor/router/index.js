import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: window.baseUrl,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.params.pageId !== from.params.pageId && from.params.pageId)
    store.dispatch('resetPreview') // force the display of the loader
  next()
})

export default router