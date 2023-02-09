<template>
  <div class="timer" v-if="loaded">
    {{ dispalyDays }} : {{ dispalyHours }} : {{ dispalyMinutes }} :
    {{ dispalySeconds }}
  </div>
  <div v-if="expired" class="timer">Timer end</div>
</template>
<script setup>
  import { ref, computed, onMounted } from 'vue';

  const props = defineProps([
    'year',
    'month',
    'day',
    'hour',
    'minute',
    'second',
    'millisecond',
  ]);

  const dispalyDays = ref(0);
  const dispalyHours = ref(0);
  const dispalyMinutes = ref(0);
  const dispalySeconds = ref(0);

  const loaded = ref(false);

  const expired = ref(false);

  const _seconds = computed(() => 1000);
  const _minutes = computed(() => _seconds.value * 60);
  const _hours = computed(() => _minutes.value * 60);
  const _days = computed(() => _hours.value * 24);

  const deadline = computed(() => {
    return new Date(
      props.year,
      props.month,
      props.day,
      props.hour,
      props.minute,
      props.second,
      props.millisecond
    );
  });

  onMounted(() => {
    showRemaining();
  });

  const formatNum = (num) => (num < 10 ? '0' + num : num);

  const showRemaining = () => {
    const timer = setInterval(() => {
      const now = new Date();
      // const end = new Date(2023, 1, 10, 0, 0, 0);
      const distance = deadline.value.getTime() - now.getTime();

      if (distance < 0) {
        clearInterval(timer);
        expired.value = true;
        return;
      }

      const days = Math.floor(distance / _days.value);
      const hours = Math.floor((distance % _days.value) / _hours.value);
      const minutes = Math.floor((distance % _hours.value) / _minutes.value);
      const seconds = Math.floor((distance % _minutes.value) / _seconds.value);

      dispalyMinutes.value = formatNum(minutes);
      dispalySeconds.value = formatNum(seconds);
      dispalyHours.value = formatNum(hours);
      dispalyDays.value = formatNum(days);
      loaded.value = true;
    }, 1000);
  };
</script>
	<style scoped>
  .timer {
    color: #fff;
    text-align: center;
  }
</style>