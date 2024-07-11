import BaseSlide from '@/components/organisms/BaseSlide.vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/slide/:photoNumber',
		name: 'Slide',
		components: {
			BaseSlide,
		},
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
