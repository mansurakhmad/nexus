import { useMutation, useQueryClient } from '@tanstack/vue-query';

import { sendUpdateUserTalentRequest } from '../logic';
import { sendUpdateTalentPoints } from '../logic/sendUpdateTalentPoints';

import type { SendUpdateUserTalentPayload } from '../models/api.types';

import { useBaseAlertStore } from '@/shared/ui';

export const useUserTalentUpdateMutation = () => {
  const queryClient = useQueryClient();
  const { triggerAlert } = useBaseAlertStore();

  const { mutate, isPending } = useMutation({
    mutationFn: (payload: SendUpdateUserTalentPayload) => sendUpdateUserTalentRequest(payload),
    onError: error => {
      triggerAlert({
        title: error.name || 'Error',
        message: error.message || 'Something went wrong',
        closeTime: 4000,
        theme: 'error',
      });
    },
    onSuccess: async (_, vars) => {
      await sendUpdateTalentPoints({ user_id: vars.user_id, talent_points: vars.talent_points });

      queryClient.invalidateQueries({ queryKey: ['userProfile'] });
    },
  });

  return { updateUserTalent: mutate, isPending };
};
