import Vue from 'vue'
import Router from 'vue-router'
import CardsOverview from '@/components/CardsOverview/CardsOverview'
import CardDetails from '@/components/CardDetails/CardDetails'

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
