<template>
	<ArrowButton @click="changeSlide(-1)" :is-disabled="!isAbleToGoToPrevSlide" />
	<BaseImage :file-name="fileName" :caption-text="captionText" />
	<ArrowButton
		@click="changeSlide(1)"
		:is-disabled="!isAbleToGoToNextSlide"
		is-next
	/>
</template>

<script lang="ts">
import {
	defineComponent,
	onMounted,
	onUnmounted,
	ref,
	computed,
	Ref,
	ComputedRef,
} from 'vue';
import { useRouter } from 'vue-router';
import BaseImage from '@/components/molecules/BaseImage.vue';
import ArrowButton from '@/components/atoms/ArrowButton.vue';
import { getNumberOfImages } from '@/helpers/getNumberOfImages';

export default defineComponent({
	name: 'BaseSlide',
	components: {
		BaseImage,
		ArrowButton,
	},
	props: {
		photoNumber: {
			type: String,
			default: '1',
		},
	},
	setup(props) {
		const { push } = useRouter();
		const numberOfImages = getNumberOfImages();

		const slideNumber: Ref<number> = ref(+props.photoNumber);

		const isAbleToGoToPrevSlide: ComputedRef<boolean> = computed(
			() => slideNumber.value !== 1
		);
		const isAbleToGoToNextSlide: ComputedRef<boolean> = computed(
			() => slideNumber.value !== numberOfImages
		);

		onMounted(() => document.addEventListener('keydown', handleKeyDown));
		onUnmounted(() => document.removeEventListener('keydown', handleKeyDown));

		function handleKeyDown(event: KeyboardEvent): void {
			if (event.key === 'ArrowLeft' && isAbleToGoToPrevSlide.value) {
				changeSlide(-1);
			} else if (event.key === 'ArrowRight' && isAbleToGoToNextSlide.value) {
				changeSlide(1);
			}
		}

		function changeSlide(param: number): void {
			slideNumber.value = slideNumber.value + param;
			push(`/slide/${slideNumber.value}`);
		}

		const fileName: ComputedRef<string> = computed(
			() => `${slideNumber.value}.jpg`
		);
		const captionText: ComputedRef<string> = computed(
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
});
</script>
