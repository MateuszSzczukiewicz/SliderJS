<template>
	<figure>
		<img :src="require(`@/assets/${fileName}`)" alt="Slide" class="image" />
		<BaseCaption :text="captionText" />
	</figure>
</template>

<script lang="ts">
import BaseCaption from '@/components/atoms/BaseCaption.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'BaseImage',
	components: {
		BaseCaption,
	},
	props: {
		fileName: {
			type: String,
			required: true,
		},
		captionText: {
			type: String,
			required: true,
		},
	},
});
</script>

<style lang="scss" scoped>
.image {
	height: auto;
	max-width: 100%;
}
</style>
