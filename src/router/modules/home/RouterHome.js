import Home from '@/views/home/Home';
import MHome from '@/views/home/MHome';
import Microtermes from '@/views/home/microtermes/Microtermes';
import Macrotermes from '@/views/home/macrotermes/Macrotermes';
import Odontermes from '@/views/home/odontermes/Odontermes';

export default [{
        path: '/',
        name: 'Exchange Currency',
        redirect: '/new',
        component: Home,
        meta: {
            title: 'Home',
        },
    },
    {
        path: '/new',
        name: 'Serangga',
        component: MHome,
        redirect: '/new/microtermes',
        meta: {
            title: 'Home',
        },
        children: [{
                path: 'microtermes',
                name: 'Serangga',
                component: Microtermes,
                meta: {
                    title: 'Home',
                },
            },
            {
                path: 'macrotermes',
                name: 'Serangga',
                component: Macrotermes,
                meta: {
                    title: 'Home',
                },
            },
            {
                path: 'odontotermes',
                name: 'Serangga',
                component: Odontermes,
                meta: {
                    title: 'Home',
                },
            },
        ],
    },
];
