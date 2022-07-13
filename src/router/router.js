import { createRouter, createWebHashHistory } from 'vue-router';
import NoPageFound from '@/modules/shared/pages/NoPageFound';

const routes = [
    {   path: '/', 
        component: () => import(/* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage')
    },
    {   path: '/about', 
        component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage')
    },
    {   path: '/id', 
        component: () => import(/* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage')
    },
    {   path: '/:pathMatch(.*)*', 
        component: NoPageFound
    }
]

const router = createRouter({   
    history: createWebHashHistory(),
    routes,
})

export default router
