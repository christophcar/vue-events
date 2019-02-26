import Vue from 'vue'
import Router from 'vue-router'
import CardsOverview from '@/components/CardsOverview/CardsOverview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CardsOverview',
      component: CardsOverview
    }
  ]
})
