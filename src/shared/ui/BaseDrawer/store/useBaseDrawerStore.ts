import { defineStore } from 'pinia';

import { useDrawer } from '../composables';

export const useBaseDrawerStore = defineStore('drawer', () => {
  const { drawerData, triggerDrawer, closeDrawer } = useDrawer();

  return {
    drawerData,
    triggerDrawer,
    closeDrawer,
  };
});
