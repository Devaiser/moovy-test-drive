<template>
  <svg
    :width="width"
    :height="width"
    viewBox="0 0 23 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.35494 8.3115C6.3714 6.14533 12.4388 3.06189 17.697 0.978416C22.5512 -0.85945 22.4701 -0.358212 21.7419 4.64496C21.1743 8.64566 20.5255 12.6455 19.8816 16.6462C19.6383 18.5626 18.6652 19.5626 16.6452 18.4006L10.3353 13.8167C9.44324 13.0649 9.68652 12.4801 10.4164 11.7333L16.2405 6.06596C17.7813 4.47872 17.0515 3.89895 15.2674 5.14703L7.25857 10.7308C6.12326 11.5662 4.91252 11.5662 3.61827 11.1485L0.867568 10.146C-0.916495 9.47771 0.4621 8.72586 1.35413 8.31234L1.35494 8.3115Z"
      :fill="color"
    />
  </svg>
</template>
<script setup>
  const props = defineProps({
    width: {
      type: Number,
      default: 23,
    },
    height: {
      type: Number,
      default: 19,
    },
    color: {
      type: String,
      default: '#1FE5D3',
    },
  });
</script>
<style scoped>
</style>