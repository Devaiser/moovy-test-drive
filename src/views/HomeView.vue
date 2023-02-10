<template>
  <main class="main">
    <section class="section">
      <Title />
      <Transition mode="out-in">
        <PromoScreen
          v-if="activeScreen === 'promo'"
          @submit="setActiveScreen('form')"
        />
        <FormScreen
          v-else-if="activeScreen === 'form'"
          @submit="setActiveScreen('referral')"
        />
        <ReferralScreen v-else-if="activeScreen === 'referral'" />
      </Transition>
    </section>
  </main>
  <Footer />
</template>

<script setup>
  import { ref } from 'vue';
  import {
    Title,
    Footer,
    Timer,
    PromoScreen,
    FormScreen,
    ReferralScreen,
  } from '@/components/';

  const activeScreen = ref('promo');

  const setActiveScreen = (screen) => {
    activeScreen.value = screen;
  };
</script>

<style scoped>
  .main {
    background: #000;
    padding: 0 40px;
  }
  .section {
    min-height: 100vh;
    padding-top: 3%;
    box-sizing: border-box;
  }
</style>