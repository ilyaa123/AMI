<script setup lang="ts">
import { ref } from 'vue';
const rail = ref<boolean>(true);

const drawer = ref<boolean>(true);

const testChats = [
	{
		name: 'Zeri1',
		message: 'Can just tell me alredy how big ur test 1',
		time: '18:19',
		image: '/avatar.png'
	},
	{
		name: 'Zeri2',
		message: 'Can just tell me alredy how big ur test 2',
		time: '18:29',
		image: '/avatar.png'
	},
	{
		name: 'Zeri3',
		message: 'Can just tell me alredy how big ur test 3',
		time: '18:39',
		image: '/avatar.png'
	}
];
</script>
<template>
	<v-navigation-drawer
		:model-value="drawer"
		:rail="rail"
		width="350"
		location="left"
		absolute
		rounded
		permanent
	>
		<v-list lines="one" density="compact" nav>
			<v-list-item color="primary" nav @click="rail = !rail">
				<v-icon
					:icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'"
				></v-icon>
			</v-list-item>
		</v-list>

		<NavigationNewChat />

		<NavigationChat
			v-for="(chat, index) in testChats"
			:key="index"
			:chat="{ ...chat, number: index }"
		/>
	</v-navigation-drawer>
</template>
