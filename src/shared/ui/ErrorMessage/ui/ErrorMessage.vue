<script setup lang="ts">
import { BaseText } from '../../BaseText';

import type { ErrorMessageTypes } from '../models';

const { message, theme = 'default' } = defineProps<ErrorMessageTypes.Props>();
</script>

<template>
  <BaseText tag="p" size="small" :class="['errorMessage', `${theme}Theme`]">{{ message }}</BaseText>
</template>

<style lang="scss" scoped>
.errorMessage {
  position: absolute;
  left: 0;
  width: 100%;
  text-align: center;
  padding-top: 8px;

  &.defaultTheme {
    color: var(--color-error);
  }

  &.warningTheme {
    color: var(--color-warning);
  }
}
</style>
