import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Countdown from 'vue3-flip-countdown';

import './assets/index.css';

const app = createApp(App);

app.use(router);
app.use(Countdown);

app.mount('#app');
