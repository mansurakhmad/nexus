<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { Drawer } from 'primevue';

import { useBaseDrawerStore } from '../store';

const drawerStore = useBaseDrawerStore();

const { drawerData } = storeToRefs(drawerStore);
</script>

<template>
  <Drawer
    @update:visible="drawerStore.closeDrawer"
    :visible="!!drawerData"
    :header="drawerData?.title"
    position="bottom"
  >
    <p>{{ drawerData?.description }}</p>
  </Drawer>
</template>
