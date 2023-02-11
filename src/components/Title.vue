<template>
  <div class="title">
    <div class="title__logo">
      <img src="/img/logo.png" alt="logo" class="image" />
    </div>
    <h1 class="title__text gray-gradient">test drive</h1>
  </div>
</template>
<script setup>
</script>
<style scoped>
  .title {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: 40px;
  }
  .title__logo {
    width: 400px;
    user-select: none;
    pointer-events: none;
  }
  .title__text {
    font-weight: 500;
    font-size: 96px;
    line-height: 1.06;
  }
  @media (max-width: 1200px) {
    .title__text {
      font-size: 80px;
    }
    .title__logo {
      width: 330px;
    }
  }
  @media (max-width: 992px) {
    .title__text {
      font-size: 60px;
    }
    .title__logo {
      width: 240px;
    }
  }
  @media (max-width: 768px) {
    .title__text {
      font-size: 50px;
    }
    .title__logo {
      width: 200px;
    }
  }
  @media (max-width: 556px) {
    .title {
      margin-top: 20px;
    }
    .title__text {
      font-size: 34px;
    }
    .title__logo {
      width: 140px;
    }
  }
  @media (max-width: 400px) {
    .title {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .title__text {
      font-size: 40px;
    }
    .title__logo {
      width: 170px;
    }
  }
</style>