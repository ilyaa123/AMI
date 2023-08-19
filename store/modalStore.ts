import { defineStore } from 'pinia';

export const useModalStore = defineStore('modalStore', () => {
	const addChatModal = ref<boolean>(false);

	function setAddChatModal(payload: boolean) {
		addChatModal.value = payload;
	}

	return { addChatModal, setAddChatModal };
});
