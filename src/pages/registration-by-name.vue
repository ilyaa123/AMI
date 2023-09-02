<script setup lang="ts">
import { RulesType } from '~/types/other';

definePageMeta({
	layout: 'session'
});

const auth = useAuth();

const name = useState('name', () => '');

const isValid = useState('isValid', () => false);

const rules: RulesType = [(value) => !!value || 'This field is required'];

const handleOnRegister = () => {
	auth.registerByName(name.value);
};
</script>
<template>
	<v-card max-width="600px" width="100%" class="py-6">
		<v-card-title class="text-center">Write your username</v-card-title>
		<v-card-text>
			<v-form v-model="isValid" @submit.prevent="handleOnRegister">
				<v-row>
					<v-col cols="12">
						<v-text-field
							v-model="name"
							class="centered-input"
							label="Name"
							single-line
							outline
							style="text-align: center"
							:rules="rules"
						/>
					</v-col>
				</v-row>
			</v-form>
		</v-card-text>
		<v-card-actions>
			<v-btn
				:disabled="!isValid"
				color="primary"
				variant="outlined"
				block
				@click="handleOnRegister"
				>Accept</v-btn
			>
		</v-card-actions>
	</v-card>
</template>
<style scoped>
.centered-input:deep(input) {
	text-align: center;
}
.centered-input:deep(.v-label) {
	top: 50%;
	left: 50%;
	transform: translate(-90%, -50%);
}
</style>
