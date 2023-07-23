<script setup lang="ts">
import { ChatType } from '../../types/chat';

interface Props {
	chat: ChatType;
}

const props = defineProps<Props>();

const { image, number, name, message, time } = computed(() => props.chat).value;

const router = useRouter();
</script>
<template>
	<v-list-item
		:prepend-avatar="image"
		nav
		lines="two"
		style="align-items: start"
		@click="router.push(`/app/chat/${number}`)"
	>
		<v-list-item-title class="d-flex align-center">
			{{ name }}
		</v-list-item-title>
		<v-list-item-subtitle> {{ message }}? </v-list-item-subtitle>
		<template #append>
			<v-icon size="medium" icon="mdi-check-all"></v-icon>
			<span class="chat-block__time">{{ time }}</span>
		</template>
	</v-list-item>
</template>
