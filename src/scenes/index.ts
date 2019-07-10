import VueRouter from 'vue-router';

interface Route {
    path: string
    component: any
}

const routes: Route[] = [
    {
        path: '/',
        component: require('./home-screen/index.vue').default
    }
];


export const router = new VueRouter({
    routes
});
