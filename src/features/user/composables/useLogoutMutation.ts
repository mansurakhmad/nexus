import { useMutation } from '@tanstack/vue-query';

import { logoutUser } from '../logic';

import { APP_ROUTES } from '@/shared/config';
import { useBaseAlertStore } from '@/shared/ui';

export const useLogoutMutation = () => {
  const { triggerAlert } = useBaseAlertStore();
  const { mutate } = useMutation({
    meta: { showLoader: true },
    mutationFn: (onlyLocal?: boolean) => logoutUser(onlyLocal),
    onSuccess: () => {
      window.location.replace(APP_ROUTES.lOGIN);
    },
    onError: error => {
      triggerAlert({
        title: error.name,
        message: error.message,
        theme: 'error',
        closeTime: 5000,
      });
    },
  });

  return { logout: mutate };
};
