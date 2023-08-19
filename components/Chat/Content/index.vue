<script setup lang="ts">
interface Props {
	isLoaded: boolean;
}

defineProps<Props>();
</script>
<template>
	<div>
		<template v-if="!isLoaded">
			<ChatContentLoading />
		</template>
		<template v-else>
			<ChatContentFileDrop />
		</template>
	</div>
</template>
