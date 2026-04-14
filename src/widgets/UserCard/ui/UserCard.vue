<script setup lang="ts">
import Card from 'primevue/card';
</script>

<template>
  <Card class="userCard">
    <template #title>userCard</template>
    <template #subtitle>subtitle</template>
    <template #content>content</template>
  </Card>
</template>

<style lang="scss" scoped>
.userCard {
  flex-direction: column;
}
</style>
