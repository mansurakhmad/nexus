import { useMutation } from '@tanstack/vue-query';

import { sendDeleteAccountRequest } from '../logic';

export const useDeleteUserMutation = () => {
  const { mutate, data, error } = useMutation({
    meta: { showLoader: true },
    mutationFn: (userId: string) => sendDeleteAccountRequest(userId),
    onError: err => console.log('delete user mutation error', err),
  });

  return { deleteUser: mutate, data, error };
};
