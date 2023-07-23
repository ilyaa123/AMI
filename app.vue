<template>
	<v-app>
		<nuxt-layout>
			<nuxt-loading-indicator :throttle="0" />
			<nuxt-page />
		</nuxt-layout>
	</v-app>
</template>
<style lang="scss">
$body-font-family: 'Roboto';
$title-font: 'Roboto';
.v-application {
	font-family: $body-font-family !important;
	.title {
		font-family: $title-font !important;
	}
}
.page-enter-active,
.page-leave-active {
	transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
}
.layout-enter-active,
.layout-leave-active {
	transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
	filter: grayscale(1);
}
</style>
