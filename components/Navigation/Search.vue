<script setup lang="ts">
import type { VTextField } from 'vuetify/lib/components/index.mjs';

const emit = defineEmits<{
	(e: 'openDrawer'): void;
}>();

const field = ref<VTextField>();

const handleOnOpen = () => {
	emit('openDrawer');

	if (field.value?.focus)
		field.value.focus({
			preventScroll: true
		});
};
</script>
<template>
	<v-list density="compact">
		<v-list-item>
			<template #prepend>
				<v-icon @click="handleOnOpen">mdi-magnify</v-icon>
			</template>
			<v-list-item-action>
				<v-text-field
					ref="field"
					color="primary"
					hide-details
					variant="outlined"
					@click.stop
				/>
			</v-list-item-action>
		</v-list-item>
	</v-list>
</template>
