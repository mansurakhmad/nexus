<script setup lang="ts">
import { ref } from 'vue';

import { Tag } from 'primevue';

import type { TalentElementTypes } from '../../models/talentElement.types';

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
    <BaseIcon localIconName="CROWN" :size="55" class="crown" @click="openDescription" />
    <div class="circleOuter">
      <button class="circleInner" @click="openDescription">
        <BaseIcon :name="iconName" sizeValue="medium" color="currentColor" class="talentIcon" />
        <BaseIcon name="info-circle" sizeValue="medium" color="currentColor" class="infoIcon" />
      </button>
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 72px;
  min-height: 137px;

  &:hover {
    .circleInner {
      background: linear-gradient(
        180deg,
        var(--secondary-70) 0%,
        var(--tertiary-80) 50%,
        var(--tertiary-100) 100%
      );
      background-size: 100% 400%;
      animation: fluid-gradient 3s ease infinite;

      .infoIcon {
        display: block;
      }

      .talentIcon {
        display: none;
      }
    }
  }

  &.levelComplete {
    .crown {
      color: var(--primary-30);
    }

    .circleOuter {
      border: 4px solid var(--primary-30);
    }

    .talentProgress {
      background-color: var(--primary-30);
      border: 2px solid var(--primary-30);
      color: var(--primary-90);
    }
  }
}

.infoIcon {
  display: none;
}

.crown {
  cursor: pointer;
}

.circleOuter {
  position: absolute;
  top: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border: 4px solid var(--primary-1);
  border-radius: 50%;
}

.circleInner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 2px solid var(--primary-1);
  border-radius: 50%;
}

.talentProgress {
  position: relative;
  z-index: 1;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  border: 2px solid var(--primary-1);
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
