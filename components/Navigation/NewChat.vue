<script setup lang="ts">
import { computed } from 'vue';
import { useModalStore } from '~/store/modalStore';
const store = useModalStore();

const value = computed(() => store.addChatModal).value;

const handleToAddNewChat = () => {
	store.setAddChatModal(!value);
};
</script>
<template>
	<v-list>
		<v-list-item @click="handleToAddNewChat">
			<template #prepend>
				<v-icon>mdi-plus</v-icon>
			</template>
			<v-list-item-title>Create new chat</v-list-item-title>
		</v-list-item>
	</v-list>
</template>
