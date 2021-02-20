import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Index from '../views/index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Index,
    meta: {
      title: "ThinkUpp."
    }
  },
  {
    path: '/vuetify/message',
    component: () => import(/* webpackChunkName: "vuetify-message" */ '../views/vuetify/message.vue'),
    meta: {
      title: 'VuetifyMessageSnackbar'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
