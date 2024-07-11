<template>
	<figcaption class="caption">{{ text }}</figcaption>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'BaseCaption',
	props: {
		text: {
			type: String,
			default: '',
		},
	},
});
</script>

<style lang="scss" scoped>
.caption {
	width: 100%;
	text-align: center;
	font-size: 25px;
}
</style>
