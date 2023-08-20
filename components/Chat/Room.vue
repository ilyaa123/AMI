<script setup lang="ts">
const isLoaded = ref<boolean>(false);

const { $webSocket } = useNuxtApp();

const socket = $webSocket();

socket.onopen = () => {
	isLoaded.value = true;
};
</script>
<template>
	<v-sheet rounded height="100%" class="d-flex flex-column pa-6">
		<ChatContent class="flex-grow-1 flex-shrink-1" :is-loaded="isLoaded" />
		<ChatPanel class="flex-grow-0 flex-shrink-0" :is-loaded="isLoaded" />
	</v-sheet>
</template>
