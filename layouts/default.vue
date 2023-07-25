<template>
	<v-container style="min-height: 100vh; max-width: 1200px">
		<v-layout style="min-height: 100%">
			<LayoutsDefaultDrawer />
			<LayoutsDefaultAppBar />
			<v-main>
				<v-sheet color="background mt-4 ms-4">
					<slot />
				</v-sheet>
			</v-main>
		</v-layout>
		<ClientOnly>
			<ModalAddNewChat />
		</ClientOnly>
	</v-container>
</template>
