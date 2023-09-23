import './bootstrap';
import { createApp } from 'vue';
import Index from "./components/Index";
import router from "./router"
import store from "./store";

const app = createApp();
app.component('Index', Index);

app.use(store)

//app.provide('me', {})
//app.config.globalProperties.$me = 'test'

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });


app.use(router);
app.mount('#app');


