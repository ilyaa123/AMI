<script setup lang="ts">
interface Props {
	isLoaded: boolean;
}

defineProps<Props>();

const emit = defineEmits<{
	(e: 'sendMessage', text: string): void;
}>();

const handleOnSendMessage = (text: string) => emit('sendMessage', text);
</script>
<template>
	<div>
		<ChatPanelInput
			:disabled="!isLoaded"
			@send-message="handleOnSendMessage"
		/>
	</div>
</template>
