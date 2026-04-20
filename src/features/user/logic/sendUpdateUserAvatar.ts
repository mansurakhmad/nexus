import type { SendUpdateUserAvatarPayload } from '../models/api.types';

import { api } from '@/shared/api';

export const sendUpdateUserAvatar = async ({ file, userId }: SendUpdateUserAvatarPayload) => {
  const fileExt = file.name.split('.').pop();
  const filePath = `${userId}/${Math.random()}.${fileExt}`;

  const { data, error } = await api.storage.from('avatars').upload(filePath, file);

  if (error) throw error;

  const {
    data: { publicUrl },
  } = api.storage.from('avatars').getPublicUrl(data.path);

  const { error: dbError } = await api
    .from('profiles')
    .update({ avatar_url: publicUrl })
    .eq('id', userId);

  if (dbError) throw dbError;

  return {
    publicUrl,
    path: data.path,
  };
};
