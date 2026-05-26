<script lang="ts" setup>
import type { BaseContainer } from '../models';

const {
  sizeValue,
  flexValue,
  paddingValue,
  gapValue,
  radiusValue,
  flexJustifyValue,
  flexAlignValue,
} = defineProps<BaseContainer.Props>();
</script>

<template>
  <div
    class="baseContainer"
    :class="{
      [`${sizeValue}Size`]: sizeValue,
      [`${flexValue}Flex`]: flexValue,
      [`${paddingValue}Padding`]: paddingValue,
      [`${gapValue}Gap`]: gapValue,
      [`${radiusValue}Radius`]: radiusValue,
      [`${flexJustifyValue}FlexJustify`]: flexJustifyValue,
      [`${flexAlignValue}FlexAlign`]: flexAlignValue,
    }"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.baseContainer {
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

  &.xSmallGap {
    gap: 12px;
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

  &.xLargeGap {
    gap: 32px;
  }

  &.extraLargeGap {
    gap: 40px;
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

  // FLEX JUSTIFY CONTENT
  &.startFlexJustify {
    justify-content: flex-start;
  }

  &.centerFlexJustify {
    justify-content: center;
  }

  &.endFlexJustify {
    justify-content: flex-end;
  }

  &.betweenFlexJustify {
    justify-content: space-between;
  }

  &.aroundFlexJustify {
    justify-content: space-around;
  }

  // FLEX ALIGN ITEMS
  &.startFlexAlign {
    align-items: flex-start;
  }

  &.centerFlexAlign {
    align-items: center;
  }

  &.endFlexAlign {
    align-items: flex-end;
  }
}
</style>
