<template>
	<v-app-bar location="top" rounded class="mx-4 px-4">
		<template #prepend>
			<NuxtLink to="/" style="text-decoration: none; color: inherit"
				><v-app-bar-title>AMI</v-app-bar-title></NuxtLink
			>
		</template>
		<v-spacer></v-spacer>
		<v-btn icon>
			<v-icon>mdi-magnify</v-icon>
		</v-btn>
		<div v-if="false">
			<v-btn icon>
				<v-avatar></v-avatar>
			</v-btn>
		</div>
		<LayoutsElementsUserAvatar />
	</v-app-bar>
</template>
