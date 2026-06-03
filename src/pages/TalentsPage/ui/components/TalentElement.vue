<script setup lang="ts">
import { ref } from 'vue';

import { Tag } from 'primevue';

import type { TalentElementTypes } from '../../models';

import { BaseIcon, useBaseDrawerStore } from '@/shared/ui';

const MAX_LEVEL_PROGRESS = 3;

const { iconName, talentName, description } = defineProps<TalentElementTypes.Props>();

const currentProgress = ref(0);

const { triggerDrawer } = useBaseDrawerStore();

const upTalentProgress = () => {
  const newValue = currentProgress.value + 1;
  currentProgress.value = newValue > MAX_LEVEL_PROGRESS ? MAX_LEVEL_PROGRESS : newValue;
};

const openDescription = () => {
  triggerDrawer({ title: talentName, description, position: 'bottom' });
};
</script>

<template>
  <div :class="['talentElement', { levelComplete: currentProgress >= MAX_LEVEL_PROGRESS }]">
    <div class="star">
      <div :class="`inner step-${currentProgress}`" @click="openDescription">
        <BaseIcon :name="iconName" sizeValue="extraLarge" />
      </div>
    </div>

    <Tag
      rounded
      class="talentProgress"
      severity="secondary"
      :value="`${currentProgress} / ${MAX_LEVEL_PROGRESS}`"
      :icon="currentProgress < MAX_LEVEL_PROGRESS ? `pi pi-plus` : undefined"
      @click="upTalentProgress"
    />
  </div>
</template>

<style lang="scss" scoped>
.talentElement {
  position: relative;

  &.levelComplete {
    .inner {
      background-color: var(--primary-20);
      border: 6px solid var(--primary-10);
      color: var(--primary-100);
    }

    .star {
      background: var(--primary-10-o-10);
    }

    .talentProgress {
      cursor: default;
    }
  }

  &:not(.levelComplete):hover {
    .star {
      animation: fluid-gradient 8s ease infinite;
    }

    .talentProgress {
      display: flex;
    }

    .inner {
      background-color: var(--tertiary-90);
      color: var(--primary-10);
      border-color: var(--primary-10);
    }
  }
}

.star {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background: linear-gradient(
    180deg,
    var(--secondary-70) 0%,
    var(--tertiary-80) 50%,
    var(--tertiary-100) 100%
  );
  background-size: 100% 400%;
  background-position-y: bottom;
  clip-path: polygon(
    50% 0%,
    71% 20%,
    98% 35%,
    83% 64%,
    79% 91%,
    50% 83%,
    21% 91%,
    17% 61%,
    2% 35%,
    26% 22%
  );
}

.talentProgress {
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: none;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.inner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: var(--tertiary-80);
  border-radius: 50%;
  backdrop-filter: blur(10px);
  border-style: solid;
  border-color: var(--tertiary-50);

  &.step-0 {
    border-width: 1px;
  }

  &.step-1 {
    border-width: 3px;
  }

  &.step-2 {
    border-width: 6px;
  }

  &.step-3 {
    border-width: 9px;
  }
}

@keyframes fluid-gradient {
  0% {
    background-position: 50% 100%;
  }

  50% {
    background-position: 50% 0%;
  }

  100% {
    background-position: 50% 100%;
  }
}
</style>
