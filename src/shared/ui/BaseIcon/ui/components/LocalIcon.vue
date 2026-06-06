<script setup lang="ts">
import { LOCAL_ICONS } from '../../config/localIcons.ts';

import type { LocalIconTypes } from '../../models/localIcon.types.ts';

const { localIconName, size } = defineProps<LocalIconTypes.Props>();
const localIcon = LOCAL_ICONS[localIconName];
</script>

<template>
  <component v-if="localIcon" :is="localIcon" :size="size" />
</template>
