import { useMutation, useQueryClient } from '@tanstack/vue-query';

import { sendUpdateUserSpecializationRequest } from '../logic';

import type { SendUpdateUserSpecializationPayload } from '../models/api.types';

import { useBaseAlertStore } from '@/shared/ui';

export const useUpdateUserSpecializationMutation = () => {
  const queryClient = useQueryClient();
  const { triggerAlert } = useBaseAlertStore();

  const { mutate, isPending } = useMutation({
    mutationFn: (payload: SendUpdateUserSpecializationPayload) =>
      sendUpdateUserSpecializationRequest(payload),
    onError: error => {
      triggerAlert({
        title: error.name || 'Error',
        message: error.message || 'Something went wrong',
        closeTime: 4000,
        theme: 'error',
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userProfile'] });
    },
  });

  return { updateUserSpecialization: mutate, isPending };
};
