<script setup lang="ts">
interface Props {
	messages: string[];
}

defineProps<Props>();
</script>
<template>
	<div class="messages__container">
		<v-list lines="one">
			<template v-for="message in messages" :key="message">
				<v-list-item :title="message"></v-list-item>
			</template>
		</v-list>
	</div>
</template>
<style scoped>
.messages__container {
	height: 100%;
	display: flex;
	align-items: flex-end;
	justify-content: flex-start;
}
</style>
