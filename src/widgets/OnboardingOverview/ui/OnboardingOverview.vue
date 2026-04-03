<script lang="ts" setup>
import { Carousel } from 'primevue';

import { AppLogo } from '@/shared/ui';

const contentItems = [
  {
    title: 'Strategic Asset Management & Market Intelligence',
    description: `Monitor global currency and crypto markets in real time through a centralized professional
        interface. Integrate live market data with curated financial news to support data-driven
        decisions. Optimize your fiscal planning and maintain complete oversight of your portfolio
        within a secure, unified ecosystem.`,
  },

  {
    title: 'Enterprise Project Management Interface',
    description: `Our Project Management Dashboard offers a robust
        alternative for tracking complex workflows and team performance. Specifically engineered to
        facilitate structured task management, the platform provides comprehensive visibility into
        sprint progress, resource allocation, and milestone achievement. Ensure organizational
        alignment and enhance productivity through a professional-grade suite of tools designed to
        streamline the entire development lifecycle.`,
  },
];
</script>

<template>
  <Transition name="fade" appear>
    <div class="onboardingOverview">
      <AppLogo />
      <Carousel :value="contentItems" :circular="true" :showNavigators="false">
        <template #item="slotProps">
          <div class="content">
            <h2 class="title">{{ slotProps.data.title }}</h2>
            <p class="description">
              {{ slotProps.data.description }}
            </p>
          </div>
        </template>
      </Carousel>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.onboardingOverview {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 46px;
  padding: 24px 40px;
  max-width: 50%;
  background-color: var(--wine-100);

  .content {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .title {
      font-size: 28px;
      line-height: 32px;
    }

    .description {
      font-size: 14px;
      line-height: 20px;
    }
  }

  &:deep(.p-carousel-indicator-list) {
    position: absolute;
    bottom: 5%;
  }

  &:deep(.p-carousel-indicator-active) {
    .p-carousel-indicator-button {
      background: var(--gold-10);
    }
  }
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-20%);
}

.fade-enter-active {
  transition: all 1.5s ease-in-out;
}
</style>
