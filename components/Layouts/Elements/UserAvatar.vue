<script setup lang="ts">
const auth = useAuth();

const user = computed(() => {
	return auth.user.value;
});

const color = computed(() => {
	return user.value?.image?.color;
});

const name = computed(() => {
	return user.value?.name
		?.split(' ')
		.map((item) => item[0])
		.join(' ');
});
</script>
<template>
	<v-menu
		v-if="user"
		max-width="300px"
		rounded
		width="100%"
		:close-on-content-click="false"
		location="bottom right"
	>
		<template #activator="{ props }">
			<v-btn icon v-bind="props">
				<v-avatar :color="color">
					<span class="text-h6">{{ name }}</span>
				</v-avatar>
			</v-btn>
		</template>
		<v-card class="py-2">
			<v-card-title class="text-center">{{ user.name }}</v-card-title>
			<v-divider />
			<v-card-text class="mx-auto text-center">
				<v-btn variant="text" block @click="auth.logout()">
					Logout
				</v-btn>
			</v-card-text>
		</v-card>
	</v-menu>
</template>
