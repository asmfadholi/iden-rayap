import Home from '@/views/home/Home';
import MHome from '@/views/home/MHome';
import Microtermes from '@/views/home/microtermes/Microtermes';
import Macrotermes from '@/views/home/macrotermes/Macrotermes';
import Odontermes from '@/views/home/odontermes/Odontermes';
import Pericapritermes from '@/views/home/pericapritermes/Pericapritermes';
import Family from '@/views/home/family/Family';
import Guideline from '@/views/home/guideline/Guideline';

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
        redirect: '/new/guideline',
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
            {
                path: 'pericapritermes',
                name: 'Serangga',
                component: Pericapritermes,
                meta: {
                    title: 'Home',
                },
            },

            {
                path: 'family',
                name: 'Serangga',
                component: Family,
                meta: {
                    title: 'Home',
                },
            },
            {
                path: 'guideline',
                name: 'Measurement Guideline',
                component: Guideline,
                meta: {
                    title: 'Home',
                },
            },
        ],
    },
];