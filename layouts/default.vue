<template>
    <div>
        <v-app-bar absolute>
            <NuxtLink to="/"><v-btn color="primary" variant="outlined">Home</v-btn></NuxtLink>
            <NuxtLink to="/test"><v-btn color="primary">Test</v-btn></NuxtLink>
        </v-app-bar>
        <slot />
    </div>
</template>