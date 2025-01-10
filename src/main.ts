import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import Projects from "./components/Projects.vue";
import Home from "./components/Home.vue";
import VimVentures from "./components/VimVentures.vue";
import OpenFPGAConsole from "./components/OpenFPGAConsole.vue";
import Markdown from "./components/Markdown.vue";
import Uni from "./components/Uni.vue";
import './style.css';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/projects/:projectType', name: 'Projects', component: Projects },
        { path: '/vim-ventures/docs/:pathMatch(.*)*', component:Projects, beforeEnter: (to,from) => {
            var path = to.path.split('/vim-ventures/docs').pop();
            if (path.length == 1){ 
                window.location.href = '/vim-ventures/docs/index.html';
            } else {
                window.location.href = '/vim-ventures/docs' + path;
            }
            return true;
        }},
        { path: '/vim-ventures/', name: 'VimVentures', component: VimVentures},
        { path: '/open-fpga-console/', name: 'OpenFPGAConsole', component: OpenFPGAConsole},
        { path: '/markdown/:markdownPath*', name: 'Markdown', component: Markdown},
        { path: '/uni/', name: 'Uni', component: Uni},
        { path: '/', name: 'Home', component: Home}
    ]
});

const app = createApp(App);

app.use(router);

app.mount('#app');
