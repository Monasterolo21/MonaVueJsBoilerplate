import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { MotionPlugin } from '@vueuse/motion'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';


const app = createApp(App)

app.use(store)
app.use(router)
app.use(MotionPlugin)
app.use(VueSweetalert2)
app.use(VueToast, {
  // One of the options
  position: 'top-left'
});


app.mount('#app');
