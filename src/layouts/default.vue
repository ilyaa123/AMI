<template>
	<v-container style="min-height: 100dvh; max-width: 1200px">
		<v-layout style="min-height: 100%">
			<LayoutsDefaultDrawer />
			<LayoutsDefaultAppBar />
			<v-main>
				<v-sheet rounded color="background mt-4 ms-4" height="100%">
					<slot />
				</v-sheet>
			</v-main>
		</v-layout>
		<ClientOnly>
			<ModalAddNewChat />
		</ClientOnly>
	</v-container>
</template>
