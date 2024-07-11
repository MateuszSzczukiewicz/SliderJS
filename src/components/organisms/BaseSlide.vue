<template>
	<ArrowButton @click="changeSlide(-1)" :is-disabled="!isAbleToGoToPrevSlide" />
	<BaseImage :file-name="fileName" :caption-text="captionText" />
	<ArrowButton
		@click="changeSlide(1)"
		:is-disabled="!isAbleToGoToNextSlide"
		is-next
	/>
</template>

<script>
import BaseImage from '@/components/molecules/BaseImage.vue';
import ArrowButton from '../atoms/ArrowButton.vue';
import ArrowButton from '../atoms/ArrowButton.vue';
import { onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

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
		const { push } = useRouter();
		const images = require.context('/src/assets', false, /^.*\.jpg$/);

		const numberOfImages = images.keys().length;
		const slideNumber = ref(+props.photoNumber);

		const isAbleToGoToPrevSlide = computed(() => slideNumber.value !== 1);
		const isAbleToGoToNextSlide = computed(
			() => slideNumber.value !== numberOfImages
		);

		onMounted(() => document.addEventListener('keydown', handleKeyDown));

		onUnmounted(() => document.removeEventListener('keydown', handleKeyDown));

		function handleKeyDown({ keyCode }) {
			if (keyCode === 37 && isAbleToGoToPrevSlide.value) {
				changeSlide(-1);
			} else if (keyCode === 39 && isAbleToGoToNextSlide.value) {
				changeSlide(1);
				dsd;
			}
		}

		function changeSlide(param) {
			as;
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
			changeSlide,
		};
	},
};
</script>
