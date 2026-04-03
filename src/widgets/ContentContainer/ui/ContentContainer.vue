<script lang="ts" setup>
import type { ContentContainer } from '../models';

const { sizeValue, flexValue, paddingValue } = defineProps<ContentContainer.Props>();
</script>

<template>
  <div
    class="contentContainer"
    :class="{
      [`${sizeValue}Size`]: sizeValue,
      [`${flexValue}Flex`]: flexValue,
      [`${paddingValue}Padding`]: paddingValue,
    }"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.contentContainer {
  margin: 0 auto;
  width: 100%;

  &.fullSize {
    max-width: 100%;
  }

  &.largeSize {
    max-width: 1440px;
  }

  &.normalSize {
    max-width: 1120px;
  }

  &.smallSize {
    max-width: 900px;
  }

  &.rowFlex {
    display: flex;
    flex-direction: row;
  }

  &.columnFlex {
    display: flex;
    flex-direction: column;
  }

  &.nonePadding {
    padding: 0;
  }

  &.normalPadding {
    padding: 16px;
  }
}
</style>
