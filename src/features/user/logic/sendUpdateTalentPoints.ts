import type { SendUpdateUserLocationPayload } from '../models/api.types';

import { api } from '@/shared/api';

export const sendUpdateTalentPoints = async ({
  user_id,
  talent_points,
}: SendUpdateUserLocationPayload) => {
  const { error: profileError, data } = await api
    .from('profiles')
    .update({ talent_points })
    .eq('id', user_id);

  if (profileError) throw profileError;

  return data;
};
