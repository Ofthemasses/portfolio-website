import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Projects from "./components/Projects.vue";
import './style.css';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/projects/:projectType', name: 'Projects', component: Projects }
    ]
});

const app = createApp(App);

app.use(router);

app.mount('#app');