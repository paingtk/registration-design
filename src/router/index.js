import { createRouter, createWebHistory } from 'vue-router'
import RegisterPage from '@/pages/RegisterPage.vue'
import JoinUs from '@/components/Register/JoinUs.vue'
import PersonalInfo from '@/components/Register/PersonalInfo.vue'
import ResidencyInfo from '@/components/Register/ResidencyInfo.vue'
import BankVerification from '@/components/Register/BankVerification.vue'

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
      {
        path: '/residency-info',
        name: 'ResidencyInfo',
        component: ResidencyInfo,
      },
      {
        path: '/bank-verification',
        name: 'BankVerification',
        component: BankVerification,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
