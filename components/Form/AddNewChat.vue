<script setup lang="ts">
import type { NewChatData } from '~/types/chat';

import type { RulesType } from '~/types/other';

const emit = defineEmits<{
	(e: 'changeValue', value: string, name: keyof NewChatData): void;
	(e: 'changeValid', value: boolean): void;
	(e: 'submit'): void;
}>();

const props = defineProps<{
	chatData: NewChatData;
}>();

const { chatData } = computed(() => props).value;

const valid = ref(false);

const showPassword = ref(false);

const requieredRules: RulesType = [
	(value) => !!value || 'This field is required'
];

const handleOnChange = (value: string, name: keyof NewChatData) => {
	emit('changeValue', value, name);
};

watch(valid, () => {
	emit('changeValid', valid.value);
});
</script>
<template>
	<v-form v-model="valid" @submit.prevent="() => emit('submit')">
		<v-row no-gutters>
			<v-col cols="12">
				<v-text-field
					variant="outlined"
					label="Name"
					:model-value="chatData.name"
					:rules="requieredRules"
					@update:model-value="
						(value) => handleOnChange(value, 'name')
					"
				/>
			</v-col>
			<v-col cols="12">
				<v-text-field
					variant="outlined"
					label="Password"
					:model-value="chatData.password"
					:rules="requieredRules"
					:append-inner-icon="
						showPassword ? 'mdi-eye' : 'mdi-eye-off'
					"
					:type="showPassword ? 'text' : 'password'"
					@update:model-value="
						(value) => handleOnChange(value, 'password')
					"
					@click:append-inner="showPassword = !showPassword"
				/>
			</v-col>
		</v-row>
	</v-form>
</template>
