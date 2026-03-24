import { router } from './router';

import { useAuthStore } from '@/features/user';
import { api } from '@/shared/api';
import { APP_ROUTES } from '@/shared/config';

router.beforeEach(async (to, _, next) => {
  const {
    data: { session },
  } = await api.auth.getSession();
  const authStore = useAuthStore();

  const requiresAuth = to.matched.some(record => !record.meta.isOnboarding);

  if (session) authStore.setSession(session);

  if (requiresAuth && !session) {
    next(APP_ROUTES.lOGIN);
  } else if (session && to.name === APP_ROUTES.lOGIN) {
    next(APP_ROUTES.MAIN);
  } else {
    next();
  }
});
