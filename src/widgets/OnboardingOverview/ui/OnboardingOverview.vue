<script lang="ts" setup>
import { Carousel } from 'primevue';

import { AppLogo } from '@/shared/ui';

const contentItems = [
  {
    title: 'Analytics & Biographies',
    description: `Go beyond basic stats. Dive into complete fighter biographies, including age, reach, stance, fighting style breakdown, and career milestones. Study their evolution from early amateur bouts to championship fights. Access detailed statistics for every aspect of the sport — track striking accuracy, takedown defense, submission attempts, and control time. Compare performance data across individual fights, full tournament cards, and entire careers. Spot trends, study rivals, and turn raw numbers into real fight IQ.`,
  },

  {
    title: 'Gaming Platform',
    description: `Put your knowledge to the test. Use in-game currency to place bets on real upcoming fights — from undercard matchups to main event title bouts. Every decision affects your balance. Then, take it further: join the Prognosticators' Championship, where you compete head‑to‑head with other players based on prediction accuracy. Earn points for correct forecasts, build a win streak, and rise through the ranks. Climb the global leaderboard, earn bragging rights, and prove you have the sharpest mind in MMA analytics`,
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
  background: linear-gradient(
    0deg,
    var(--tertiary-70) 0%,
    var(--tertiary-80) 22%,
    var(--tertiary-90) 50%,
    var(--tertiary-100) 100%
  );

  .content {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .title {
      color: var(--primary-30);
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
      background: var(--secondary-60);
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
