<script setup lang="ts">
import { VInfiniteScroll } from 'vuetify/labs/VInfiniteScroll';

interface Props {
	messages: string[];
}

defineProps<Props>();

const handleOnLoad: VInfiniteScroll['onLoad'] = ({ done }) => {
	setTimeout(() => {
		done('ok');
	}, 2000);
};
</script>
<template>
	<div class="messages__container">
		<v-infinite-scroll
			height="600"
			width="100%"
			side="start"
			@load="handleOnLoad"
		>
			<template v-for="(message, index) in messages" :key="message">
				<div
					:class="[
						'px-2',
						index % 2 === 0 ? 'bg-grey-lighten-2' : ''
					]"
				>
					<v-list-item :title="message"></v-list-item>
				</div>
			</template>
		</v-infinite-scroll>
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
