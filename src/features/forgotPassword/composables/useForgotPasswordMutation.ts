import { useMutation } from '@tanstack/vue-query';
import { useRouter } from 'vue-router';

import { sendForgotPasswordRequest } from '../logic';

import { APP_ROUTES } from '@/shared/config';
import { useBaseAlertStore } from '@/shared/ui';

export const useForgotPasswordMutation = (resetForm: () => void) => {
  const router = useRouter();
  const { triggerAlert } = useBaseAlertStore();
  const { mutate, isPending } = useMutation({
    meta: { showLoader: true },
    mutationFn: (email: string) => sendForgotPasswordRequest(email),
    onSuccess: (_, email) => {
      triggerAlert({
        title: `Success! Check your ${email} address`,
        message: `If you don't see the email within a few minutes, please check your spam folder.`,
        closeTime: 5000,
        onClose: () => router.replace(APP_ROUTES.lOGIN),
      });
    },
    onError: error => {
      triggerAlert({
        title: error.name,
        message: error.message,
        closeTime: 4000,
        theme: 'error',
      });
    },
    onSettled: () => resetForm(),
  });

  return { mutate, isPending };
};
