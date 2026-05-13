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
      <OnboardingOverview class="overview" />
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
  background:
    radial-gradient(at bottom right, var(--tertiary-100), transparent 90%),
    radial-gradient(at bottom left, var(--secondary-100), transparent 90%), var(--neutral-80);
}

.onboardingFlow {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  .onboardingContentContainer {
    min-height: 80vh;
    background-color: var(--primary-1);
    border-radius: 16px;
    overflow: hidden;

    @include block-styles;

    @include max-tablet {
      gap: 24px;
    }

    @include max-mobile {
      flex-direction: column;
      gap: 0;
    }

    .overview {
      max-width: 50%;

      @include max-tablet {
        width: 352px;
        max-width: 100%;
        flex-shrink: 0;
      }

      @include max-mobile {
        gap: 28px;
        padding: 24px 24px 48px;
        width: 100%;
      }
    }

    .onboardingMainContent {
      flex-basis: 50%;
      padding: 24px 40px;
      background-color: var(--primary-1);

      @include max-tablet {
        flex-basis: 60%;
      }

      @include max-mobile {
        padding: 24px;
      }
    }
  }
}

.main {
  padding: 142px 16px 0;
}
</style>
