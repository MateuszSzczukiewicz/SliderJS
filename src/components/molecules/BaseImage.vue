<template>
	<figure>
		<img src="require('@/assets/img1.jpg')" alt="Slide" class="image" />
		<BaseCaption />
	</figure>
</template>

<script>
import BaseCaption from '@/components/atoms/BaseCaption';

export default {
	name: 'BaseImage',
	components: {
		BaseCaption,
	},
};
</script>

<style lang="scss" scoped>
.image {
	height: auto;
	max-width: 100%;
}
</style>
