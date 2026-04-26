<script lang="ts" setup>
import { UserControl } from './components';

import { AppLogo, BaseContainer } from '@/shared/ui';
</script>

<template>
  <BaseContainer sizeValue="full" class="headerWrapper">
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
.headerWrapper {
  position: fixed;
  z-index: 9;
  top: 0;
  right: 0;
  left: 0;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
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
