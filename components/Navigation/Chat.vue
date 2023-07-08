<script setup lang="ts">
	interface Props {
		message: string;
        name: string;
        time: string;
        image: string;
        number: string | number;
	}

  	const { message, number, name, time, image } = defineProps<Props>();

    const router = useRouter();

</script>
<template>
    <v-list-item
        :prepend-avatar="image"
        nav
        lines="two"
        @click="router.push(`/app/chat/${number}`)"
        style="align-items: start;"
    >
        <v-list-item-title class="d-flex align-center">
            {{ name }}
        </v-list-item-title>
        <v-list-item-subtitle>
            {{ message }}?
        </v-list-item-subtitle>
        <template v-slot:append>
            <v-icon size="medium" icon="mdi-check-all"></v-icon>
            <span class="chat-block__time">{{ time }}</span>
        </template>
    </v-list-item>
</template>