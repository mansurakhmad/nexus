<script lang="ts" setup>
import type { ContentContainer } from '../models';

const { sizeValue, flexValue, paddingValue, gapValue, radiusValue } =
  defineProps<ContentContainer.Props>();
</script>

<template>
  <div
    class="contentContainer"
    :class="{
      [`${sizeValue}Size`]: sizeValue,
      [`${flexValue}Flex`]: flexValue,
      [`${paddingValue}Padding`]: paddingValue,
      [`${gapValue}Gap`]: gapValue,
      [`${radiusValue}Radius`]: radiusValue,
    }"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.contentContainer {
  margin: 0 auto;
  width: 100%;

  // SIZE
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

  // FLEX
  &.rowFlex {
    display: flex;
    flex-direction: row;
  }

  &.columnFlex {
    display: flex;
    flex-direction: column;
  }

  // PADDING
  &.nonePadding {
    padding: 0;
  }

  &.normalPadding {
    padding: 16px;
  }

  // GAP
  &.noneGap {
    gap: 0;
  }

  &.smallGap {
    gap: 12px;
  }

  &.normalGap {
    gap: 16px;
  }

  &.largeGap {
    gap: 24px;
  }

  // RADIUS
  &.noneRadius {
    border-radius: 0;
  }

  &.smallRadius {
    border-radius: 8px;
  }

  &.normalRadius {
    border-radius: 12px;
  }

  &.largeRadius {
    border-radius: 24px;
  }
}
</style>
