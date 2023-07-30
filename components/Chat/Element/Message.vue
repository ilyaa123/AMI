<script setup lang="ts">
interface Props {
	message: {
		text: string;
		isUserMessage: boolean;
	};
}

const props = defineProps<Props>();

const message = computed(() => props.message);
</script>

<template>
	{{ message }}
</template>
