import Vue from 'vue'
import VueRouter from 'vue-router'
import Course from '../views/Course.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Course',
    component: Course,
    children:[
      {
        path: 'fe',
        name: 'Fe',
        component: () => import('../views/Fe.vue')
      },
      {
        path: 'rd',
        name: 'Rd',
        component: () => import('../views/Rd.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // alias: '/aaa', //重定向1
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')
  },
  {
    path: '/detail/:id/:price',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue')
  },
  {
    path: '/test',
    name: 'Test',
    // redirect: '/',
    // redirect: '/detail/:id/:price', //重定向2
    component: () => import(/* webpackChunkName: "about" */ '../views/Test.vue'),
    beforeEnter:(to,from,next) =>{
      console.log('to',to);
      console.log('from',from);
      console.log('next',next);
      next();
    }
  },
  {
    path: '/count',
    name: 'Count',
    component: () => import(/* webpackChunkName: "about" */ '../views/Count.vue')
  },
  {
    path: '*',
    name: 'Error',
    component: () => import(/* webpackChunkName: "about" */ '../views/Error.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
