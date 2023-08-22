interface WebSoketParams {
	url?: URL;
	path?: string;
}

export default defineNuxtPlugin(() => {
	const useWebSocket = (params?: WebSoketParams) => {
		let url: URL;

		const path: string = params?.path ?? '/';

		const { baseSocketApi } = useRuntimeConfig().public;

		// eslint-disable-next-line
		console.log('LL: createWebSocket -> baseSocketApi', baseSocketApi);

		url = new URL(path, baseSocketApi);

		if (params?.url) {
			url = new URL(path, params.url);
		}

		const socket = new WebSocket(url);

		return socket;
	};

	return {
		provide: {
			useWebSocket
		}
	};
});
