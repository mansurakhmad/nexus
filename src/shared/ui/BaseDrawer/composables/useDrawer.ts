import { ref } from 'vue';

import type { BaseDrawerTypes } from '../models';

export const useDrawer = () => {
  const drawerData = ref<BaseDrawerTypes.DrawerData | null>(null);

  const triggerDrawer = (dataToShow: BaseDrawerTypes.DrawerData) => {
    drawerData.value = dataToShow;
  };

  const closeDrawer = () => (drawerData.value = null);

  return { drawerData, triggerDrawer, closeDrawer };
};
