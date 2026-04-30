import { api } from '@/shared/api';
import { KEEP_USER_LOGIN } from '@/shared/config';
import { authChannel } from '@/shared/utils';

export const logoutUser = async (onlyLocal?: boolean) => {
  authChannel.postMessage({ type: 'LOGOUT' });

  if (onlyLocal) {
    sessionStorage.clear();
    localStorage.clear();

    return;
  }

  localStorage.removeItem(KEEP_USER_LOGIN);

  const { error } = await api.auth.signOut();

  if (error) throw error;
};
