import { createWebHistory, createRouter, type RouteRecordRaw } from 'vue-router';

import { LoginPage } from '@/pages/LoginPage';
import { MainPage } from '@/pages/MainPage';
import { APP_ROUTERS_NAMES, APP_ROUTES } from '@/shared/config';

const routes: RouteRecordRaw[] = [
  {
    path: APP_ROUTES.MAIN,
    component: MainPage,
    name: APP_ROUTERS_NAMES.MAIN,
  },
  {
    path: APP_ROUTES.lOGIN,
    component: LoginPage,
    name: APP_ROUTERS_NAMES.lOGIN,
    meta: { isOnboarding: true },
  },
  {
    path: APP_ROUTES.ENROLLMENT,
    component: () => import('@/pages/EnrollmentPage'),
    name: APP_ROUTERS_NAMES.ENROLLMENT,
    meta: { isOnboarding: true },
  },
  {
    path: APP_ROUTES.FORGOT_PASSWORD,
    component: () => import('@/pages/ForgotPasswordPage'),
    name: APP_ROUTERS_NAMES.FORGOT_PASSWORD,
    meta: { isOnboarding: true },
  },
  {
    path: APP_ROUTES.RECOVERY_PASSWORD,
    component: () => import('@/pages/RecoveryPasswordPage'),
    name: APP_ROUTERS_NAMES.RECOVERY_PASSWORD,
    meta: { isOnboarding: true },
  },
  {
    path: APP_ROUTES.PROFILE,
    component: () => import('@/pages/ProfilePage'),
    name: APP_ROUTERS_NAMES.PROFILE,
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export { router };
