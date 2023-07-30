<script setup lang="ts">
interface Props {
  message: {
    text: string;
    isUserMessage: boolean;
  };
}

const { message } = defineProps<Props>();
</script>

<template>
  <div class="row">
    <div
      :class="{
        messageLeft: message.isUserMessage,
        messageRight: !message.isUserMessage,
      }"
    >
      {{ message.text }}
    </div>
  </div>
</template>

<style scoped>
.row {
  width: 100%;
}
.messageLeft {
  background-color: #fff;
  width: fit-content;
  color: #000;
  padding: 5px 10px 5px 10px;
  margin: 0 0 0 20px;
  border-radius: 100px;
}

.messageRight {
  background-color: #fff;
  width: fit-content;
  color: #000;
  padding: 5px 10px 5px 10px;
  margin: 0 0 0 20px;
  border-radius: 100px;
  margin: 0 20px 0 auto;
}

.messageLeft:after {
  content: "";
  position: relative;
  left: -40px;
  top: 30px;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #fff;
  clear: both;
  transform: rotate(180deg) !important;
}
</style>
