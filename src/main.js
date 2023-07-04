import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import Configuration from './components/ConfigurationView.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/configuration', component: Configuration }
        // Add more routes for other pages as needed
    ]
});


const app = createApp(App)

app.use(ElementPlus);
app.use(router);
app.mount('#app');
