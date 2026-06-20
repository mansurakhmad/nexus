import type { TalentsTypes, User } from '@/entities/User';

import { api } from '@/shared/api';

export const getUserRequest = async (): Promise<User.Model> => {
  const {
    data: { user },
    error,
  } = await api.auth.getUser();

  if (error) throw error;

  if (!user) throw new Error('User not found');

  const { data: profileData, error: profileError } = await api
    .from('profiles')
    .select('*')
    .eq('id', user?.id)
    .single<User.ProfileData>();

  if (profileError) throw profileError;

  const { data: talents, error: talentsError } = await api
    .from('user_talents')
    .select<string, TalentsTypes.UserTalent>('current_level, type, talent_id')
    .eq('user_id', user?.id);

  if (talentsError) throw talentsError;
  console.log('request talents', talents);
  console.log('request profileData', profileData);
  return {
    ...user,
    profileData,
    talents,
  };
};
