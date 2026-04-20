<script lang="ts" setup>
import { UserControl } from './components';

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
  background: linear-gradient(90deg, var(--secondary-100) 0%, var(--tertiary-100) 100%);
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s ease;
}
</style>
