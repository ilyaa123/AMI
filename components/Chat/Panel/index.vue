<script setup lang="ts">
interface Props {
	isLoaded: boolean;
}

defineProps<Props>();
</script>
<template>
	<div>
		<ChatPanelInput :disabled="!isLoaded" />
	</div>
</template>
