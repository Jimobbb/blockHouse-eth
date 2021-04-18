import Vue from 'vue'
import Router from 'vue-router'
import Payments from './components/Payments.vue'
import Login from './components/Login.vue'
import Home from './components/home.vue'
import Welcome from './components/welcome.vue'
import Own from './components/own.vue'
import Information from './components/information.vue'
import Sell from './components/sell.vue'
import Buy from './components/buy.vue'
import Basket from './components/Basket.vue'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect:'/login'},
    { path: '/login' , component:Login },
    { 
      path: '/home', 
      component: Home,
      redirect: '/welcome',
      children: [{ path:'/welcome', component : Welcome },
                 { path:'/information', component:Information},
                 { path:'/own', component: Own},
                 { path:'/sell', component: Sell},
                 { path:'/buy', component: Buy},
                 { path:'/basket', component: Basket},
                 { path: '/payments', component: Payments },
                ]
    },
  ]
})
