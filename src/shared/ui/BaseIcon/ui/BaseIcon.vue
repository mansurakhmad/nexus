<script setup lang="ts">
import LocalIcon from './components/LocalIcon.vue';

import type { BaseIconTypes } from '../models/baseIcon.types';

const { name, sizeValue, localIconName, size } = defineProps<BaseIconTypes.Props>();
</script>

<template>
  <localIcon v-if="localIconName" :localIconName="localIconName" :size="size" />
  <i v-else :class="['pi', `pi-${name}`, `${sizeValue}SizeIcon`]"></i>
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
