<script setup lang="ts">
import { ref } from "vue";

const messages = ref([
  { text: "text", isUserMessage: true },
  { text: "text1", isUserMessage: false },
]);
</script>

<template>
  <ChatMessage
    v-for="(message, index) in messages"
    :message="message"
    :key="index"
  />
</template>

<style></style>
