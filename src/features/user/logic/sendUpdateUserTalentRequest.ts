import type { SendUpdateUserTalentPayload } from '../models/api.types';

import { api } from '@/shared/api';

export const sendUpdateUserTalentRequest = async ({
  current_level,
  talent_id,
  type,
  user_id,
}: SendUpdateUserTalentPayload) => {
  const { data, error } = await api
    .from('user_talents')
    .upsert(
      {
        user_id,
        talent_id,
        current_level,
        type,
      },
      {
        onConflict: 'user_id,talent_id',
      }
    )
    .select()
    .single();

  if (error) throw error;
  return data;
};
