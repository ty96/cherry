import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Products from '@/components/Products'
import Cases from '@/components/Cases'
import Craft from '@/components/Craft'
import About from '@/components/About'
import Admin from '@/components/Admin'
import Join from '@/components/Join'
import Detail from '@/components/Detail'
import Goods from '@/components/Goods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/cases',
      name: 'Cases',
      component: Cases
    },
    {
      path: '/craft',
      name: 'Craft',
      component: Craft
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/join',
      name: 'Join',
      component: Join
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/goods/:id',
      name: 'Goods',
      component: Goods
    }
  ]
})
