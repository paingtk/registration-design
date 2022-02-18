import { createRouter, createWebHistory } from 'vue-router'
import RegisterPage from '@/pages/RegisterPage.vue'
import JoinUs from '@/components/Register/JoinUs.vue'
import PersonalInfo from '@/components/Register/PersonalInfo.vue'
const routes = [
  {
    path: '/',
    component: RegisterPage,
    children: [
      {
        path: '',
        name: 'JoinUs',
        component: JoinUs,
      },
      {
        path: '/personal-info',
        name: 'PersonalInfo',
        component: PersonalInfo,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
