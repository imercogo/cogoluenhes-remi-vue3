import { createRouter, createWebHistory } from 'vue-router'
import HeaderView from '../views/HeaderView.vue'
import AmiibosList from '../views/AmiibosList.vue'
import AmiiboDetails from '../views/AmiiboDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HeaderView
    },
    {
      path: '/amiibosList',
      name: 'amiibosList',
      component: AmiibosList
    },
    {
      path: '/amiibosList/:amiiboId',
      name: 'amiiboDetails',
      component: AmiiboDetails
    }
  ]
})

export default router
