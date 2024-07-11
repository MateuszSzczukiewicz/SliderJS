<template>
	<ArrowButton @click="changeSlide()" :is-disabled="!isAbleToGoToPrevSlide" />
	<BaseImage :file-name="fileName" :caption-text="captionText" />
	<ArrowButton :is-disabled="!isAbleToGoToNextSlide" is-next />
</template>

<script>
import BaseImage from '@/components/molecules/BaseImage.vue';
import ArrowButton from '../atoms/ArrowButton.vue';
import ArrowButton from '../atoms/ArrowButton.vue';

export default {
	name: 'BaseSlide',
	components: {
		BaseImage,
		ArrowButton,
	},
	props: {
		photoNumber: {
			type: string,
			default: '1',
		},
	},
	setup(props) {
		const images = require.context('/src/assets', false, /^.*\.jpg$/);

		const numberOfImages = images.keys().length;
		const slideNumber = ref(+props.photoNumber);

		const isAbleToGoToPrevSlide = computed(() => slideNumber.value !== 1);
		const isAbleToGoToNextSlide = computed(
			() => slideNumber.value !== numberOfImages
		);

		function changeSlide(param) {
			slideNumber.value = slideNumber.value + param;
		}

		const fileName = computed(() => `${slideNumber.value}.jpg`);
		const captionText = computed(
			() => `${slideNumber.value}/${numberOfImages}`
		);

		return {
			isAbleToGoToPrevSlide,
			isAbleToGoToNextSlide,
			fileName,
			captionText,
		};
	},
};
</script>
