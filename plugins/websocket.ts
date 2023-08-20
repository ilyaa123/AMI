export default defineNuxtPlugin(() => {
	if (process.server) return;

	const webSocket = () => {
		const { baseSocketApi } = useRuntimeConfig().public;

		const socket = new WebSocket(baseSocketApi);

		return socket;
	};

	return {
		provide: {
			webSocket
		}
	};
});
