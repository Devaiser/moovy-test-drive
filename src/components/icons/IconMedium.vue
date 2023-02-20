<template>
  <svg
    width="23"
    height="19"
    viewBox="0 0 23 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.164795 0H22.1648V18.6103H0.164795V0ZM14.3592 4.13916H18.427V4.44716L17.0685 5.42886L17.0872 12.8227L18.427 13.8975V14.1785H12.5827V13.944L13.9577 12.8441V7.0284L10.6038 14.1785H10.1484L6.37207 7.19404L6.32477 12.1416L8.11557 13.9124L8.10457 14.1785H3.82997L3.82667 13.8891L5.34027 12.1416L5.36117 6.02811L3.82997 4.4453V4.13916H8.17607L11.4651 10.3001L14.3592 4.13916Z"
      :fill="color"
    />
  </svg>
</template>
<script setup>
  const props = defineProps({
    color: {
      type: String,
      default: "#1FE5D3",
    },
  });
</script>
<style scoped>
</style>