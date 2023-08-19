<script setup lang="ts">
const isLoaded = ref<boolean>(false);

onMounted(() => {
	const ctx = useNuxtApp();

	ctx.onUnmounted = onUnmounted;

	const socket = ctx.$nuxtSocket({
		name: 'chat',
		reconnection: false
	});

	socket.on('connect_error', () => {
		// eslint-disable-next-line
		console.log('connect_error');
	});

	socket.on('connect', () => {
		// eslint-disable-next-line
		console.log('connect');
		isLoaded.value = true;
	});
});
</script>
<template>
	<v-sheet rounded height="100%" class="d-flex flex-column pa-6">
		<ChatContent class="flex-grow-1 flex-shrink-1" :is-loaded="isLoaded" />
		<ChatPanel class="flex-grow-0 flex-shrink-0" :is-loaded="isLoaded" />
	</v-sheet>
</template>
