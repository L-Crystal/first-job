import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/menu.path',
    component:() => import('../views/Tv.vue'),
  },
  {
    path:'/menu.path',
    component:() => import('../views/Music.vue'),
  },
  {
    path:'/menu.path',
    component:() => import('../views/Book.vue'),
  },
  {
    path:'/menu.path',
    component:() => import('../views/Chat.vue'),
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
