<script setup lang="ts">
interface Props {
	disabled: boolean;
}

defineProps<Props>();

const message = reactive({
	text: ''
});

const handleOnSandMessage = () => {
	// eslint-disable-next-line
	console.log('send', message.text);
};

const handleOnAddFile = () => {
	// eslint-disable-next-line
	console.log('add');
};
</script>
<template>
	<v-text-field
		v-model="message.text"
		label="Message"
		clearable
		hide-details="auto"
		:disabled="disabled"
		:append-icon="!!message.text ? 'mdi-send' : 'mdi-microphone'"
		prepend-inner-icon="mdi-paperclip"
		@click:append="handleOnSandMessage"
		@click:prepend-inner="handleOnAddFile"
	/>
</template>
