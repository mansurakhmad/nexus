<script setup lang="ts">
import { ToggleButton } from 'primevue';

import type { BaseToggleButtonTypes } from '../models';

const { onLabel, offLabel, size = 'small' } = defineProps<BaseToggleButtonTypes.Props>();
const model = defineModel<boolean>();
</script>

<template>
  <ToggleButton v-model="model" :onLabel :offLabel :size="size" class="baseToggleButton" />
</template>

<style lang="scss" scoped>
.baseToggleButton {
  &.p-togglebutton-checked {
    :deep(.p-togglebutton-content) {
      background-color: var(--primary-30);
    }
  }
}
</style>
