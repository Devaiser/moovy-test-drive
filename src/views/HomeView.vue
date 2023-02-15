<template>
  <div class="app-wrapper">
    <main class="main">
      <section class="section">
        <Title />
        <Transition mode="out-in">
          <PromoScreen
            v-if="activeScreen === 'promo'"
            @submit="setActiveScreen('form')"
          />
          <FormScreen v-else-if="activeScreen === 'form'" @submit="onSubmit" />
          <ReferralScreen
            v-else-if="activeScreen === 'referral'"
            :refLink="refLink"
          />
        </Transition>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import smoothscroll from 'smoothscroll-polyfill';
import { ref } from 'vue';
import {
  Title,
  Footer,
  PromoScreen,
  FormScreen,
  ReferralScreen,
} from '@/components/';

const activeScreen = ref('promo');

const setActiveScreen = (screen) => {
  smoothscroll.polyfill();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
  activeScreen.value = screen;
};

const refLink = ref(null);

const onSubmit = (message) => {
  setActiveScreen('referral');
  refLink.value = `https://beta.moovy.io/${message}`;
};
</script>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #000;
  min-height: 100vh;
}
.main {
  background: #000;
  padding: 0 40px;
}
.section {
  /* min-height: 80vh; */
  padding-top: 3%;
  box-sizing: border-box;
}
@media (max-width: 768px) {
  .main {
    padding: 0 20px;
  }
}
</style>
