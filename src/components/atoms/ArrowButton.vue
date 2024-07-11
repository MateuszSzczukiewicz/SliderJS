<template>
	<button
		class="arrow-button"
		:class="{
			'arrow-button--prev': !isNext,
			'arrow-button--next': isNext,
			'arrow-button--disabled': isDisabled,
		}"
	></button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'ArrowButton',
	prop: {
		isNext: {
			type: Boolean,
			default: false,
		},
		isDisabled: {
			type: Boolean,
			default: false,
		},
	},
});
</script>

<style lang="scss" scoped>
.arrow-button {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	outline: 0;
	cursor: pointer;
	width: 50px;
	height: 50px;
	background-color: #41b883;
	color: #fff;
	border: none;
	transition: background-color 0.1s ease-in;

	&::before {
		position: absolute;
		left: 0;
		top: 0;
		border: 2px solid #fff;
		border-bottom: 0;
		border-right: 0;
		content: '';
		height: 20px;
		width: 20px;
	}

	&:hover {
		background-color: #3ca576;
	}

	&--disabled {
		opacity: 0.4;
		cursor: default;
		pointer-events: none;
	}

	&--prev {
		left: 0;

		&::before {
			transform: translate(100%, 75%) rotate(-45deg);
		}
	}

	&--next {
		right: 0;

		&::before {
			transform: translate(50%, 75%) rotate(135deg);
		}
	}
}
</style>
