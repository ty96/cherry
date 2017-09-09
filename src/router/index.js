import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Products from '@/components/Products'
import Cases from '@/components/Cases'
import Craft from '@/components/Craft'
import About from '@/components/About'
import Join from '@/components/Join'
import Detail from '@/components/Detail'
import Goods from '@/components/Goods'
import HomeA from '@/components/HomeA'
import ProductsA from '@/components/ProductsA'
import CasesA from '@/components/CasesA'
import CraftA from '@/components/CraftA'
import AboutA from '@/components/AboutA'
import JoinA from '@/components/JoinA'
import Visitors from '@/components/Visitors'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'Home',
      component: Home
    },
    {
      path: '/products/:id',
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
    },
    {
      path: '/admin/home',
      name: 'HomeA',
      component: HomeA
    },
    {
      path: '/admin/products',
      name: 'ProductsA',
      component: ProductsA
    },
    {
      path: '/admin/cases',
      name: 'CasesA',
      component: CasesA
    },
    {
      path: '/admin/craft',
      name: 'CraftA',
      component: CraftA
    },
    {
      path: '/admin/about',
      name: 'AboutA',
      component: AboutA
    },
    {
      path: '/admin/join',
      name: 'JoinA',
      component: JoinA
    },
    {
      path: '/admin/visitors',
      name: 'visitors',
      component: Visitors
    }
  ]
})
