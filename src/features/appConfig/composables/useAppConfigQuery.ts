import { useQuery } from '@tanstack/vue-query';

import { getConfigRequest } from '../logic';

import { useLogoutMutation } from '@/features/logout';

export const useAppConfigQuery = () => {
  const { logout } = useLogoutMutation();
  const { data, isLoading, error } = useQuery({
    queryKey: ['config'],
    queryFn: getConfigRequest,
    staleTime: Infinity,
  });

  if (error.value) logout();

  return {
    config: data,
    isLoading,
  };
};
