<script setup lang="ts">
// import { APP_ROUTES } from '@/shared/config';
// import { BaseButton, BaseText, BaseContainer } from '@/shared/ui';

// const finTechBenefits = [
//   'Real-Time Exchange Rates: Instant currency tracking with live charts and historical data.',
//   'Global Financial News: Breaking updates from top agencies and key market events.',
//   'Expert Analytics: Professional forecasts, technical analysis, and economic trend reviews.',
//   'Smart Alerts: Custom notifications to ensure you never miss a market move.',
// ];
</script>

<template>
  <div class="mainPage">
    <!-- <BaseContainer
      paddingValue="normal"
      gapValue="normal"
      flexValue="column"
      radiusValue="normal"
      class="finTechWidget"
    >
      <h3>Your All-in-One Financial Terminal</h3>
      <ul class="benefits">
        <li class="benefit" v-for="benefit in finTechBenefits" :key="benefit">
          <BaseText size="medium" weight="bold" tag="span" :value="benefit" />
        </li>
      </ul>
      <BaseButton
        value="Get Started"
        class="flowButton"
        @onClick="$router.push(APP_ROUTES.FINANCE)"
        theme="primary"
      />
    </BaseContainer> -->
  </div>
</template>

<style lang="scss" scoped>
.mainPage {
  width: 100%;
}

.flowButton {
  max-width: 174px;
}

.finTechWidget {
  background-color: var(--white-100);
}
</style>
