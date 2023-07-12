import { defineStore } from 'pinia';

export const useModalStore = defineStore('modalStore', {
    state: () => ({
        addChatModal: false
    }),
    getters: {
        getAddChatModal: (state) => state.addChatModal
    },
    actions: {
        setAddChatModal(payload: boolean){
            console.log("🚀 ~ file: modalStore.ts:12 ~ setAddChatModal ~ payload:", payload)
            this.addChatModal = payload
        }
    }

})