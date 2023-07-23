import { defineStore } from 'pinia';

export const useModalStore = defineStore('modalStore', {
	state: () => ({
		addChatModal: false
	}),
	getters: {
		getAddChatModal: (state) => state.addChatModal
	},
	actions: {
		setAddChatModal(payload: boolean) {
			this.addChatModal = payload;
		}
	}
});
