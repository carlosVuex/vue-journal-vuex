import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

import daybookRouter from '../modules/daybook/router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  //añadimos los paths nuevos que vamos creando
  {
    path: '/daybook',
    // component: () => import(/* webpackChunkName: "daybook" */ '../modules/daybook/layouts/DayBookLayout.vue')
    //hacemos ésto mismo pero de otra forma, importando el router del daybook
    ...daybookRouter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
