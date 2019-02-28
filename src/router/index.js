import Vue from 'vue'
import Router from 'vue-router'
import CardsOverview from '@/views/CardsOverview'
import CardDetails from '@/views/CardDetails'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'cards-overview',
      component: CardsOverview
    },
    {
      path: '/card-details',
      name: 'card-details',
      component: CardDetails
    }
  ]
})
