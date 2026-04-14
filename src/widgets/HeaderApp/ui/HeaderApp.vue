<script lang="ts" setup>
import UserControl from './UserControl.vue';

import { AppLogo, BaseContainer } from '@/shared/ui';
</script>

<template>
  <BaseContainer sizeValue="full" paddingValue="normal">
    <header class="header">
      <Transition name="fade" appear>
        <AppLogo />
      </Transition>
      <div>
        <UserControl />
      </div>
    </header>
  </BaseContainer>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: radial-gradient(
    circle at center,
    var(--wine-10),
    var(--wine-50),
    var(--wine-100),
    var(--wine-150)
  );
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s ease;
}
</style>
