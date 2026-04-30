import { useMutation, useQueryClient } from '@tanstack/vue-query';

import { sendUpdateUserAvatarRequest } from '../logic';

import type { SendUpdateUserAvatarPayload } from '../models/api.types';

import { useBaseAlertStore } from '@/shared/ui';

export const useUpdateUserAvatarMutation = () => {
  const queryClient = useQueryClient();
  const { triggerAlert } = useBaseAlertStore();

  const { mutate, data, error } = useMutation({
    mutationFn: (payload: SendUpdateUserAvatarPayload) => sendUpdateUserAvatarRequest(payload),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['userProfile'] }),
    onError: error => {
      triggerAlert({
        title: error.name || 'Error',
        message: error.message || 'Something went wrong',
        closeTime: 4000,
        theme: 'error',
      });
    },
  });

  return {
    mutate,
    data,
    error,
  };
};
