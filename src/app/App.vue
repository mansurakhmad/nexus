<script setup lang="ts">
import { computed } from 'vue';

import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import { RouterView, useRoute } from 'vue-router';

import { useRequestState } from '@/features/requestState';
import { useAuthStore } from '@/features/user';
import { APP_FLOWS } from '@/shared/config';
import { BaseContainer } from '@/shared/ui';
import BaseAlert from '@/shared/ui/BaseAlert/ui/BaseAlert.vue';
import { GlobalLoader } from '@/shared/ui/GlobalLoader';
import { HeaderApp } from '@/widgets/HeaderApp';
import { OnboardingOverview } from '@/widgets/OnboardingOverview';

const authStore = useAuthStore();

const route = useRoute();
const { showLoader } = useRequestState();

const isOnboardingFlow = computed(() => route.meta.isOnboarding);

const isFinanceFlow = computed(() => route.meta.flow === APP_FLOWS.FINANCE);

authStore.init();
</script>

<template>
  <div v-if="isOnboardingFlow" class="app onboardingFlow">
    <BaseContainer
      paddingValue="none"
      sizeValue="normal"
      flexValue="row"
      class="onboardingContentContainer"
    >
      <OnboardingOverview />
      <div class="onboardingMainContent">
        <RouterView />
      </div>
    </BaseContainer>
  </div>

  <div v-else-if="isFinanceFlow" class="app financeFlow">
    <HeaderApp class="header" />
    <BaseContainer paddingValue="normal">
      <RouterView />
    </BaseContainer>
  </div>

  <div v-else class="app main">
    <HeaderApp class="header" />
    <BaseContainer paddingValue="normal">
      <RouterView />
    </BaseContainer>
  </div>

  <BaseAlert />
  <GlobalLoader :showLoader />
  <VueQueryDevtools />
</template>

<style scoped lang="scss">
.app {
  min-height: 100vh;
  background-color: var(--neutral-1);
}

.onboardingFlow {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  .onboardingContentContainer {
    gap: 40px;
    min-height: 80vh;
    background-color: var(--white-100);
    border-radius: 16px;
    overflow: hidden;
    box-shadow:
      rgb(0 0 0 / 30%) 0 19px 38px,
      rgb(0 0 0 / 22%) 0 15px 12px;

    .onboardingMainContent {
      flex-basis: 50%;
      padding: 24px 40px 24px 0;
    }
  }
}
</style>
