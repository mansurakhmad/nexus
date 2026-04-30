<script setup lang="ts">
import { computed } from 'vue';

import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import { RouterView, useRoute } from 'vue-router';

import { useRequestState } from '@/features/requestState';
import { useAuthStore } from '@/features/user';
import { BaseContainer } from '@/shared/ui';
import BaseAlert from '@/shared/ui/BaseAlert/ui/BaseAlert.vue';
import { GlobalLoader } from '@/shared/ui/GlobalLoader';
import { HeaderApp } from '@/widgets/HeaderApp';
import { OnboardingOverview } from '@/widgets/OnboardingOverview';

const authStore = useAuthStore();

const route = useRoute();
const { showLoader } = useRequestState();

const isOnboardingFlow = computed(() => route.meta.isOnboarding);

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

  <div v-else class="app">
    <HeaderApp />
    <main class="main">
      <RouterView />
    </main>
  </div>

  <BaseAlert />
  <GlobalLoader :showLoader />
  <VueQueryDevtools />
</template>

<style scoped lang="scss">
.app {
  min-height: 100vh;
  background-color: var(--tertiary-1);
}

.onboardingFlow {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  .onboardingContentContainer {
    gap: 40px;
    min-height: 80vh;
    background-color: var(--primary-1);
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

.main {
  padding: 142px 16px 0;
}
</style>
