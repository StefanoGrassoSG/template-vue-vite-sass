import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import GraphicsComponent from './components/GraphicsComponent.vue';
import WebComponent from './components/WebComponent.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/register',
            name: 'register',
            //component: RegisterPage
        },
        {
            path: '/login',
            name: 'login',
           // component: LoginPage
        },
        {
            path: '/graphics',
            name: 'graphics',
            component: GraphicsComponent
        },
        {
            path: '/web',
            name: 'web',
            component: WebComponent
        },
    ]
});

export { router };