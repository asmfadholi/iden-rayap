import Vue from 'vue';
import Router from 'vue-router';
import RouterHome from './modules/home/RouterHome';

Vue.use(Router);

const moduleRoutes = [
  RouterHome,
];

const baseRoutes = [
  {
    path: '*',
    redirect: '/',
  },
];

const routes = baseRoutes.concat(...moduleRoutes);

const router = new Router({
  mode: 'hash',
  routes,
});


// validate route by middleware
function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];

  if (!subsequentMiddleware) return context.next;

  return () => {
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      to,
    };

    const nextMiddleware = nextFactory(context, middleware, 1);
    return middleware[0]({ ...context, next: nextMiddleware });
  }
  return next();
});

export default router;
