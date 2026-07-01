import type { SendUpdateUserSpecializationPayload } from '../models/api.types';

import { api } from '@/shared/api';

export const sendUpdateUserSpecializationRequest = async ({
  user_id,
  specialization,
}: SendUpdateUserSpecializationPayload) => {
  const { error, data } = await api.from('profiles').update({ specialization }).eq('id', user_id);

  if (error) throw error;

  return data;
};
