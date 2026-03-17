import type { AppConfig } from '@/entities/AppConfig';

import { api } from '@/shared/api';

export const getConfigRequest = async (): Promise<AppConfig.Model> => {
  const { data } = await api.from('config').select<string, AppConfig.ConfigDTO>('*');

  if (!data) throw new Error('Config not found');

  return data.reduce((acc, item) => {
    acc[item.key as keyof AppConfig.Model] = item.value;

    return acc;
  }, {} as AppConfig.Model);
};
