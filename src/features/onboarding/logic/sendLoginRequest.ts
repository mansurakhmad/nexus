import type { LoginApi } from '../models';

import { api } from '@/shared/api';
import { authChannel } from '@/shared/utils';

export const sendLoginRequest = async (dataToServer: LoginApi.BodyData) => {
  authChannel.postMessage({ type: 'LOGIN' });

  const { data, error } = await api.auth.signInWithPassword(dataToServer);

  if (error) throw error;

  return data;
};
