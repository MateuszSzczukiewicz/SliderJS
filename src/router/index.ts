import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import BaseSlide from '@/components/organisms/BaseSlide.vue';
import { getNumberOfImages } from '@/helpers/getNumberOfImages';

const PATH_TO_FIRST_SLIDE = '/slide/1';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/slide/:photoNumber',
		name: 'Slide',
		component: BaseSlide,
		props: true,
		beforeEnter: (to, from, next) => {
			const { photoNumber } = to.params;
			const numberOfImages = getNumberOfImages();

			const parsedPhotoNumber = parseInt(photoNumber as string, 10);

			const isItPossibleToGoToNextRoute =
				!isNaN(parsedPhotoNumber) &&
				numberOfImages >= 1 &&
				parsedPhotoNumber <= numberOfImages &&
				parsedPhotoNumber > 0;

			if (isItPossibleToGoToNextRoute) {
				next();
			} else {
				next(PATH_TO_FIRST_SLIDE);
			}
		},
	},
	{
		path: '/:catchAll(.*)',
		redirect: PATH_TO_FIRST_SLIDE,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
