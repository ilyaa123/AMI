<script setup lang="ts">
// import { VInfiniteScroll } from 'vuetify/labs/VInfiniteScroll';

interface Props {
	isLoaded: boolean;
	messages: string[];
}

defineProps<Props>();
</script>
<template>
	<div>
		<template v-if="!isLoaded">
			<ChatContentLoading />
		</template>
		<template v-else>
			<ChatContentFileDrop>
				<ChatContentMessages :messages="messages" />
			</ChatContentFileDrop>
		</template>
	</div>
</template>
