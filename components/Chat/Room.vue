<script setup lang="ts">
const isLoaded = ref<boolean>(false);

const connId = ref<string | null>(null);

const socket = ref<WebSocket | null>(null);

const messages = ref<string[]>([]);

const { $createWebSocket } = useNuxtApp();

onMounted(() => {
	socket.value = $createWebSocket();

	socket.value.onopen = handleOnOpen;

	socket.value.onmessage = handleOnGetMessage;
});

const handleOnOpen = () => {
	isLoaded.value = true;
};

const handleOnGetMessage = (event: MessageEvent<string>) => {
	if (event.data.substring(0, 7) === 'ConnID:') {
		connId.value = event.data.substring(8, 45);
	} else {
		messages.value.push(event.data);
	}
};

const handleOnSendMessage = (message: string) => {
	if (socket.value) {
		const data = {
			From: connId.value,
			To: '',
			Message: message
		};
		socket.value.send(JSON.stringify(data));
	}
};

onUnmounted(() => {
	if (socket.value) {
		socket.value.close();
	}
});
</script>
<template>
	<v-sheet rounded height="100%" class="d-flex flex-column pa-6">
		<ChatContent
			class="flex-grow-1 flex-shrink-1"
			:is-loaded="isLoaded"
			:messages="messages"
		/>
		<ChatPanel
			class="flex-grow-0 flex-shrink-0"
			:is-loaded="isLoaded"
			@send-message="handleOnSendMessage"
		/>
	</v-sheet>
</template>
