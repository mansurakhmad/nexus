<script setup lang="ts">
import { useAnimationRules } from '../composables';

import type { WidgetContainerTypes } from '../models';

const { theme = 'Gold', contentClass = '' } = defineProps<WidgetContainerTypes.Props>();

const linesRefs = useAnimationRules();
</script>

<template>
  <div class="animatedWrapper" :class="`widgetTheme${theme}`">
    <div class="line left" :ref="linesRefs.leftLine" />
    <div class="line top" :ref="linesRefs.topLine" />
    <div class="line right" :ref="linesRefs.rightLine" />
    <div class="line bottom" :ref="linesRefs.bottomLine" />
    <div class="content" :class="contentClass">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@mixin theme-rules($color) {
  border: 1px solid $color;

  .line {
    background: $color;
    box-shadow:
      0 0 5px var(--primary-1),
      0 0 10px $color,
      0 0 20px $color,
      0 0 40px $color;
  }
}

.animatedWrapper {
  position: relative;
  border-radius: 12px;
  overflow: hidden;

  .line {
    position: absolute;
    height: 2px;

    &.left,
    &.right {
      top: 50%;
      width: 2px;
      height: 55%;
      transform: translateY(-50%);
    }

    &.top,
    &.bottom {
      left: 0;
      width: 70%;
    }

    &.left {
      left: 0;
      animation: move-vertical ease-in infinite;
    }

    &.top {
      top: 0;
      animation: move-horizontal ease-in infinite;
    }

    &.right {
      right: 0;
      animation: move-vertical ease-in-out infinite;
    }

    &.bottom {
      bottom: 0;
      animation: move-horizontal ease-in-out infinite;
    }
  }

  &.widgetThemeGold {
    @include theme-rules(var(--primary-20));
  }

  &.widgetThemeBlue {
    @include theme-rules(var(--tertiary-40));
  }

  &.widgetThemeRed {
    @include theme-rules(var(--secondary-60));
  }
}

.content {
  display: flex;
  gap: 24px;
  height: 100%;
  flex-wrap: wrap;

  .header,
  .body,
  .footer {
    width: 100%;
  }
}

.header {
  .title {
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
  }
}

.body {
  height: calc(80% - 48px - 10%);
}

.footer {
  align-self: flex-end;
}

@keyframes move-horizontal {
  0% {
    left: -70%;
  }

  50% {
    left: 140%;
  }

  100% {
    left: -70%;
  }
}

@keyframes move-vertical {
  0% {
    top: -50%;
  }

  50% {
    top: 100%;
  }

  100% {
    top: -50%;
  }
}
</style>
