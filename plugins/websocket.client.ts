interface WebSoketParams {
	url?: URL;
	path: string;
}

export default defineNuxtPlugin(() => {
	const createWebSocket = (params?: WebSoketParams) => {
		let url: URL;

		// let path: string = '/';

		const { baseSocketApi } = useRuntimeConfig().public;

		url = new URL(baseSocketApi);

		if (params?.url) {
			url = new URL(params.url);
		}

		const socket = new WebSocket(url);

		return socket;
	};

	return {
		provide: {
			createWebSocket
		}
	};
});
