<script setup lang="ts">
import { RulesType } from '~/types/rules';

definePageMeta({
	layout: 'session'
});

const auth = useAuth();

const name = useState('name', () => '');

const isValid = useState('isValid', () => false);

const rules: RulesType = [(value) => !!value || 'Это поле обязательно'];

const hanleOnClick = () => {
	auth.registerByName(name.value);
};
</script>
<template>
	<v-card max-width="600px" width="100%" class="py-6">
		<v-card-title class="text-center">Write your name</v-card-title>
		<v-card-text>
			<v-form v-model="isValid">
				<v-row>
					<v-col cols="12">
						<v-text-field
							v-model="name"
							label="Name"
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
				@click="hanleOnClick"
				>Accept</v-btn
			>
		</v-card-actions>
	</v-card>
</template>
