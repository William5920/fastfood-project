import Vue from 'vue'
import Router from 'vue-router'
import MSite from './views/MSite/MSite.vue'
import Order from './views/Order/Order.vue'
import Profile from './views/Profile/Profile.vue'
import Search from './views/Search/Search.vue'
import Login from './views/Login/Login.vue'
import Shop from './views/Shop/Shop.vue'
import ShopGoods from './views/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from './views/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from './views/Shop/ShopInfo/ShopInfo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: 'goods',
          component: ShopGoods
        },
        {
          path: 'ratings',
          component: ShopRatings
        },
        {
          path: 'info',
          component: ShopInfo
        },
        {
          path: '',
          redirect: 'goods'
        },
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
