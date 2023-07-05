import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css';
import App from './App.vue'
import WelcomePage from './components/WelcomePage.vue';
import ConfigurationPage from './components/ConfigurationPage.vue';


const app = createApp(App)


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: WelcomePage },
        { path: '/configuration', component: ConfigurationPage }
    ]
});


app.use(ElementPlus, { dark: true });
app.use(router);
app.mount('#app');