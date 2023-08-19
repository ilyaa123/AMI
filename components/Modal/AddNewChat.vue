<script setup lang="ts">
import { computed } from 'vue';

import { useModalStore } from '../../store/modalStore';

import type { NewChatData } from '~/types/chat';

const store = useModalStore();

const value = computed(() => store.addChatModal);

const valid = ref(false);

const chatData = reactive<NewChatData>({
	name: '',
	password: ''
});

const handleToUpdate = (value: boolean) => {
	store.setAddChatModal(value);
};

const handleOnSubmit = () => {
	// eslint-disable-next-line
	console.log('newChatData', chatData);
};

const handleOnChange = (value: string, name: keyof NewChatData) => {
	chatData[name] = value;
};

const handleOnChangeValid = (value: boolean) => {
	valid.value = value;
};
</script>

<template>
	<v-dialog
		:model-value="value"
		max-width="600px"
		width="100%"
		@update:model-value="handleToUpdate"
	>
		<v-card class="py-4">
			<v-card-title>Create New Chat</v-card-title>
			<v-card-text class="pb-0">
				<form-add-new-chat
					:chat-data="chatData"
					@change-value="(event, name) => handleOnChange(event, name)"
					@change-valid="handleOnChangeValid"
					@submit="handleOnSubmit"
				/>
			</v-card-text>
			<v-card-actions>
				<v-spacer />
				<v-row class="py-0 my-0">
					<v-col md="6" cols="12">
						<v-btn block @click="handleToUpdate(false)"
							>Close</v-btn
						>
					</v-col>
					<v-col md="6" cols="12">
						<v-btn
							block
							variant="outlined"
							color="primary"
							:disabled="!valid"
							@click="handleOnSubmit"
							>Accept</v-btn
						>
					</v-col>
				</v-row>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>
