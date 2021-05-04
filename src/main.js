import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'iframe-resizer/js/iframeResizer.contentWindow'

createApp(App).use(router).mount('#app')
