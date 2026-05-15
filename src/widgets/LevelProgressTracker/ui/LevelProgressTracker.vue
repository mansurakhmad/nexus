<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';

import Chart from 'primevue/chart';

import { useUserProfileQuery } from '@/features/user';
import { BaseContainer, BaseText } from '@/shared/ui';
import { getLevelByXp, getXpProgressInLevel, getXpRequiredForNextLevel } from '@/shared/utils';

const { data } = useUserProfileQuery();

const xpInLevel = computed(() => getXpProgressInLevel(data.value?.profileData.xp || 0));
const currentLevel = computed(() => getLevelByXp(data.value?.profileData.xp || 0));
const xpRequired = computed(() => getXpRequiredForNextLevel(currentLevel.value));

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref<ReturnType<typeof setChartOptions> | null>(null);

const setChartData = () => {
  const documentStyle = getComputedStyle(document.body);

  return {
    labels: ['Current XP', 'Need to level up'],
    datasets: [
      {
        data: [xpInLevel, xpRequired],
        cutout: '85%',
        borderColor: 'transparent',
        backgroundColor: [
          documentStyle.getPropertyValue('--primary-40'),
          documentStyle.getPropertyValue('--tertiary-60'),
        ],
        hoverBackgroundColor: [
          documentStyle.getPropertyValue('--primary-30'),
          documentStyle.getPropertyValue('--tertiary-50'),
        ],
      },
    ],
  };
};

const setChartOptions = () => {
  return {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        displayColors: false,
        callbacks: {
          label: (context: { raw: { value: number } }) => `${context.raw.value} XP`,
        },
      },
    },
    animation: {
      duration: 2000,
      easing: 'easeOutQuart',
    },
  };
};
</script>

<template>
  <BaseContainer
    v-if="chartOptions"
    class="levelProgressTracker"
    radiusValue="normal"
    paddingValue="normal"
  >
    <Transition name="fade" appear>
      <div>
        <Chart type="doughnut" :data="chartData" :options="chartOptions" />
        <BaseContainer class="description" flexValue="column">
          <BaseText class="levelInfo" size="extraLarge" weight="bold" as="p">
            You level is
            <BaseText class="value" size="extraLarge" weight="bold" as="span">
              {{ currentLevel }}
            </BaseText>
          </BaseText>
          <BaseText class="xpInfo" size="small" weight="normal" as="p">
            You need
            <BaseText class="value" size="medium" weight="bold" as="span">
              {{ xpRequired }}
            </BaseText>
            XP to level up
          </BaseText>
        </BaseContainer>
      </div>
    </Transition>
  </BaseContainer>
</template>

<style lang="scss" scoped>
.levelProgressTracker {
  position: relative;
  width: 380px;
  height: 380px;
  flex-shrink: 0;

  @include block-styles;

  @include max-extra-small-desktop {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 100%;
  }
}

.description {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .levelInfo,
  .xpInfo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    text-align: center;
    text-transform: uppercase;
  }

  .value {
    color: var(--primary-20);
  }
}

.fade-enter-active {
  transition: opacity 3.5s ease-out;
}

.fade-enter-from {
  opacity: 0;
}
</style>
