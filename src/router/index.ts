import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from "@/views/LandingPage.vue";
import UserAuthenticationPage from "@/views/UserAuthenticationPage.vue";
import DashboardLandingPage from "@/views/Dashboard/DashboardLandingPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage
    },
    {
      path: '/user-auth',
      name: 'user-authentication',
      component: UserAuthenticationPage
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardLandingPage
    }
  ]
})

export default router
