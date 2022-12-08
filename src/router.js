import { createRouter, createWebHistory } from 'vue-router';

// pages
import FormPage from './pages/FormPage.vue';

//children
import FormAddons from './components/FormSteps/FormAddons.vue';
import FormInfo from './components/FormSteps/FormInfo.vue';
import FormPlan from './components/FormSteps/FormPlan.vue';
import FormSummary from './components/FormSteps/FormSummary.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/new',
    },
    {
      path: '/new',
      redirect: '/new/info',
      component: FormPage,
      children: [
        { path: 'info', component: FormInfo },
        { path: 'plan', component: FormPlan },
        { path: 'addons', component: FormAddons },
        { path: 'summary', component: FormSummary },
      ],
    },
    {
      path: '/:notFound(.*)',
      redirect: '/',
    },
  ],
});

export default router;
