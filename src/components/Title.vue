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
</style>