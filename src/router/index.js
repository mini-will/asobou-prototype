import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PlayIndex from '../views/PlayIndex.vue'
import PlayInfo from '../views/PlayInfo.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/playindex',
    name: 'PlayIndex',
    component: PlayIndex
  },
  {
    path: '/playinfo/:id',
    name: 'PlayInfo',
    component: PlayInfo
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router