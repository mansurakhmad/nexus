import { api } from '@/shared/api';

export const sendDeleteAccountRequest = async (userId: string) => {
  try {
    const { data: files } = await api.storage.from('avatars').list(userId);

    if (files?.length) {
      const paths = files.map(f => `${userId}/${f.name}`);
      await api.storage.from('avatars').remove(paths);
    }

    const { error: rpcError } = await api.rpc('delete_user_data');
    if (rpcError) throw rpcError;

    return { success: true };
  } catch (error) {
    throw error;
  }
};
