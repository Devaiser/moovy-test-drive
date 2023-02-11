<template>
  <button class="button">
    <span>join</span>
  </button>
</template>
<script setup>
</script>
<style scoped>
  .button {
    background: linear-gradient(285.8deg, #21e7d6 3.03%, #21e7d6 81.45%);
    border-radius: 9px;
    width: 251px;
    height: 54px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 4px solid #21e7d6;
    cursor: pointer;
    margin: 0 auto;
  }
  .button span {
    text-transform: uppercase;
    background: linear-gradient(104.04deg, #21e7d6 -85.16%, #000000 105.45%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-weight: 900;
    font-size: 32px;
    line-height: 1.06;
  }
  @media (max-width: 400px) {
    .button {
      width: 201px;
      height: 47px;
    }
  }
</style>