import Home from '@/views/home/Home';
import Microtermes from '@/views/home/microtermes/Microtermes';

export default [
  {
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
    component: Microtermes,
    meta: {
      title: 'Home',
    },
  },
];
