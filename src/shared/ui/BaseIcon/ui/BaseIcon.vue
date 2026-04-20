<script setup lang="ts">
import type { BaseIconTypes } from '../models';

const { name, sizeValue } = defineProps<BaseIconTypes.Props>();
</script>

<template>
  <i :class="['pi', `pi-${name}`, `${sizeValue}SizeIcon`]"></i>
</template>

<style lang="scss" scoped>
.smallSizeIcon {
  font-size: 14px;
}

.mediumSizeIcon {
  font-size: 18px;
}

.largeSizeIcon {
  font-size: 22px;
}

.xLargeSizeIcon {
  font-size: 32px;
}

.extraLargeSizeIcon {
  font-size: 40px;
}
</style>
