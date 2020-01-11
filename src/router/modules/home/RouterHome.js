import Home from '@/views/home/Home';
import MHome from '@/views/home/MHome';
import Microtermes from '@/views/home/microtermes/Microtermes';
import Macrotermes from '@/views/home/macrotermes/Macrotermes';

export default [{
        path: '/',
        name: 'Exchange Currency',
        component: Home,
        meta: {
            title: 'Home',
        },
    },
    {
        path: '/new',
        name: 'Serangga',
        component: MHome,
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
        ],
    },
];