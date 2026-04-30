import type { Router } from 'vue-router';

import { useAuthStore } from '@/features/user';
import { api } from '@/shared/api';
import { APP_ROUTES } from '@/shared/config';
import { authChannel, type AuthMessage } from '@/shared/utils';

export function setupMiddleware(router: Router) {
  let isInitialAuthChecked = false;

  authChannel.onmessage = (event: MessageEvent<AuthMessage>) => {
    if (event.data.type === 'LOGIN') {
      window.location.reload();
    }

    if (event.data.type === 'LOGOUT') {
      localStorage.clear();
      sessionStorage.clear();
      router.replace(APP_ROUTES.lOGIN);
      window.location.reload();
    }
  };

  router.beforeEach(async (to, _, next) => {
    const authStore = useAuthStore();

    if (!isInitialAuthChecked) {
      try {
        const {
          data: { session },
        } = await api.auth.getSession();
        if (session) authStore.setSession(session);
      } catch (error) {
        console.error('Auth check failed', error);
      } finally {
        isInitialAuthChecked = true;
      }
    }

    if (authStore.session && to.meta.isOnboarding) return next(APP_ROUTES.MAIN);
    if (!authStore.session && !to.meta.isOnboarding) return next(APP_ROUTES.lOGIN);

    next();
  });
}
