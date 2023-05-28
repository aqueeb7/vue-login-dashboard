import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue';
import { useAuthStore } from '../stores/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/BlankLayout.vue'),
      children: [
        { path: '', component: () => import('../views/LoginView.vue') }
      ]
    },
    {
      path: '/',
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        { path: 'dashboard', component: () => import('../views/DashboardView.vue') },
        { path: 'employee', component: () => import('../views/EmployeeView.vue') },
        { path: 'employee/add', component: () => import('../components/forms/EmployeeForm.vue') },

      ],
      meta: { requiresAuth: true }
    },
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const isAuthenticated = authStore.isAuthenticated

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/')
  } else {
    next()
  }
})

export default router
