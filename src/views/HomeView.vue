<template>
  <main class="main">
    <section class="section">
      <Title />
      <!-- <PromoScreen /> -->
      <FormScreen />
    </section>
  </main>
  <Footer />
</template>

<script setup>
  import { Title, Footer, Timer, PromoScreen, FormScreen } from '@/components/';
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