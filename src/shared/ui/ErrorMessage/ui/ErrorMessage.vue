<script setup lang="ts">
import type { ErrorMessageTypes } from '../models';

const { message, theme = 'default' } = defineProps<ErrorMessageTypes.Props>();
</script>

<template>
  <div class="errorMessage" :class="['errorMessage', `${theme}Theme`]">{{ message }}</div>
</template>

<style lang="scss" scoped>
.errorMessage {
  position: absolute;
  left: 0;
  width: 100%;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  text-align: center;
  padding-top: 8px;

  &.defaultTheme {
    color: var(--red-50);
  }

  &.warningTheme {
    color: var(--gold-50);
  }
}
</style>
