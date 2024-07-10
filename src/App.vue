<template>
	<main class="slider">
		<BaseSlide />
	</main>
</template>

<script>
import BaseSlide from '@/components/organisms/BaseSlide.vue';

export default {
	name: 'App',
	components: {
		BaseSlide,
	},
};
</script>

<style lang="scss">
*,
*::after,
*::before {
	margin: 0;
	padding: 0;
	box-sizing: inherit;
}
html {
	font-size: 62.5%;
}
body {
	font-family: 'Lato', sans-serif;
	box-sizing: border-box;
}
.slider {
	display: flex;
	align-items: center;
	position: relative;
	width: 1140px;
	margin-right: auto;
	margin-left: auto;
}
</style>
