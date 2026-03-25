<script lang="ts" setup>
import UserControl from './UserControl.vue';

import { AppLogo } from '@/shared/ui';
</script>

<template>
  <header class="header">
    <Transition name="fade" appear>
      <AppLogo />
    </Transition>
    <div>
      <UserControl />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s ease;
}
</style>
